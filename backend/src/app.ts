import express, { Express } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import uploadRoutes from './routes/upload';
import errorHandler from './middleware/errorHandler';

// Load environment variables
dotenv.config();

// Create Express app
const app: Express = express();

// Enable CORS for local development
app.use(cors({
  origin: ['http://localhost:5001', 'http://localhost:3000', 'http://localhost:8080'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-api-key'],
  credentials: true
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create tmp directory if it doesn't exist
const tmpDir = path.join(__dirname, '../tmp');
if (!fs.existsSync(tmpDir)) {
  fs.mkdirSync(tmpDir, { recursive: true });
}

// API routes
app.use('/api', uploadRoutes);

// Serve the original static frontend from client/
const clientPath = path.join(__dirname, '../../client');
app.use(express.static(clientPath));

// Error handling middleware (should be last)
app.use(errorHandler);

export default app;
