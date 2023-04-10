import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT;
const cors = require('cors')
const whitleList = ['http://localhost:4200']

app.use(express.json())
app.use(cors({origin: whitleList}))

app.get('/ping', (_req: Request, res: Response) => {
  res.send('Pong!');
});

app.listen(PORT, () => {
  console.log(`⚡️[SERVER]: Server is running at http://localhost:${PORT}`);
});
