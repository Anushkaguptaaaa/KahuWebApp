import express, { Request, Response, NextFunction } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import axios from 'axios';
import FormData from 'form-data';

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../tmp'));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  },
});

// File filter to only accept image files
const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Not an image! Please upload only images.') as any);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
});

// Upload image and detect breed
router.post('/upload', upload.single('image'), async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, error: 'No image file provided' });
    }

    const filePath = req.file.path;
    
    // Create form data for Cat API
    const formData = new FormData();
    const fileStream = fs.createReadStream(filePath);
    formData.append('file', fileStream, { filename: path.basename(filePath) });

    // Send image to Cat API
    const response = await axios.post('https://api.thecatapi.com/v1/images/upload', formData, {
      headers: {
        'x-api-key': process.env.CAT_API_KEY || '',
        ...formData.getHeaders(),
      },
    });

    // Delete the temporary file
    fs.unlink(filePath, (err) => {
      if (err) console.error('Error deleting file:', err);
    });

    // Check if breeds were detected
    if (response.data && response.data.breeds && response.data.breeds.length > 0) {
      return res.status(200).json({
        success: true,
        breeds: response.data.breeds,
        imageUrl: response.data.url,
      });
    } else {
      return res.status(200).json({
        success: true,
        breeds: [],
        message: 'No cat breeds detected in the image',
        imageUrl: response.data.url,
      });
    }
  } catch (error: any) {
    // Delete the temporary file if it exists
    if (req.file && req.file.path) {
      fs.unlink(req.file.path, (err) => {
        if (err) console.error('Error deleting file:', err);
      });
    }

    // Handle different types of errors
    if (error.response) {
      // Cat API error
      const statusCode = error.response.status === 400 ? 400 : 502;
      error.statusCode = statusCode;
      error.message = `Cat API Error: ${error.response.data.message || 'Unknown error'}`;
    } else {
      error.statusCode = 500;
    }

    next(error);
  }
});

export default router;
