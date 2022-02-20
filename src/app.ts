import  express, { NextFunction, Request, Response} from "express";
import routes from "./routes/main";

const app = express();
const port:number = 5000;


app.use('/', routes)
// const logger = (req:Request, res:Response, next:NextFunction)=>{
//  setTimeout(()=>{
//    console.log(`Heard you are looking for a middleware`); 
//  }, 5000)
//   next();
// }

// app.get('/', logger, (req:Request, res:Response) =>{
//  res.send('We Are Live')
// });

app.listen(port, ()=>{ 
    console.log(`Listening on port:${port}`);
    
})


