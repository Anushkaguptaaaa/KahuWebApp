import express, { Express } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import apiApp from './api-app';

dotenv.config();

const app: Express = express();
const clientPath = path.join(__dirname, '../../client');

app.use(apiApp);

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

export default app;
