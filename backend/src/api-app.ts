import express, { Express } from 'express';
import uploadRoutes from './routes/upload';
import chatRoutes from './routes/chat';
import errorHandler from './middleware/errorHandler';

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', uploadRoutes);
app.use('/api', chatRoutes);
app.use(errorHandler);

export default app;
