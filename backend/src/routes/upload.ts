import express, { Request, Response, NextFunction } from 'express';
import multer from 'multer';
import axios from 'axios';
import FormData from 'form-data';

const router = express.Router();

const ROBOFLOW_BASE_URL = process.env.ROBOFLOW_BASE_URL || 'https://serverless.roboflow.com';
const ROBOFLOW_MODEL = process.env.ROBOFLOW_MODEL || 'cat-breeds-2n7zk/2';

const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Not an image! Please upload only images.') as any);
  }
};

const upload = multer({
  storage: multer.memoryStorage(),
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 },
});

function formatBreedName(className: string): string {
  return className.replace(/_/g, ' ');
}

router.post('/upload', upload.single('image'), async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.file?.buffer) {
      return res.status(400).json({ success: false, error: 'No image file provided' });
    }

    const apiKey = process.env.ROBOFLOW_API_KEY;
    if (!apiKey) {
      return res.status(500).json({
        success: false,
        error: 'Roboflow API key is not configured. Set ROBOFLOW_API_KEY in backend/.env',
      });
    }

    const formData = new FormData();
    formData.append('file', req.file.buffer, {
      filename: req.file.originalname,
      contentType: req.file.mimetype,
    });

    const roboflowUrl = `${ROBOFLOW_BASE_URL}/${ROBOFLOW_MODEL}`;
    const roboflowResponse = await axios.post(roboflowUrl, formData, {
      params: { api_key: apiKey },
      headers: formData.getHeaders(),
    });

    const predictions = roboflowResponse.data.predictions || [];
    const detectedBreeds = predictions
      .sort((a: { confidence: number }, b: { confidence: number }) => b.confidence - a.confidence)
      .map((prediction: { class: string; confidence: number }) => ({
        name: formatBreedName(prediction.class),
        confidence: prediction.confidence,
      }));

    return res.status(200).json({
      success: true,
      breeds: detectedBreeds,
      message: detectedBreeds.length ? undefined : 'No cat breeds detected in the image',
    });
  } catch (error: any) {
    if (error.response) {
      const statusCode = error.response.status === 400 ? 400 : 502;
      return res.status(statusCode).json({
        success: false,
        error: `Roboflow API error: ${error.response.data?.message || error.message}`,
      });
    }

    error.statusCode = 500;
    next(error);
  }
});

export default router;
