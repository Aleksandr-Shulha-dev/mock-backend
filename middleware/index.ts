import { Response, Request, NextFunction } from "express";
import { validate } from '@tma.js/init-data-node';
import dotenv from 'dotenv';

dotenv.config();


const botToken = process.env.BOT_TOKEN || "";

interface CustomRequest extends Request {

}


const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const initData = req.headers.authorization?.substring(7) as string;
    console.log(botToken);
    console.log(initData)
    const resValidation = validate(initData, botToken);
    console.log('res val')
    console.log(resValidation)
    next();
  } catch(e) {
    console.log(e);
    res.sendStatus(401)
  }
}

export { authMiddleware }