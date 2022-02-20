import  express, { NextFunction, Request, Response} from "express";

const treeRoutes = express.Router();

treeRoutes.get('/tree', (req:Request, res:Response, next:NextFunction)=>{
    res.send(`let's grow more trees`)
   })
   
   export default treeRoutes;