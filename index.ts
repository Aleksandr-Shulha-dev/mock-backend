import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import {
  userRoute,
  withdrawRoute,
  chequesRoute,
  logsRoute,
  statisticRoute,
  chequeInitDataRoute,
  activitiesRoute,
  walletHistory,
  manifest,
  images,
  files,
  ton,
  twitter
} from './routes';

import cors from 'cors';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(
  cors(),
  express.json()
)

app.use(
  '/api/v1', 
  userRoute, 
  withdrawRoute,
  chequesRoute,
  logsRoute,
  statisticRoute,
  chequeInitDataRoute,
  activitiesRoute,
  walletHistory,
  manifest,
  images,
  files,
  ton,
  twitter
)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});