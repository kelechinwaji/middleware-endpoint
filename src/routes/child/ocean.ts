import  express, { NextFunction, Request, Response} from "express";
const morgan = require("morgan")

const oceanRoutes = express.Router();

// Middleware
oceanRoutes.use(morgan("common"))


oceanRoutes.get('/ocean', (req:Request, res:Response, next:NextFunction)=>{
 res.send('check the terminal for the magic')
})

export default oceanRoutes;