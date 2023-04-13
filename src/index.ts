import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import userRouter from "./routers/user.routes"
import currencyRouter from "./routers/currency.routes"
import logger from './utils/logs.utils';


dotenv.config();

const app: Express = express();
const PORT = process.env.PORT;
const cors = require('cors')
const whitleList = ['http://localhost:4200', 'http://localhost:5000']

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors({origin: whitleList}))

app.get('/ping', (_req: Request, res: Response) => {
  res.send('Pong!');
});

app.listen(PORT, () => {
  logger.info(`⚡️ [SERVER]: Server is running at http://localhost:${PORT} ⚡️`);
});

app.use('/api/user', userRouter)
app.use('/api/currency', currencyRouter)
