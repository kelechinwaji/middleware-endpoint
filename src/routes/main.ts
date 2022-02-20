import express, { NextFunction, Request, Response} from "express";
import oceanRoutes from "./child/ocean";
import treeRoutes from "./child/tree";


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


 routes.use('/', oceanRoutes)
 routes.use('/', treeRoutes)

 export default routes;