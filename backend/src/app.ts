import express, { Express } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import uploadRoutes from './routes/upload';
import chatRoutes from './routes/chat';
import errorHandler from './middleware/errorHandler';

dotenv.config();

const app: Express = express();
const clientPath = path.join(__dirname, '../../client');
const tmpDir = path.join(__dirname, '../tmp');

if (!fs.existsSync(tmpDir)) {
  fs.mkdirSync(tmpDir, { recursive: true });
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', uploadRoutes);
app.use('/api', chatRoutes);

const legacyRedirects: Record<string, string> = {
  '/index.html': '/',
  '/about_page.html': '/about',
  '/gallery.html': '/gallery',
  '/contact.html': '/contact',
  '/results.html': '/results',
};

for (const [from, to] of Object.entries(legacyRedirects)) {
  app.get(from, (_req, res) => res.redirect(301, to));
}

app.use(express.static(clientPath));

app.get(['/', '/about', '/gallery', '/contact', '/results'], (_req, res) => {
  res.sendFile(path.join(clientPath, 'index.html'));
});

app.use(errorHandler);

export default app;
