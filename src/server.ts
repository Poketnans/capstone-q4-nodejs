// DEV
import listEndpoints from "express-list-endpoints";

import dotenv from "dotenv";
import { Response, Request, NextFunction } from "express";

import { createConnection } from "typeorm";
import { ErrorHandler, handleError } from "./errors";

import app from "./app";
import ormconfig from "./db"


dotenv.config();


app.use(
  (err: ErrorHandler, req: Request, res: Response, next: NextFunction)=>{
    handleError(err, res)
  }
)
    
createConnection(ormconfig)
  .then(()=>{
    const PORT = process.env.PORT ?? 3000;
    console.log("Database connected");
    app.listen(PORT, () =>
      console.log(`App is running on http//localhost:${PORT}`)
    );
  })
  .catch((e)=> console.log(e))

// DEV
console.table(
  listEndpoints(app).map(({ methods, path }) => ({ methods, path }))
);