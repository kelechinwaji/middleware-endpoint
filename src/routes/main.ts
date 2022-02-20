import express, { NextFunction, Request, Response} from "express";

const routes = express.Router();

const logger = (req:Request, res:Response, next:NextFunction)=>{
 setTimeout(()=>{
   console.log(`Heard you are looking for a middleware`); 
 }, 5000)
  next();
}
 
routes.get('/', logger, (req:Request, res:Response) =>{
     res.send('We Are Live')
 });

 export default routes;