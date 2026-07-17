import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import aiRouter from './routes/ai';
import hrRouter from './routes/hr';
import inventoryRouter from './routes/inventory';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/ai', aiRouter);
app.use('/api/hr', hrRouter);
app.use('/api/inventory', inventoryRouter);

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'MEDHA API is running' });
});

// Global error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(port, () => {
  console.log(`MEDHA API listening at http://localhost:${port}`);
});
