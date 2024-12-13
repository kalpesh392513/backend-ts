import morgan from 'morgan';
import path from 'path';
import helmet from 'helmet';
import express, { Request, Response, NextFunction } from 'express';
import logger from 'jet-logger';
import 'express-async-errors';
import BaseRouter from '@src/routes/main-routes';
import Paths from '@src/routes/common/Paths';
import Env from '@src/common/Env';
import HttpStatusCodes from '@src/common/HttpStatusCodes';
import { RouteError } from '@src/common/route-errors';
import { NodeEnvs } from '@src/common/constants';
import User from './models/User';
// **** Variables **** //

const app = express();
console.log("line after cnst");

// **** Setup **** //

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Show routes called in console during development
if (Env.NodeEnv === NodeEnvs.Dev.valueOf()) {
  console.log("running in dev mode..........................!",Env);
  app.use(morgan('dev'));
}

// Security
if (Env.NodeEnv === NodeEnvs.Production.valueOf()) {
  console.log("running in prod mode..........................!");
  console.log(1/0);
  
}

// Add APIs, must be after middleware
app.use(Paths.Base, BaseRouter);

// Add error handler
app.use((err: Error, _: Request, res: Response, next: NextFunction) => {
  if (Env.NodeEnv !== NodeEnvs.Test.valueOf()) {
    logger.err(err, true);
  }
  let status = HttpStatusCodes.BAD_REQUEST;
  if (err instanceof RouteError) {
    status = err.status;
    res.status(status).json({ error: err.message });
  }
  return next(err);
});


// Nav to users pg by default
app.get('/', (req: Request, res: Response) => {
  console.log("url  / called 1");
   res.send('users');
});

// Redirect to login if not logged in.
app.get('/users', (req: Request, res: Response) => {
   res.send('All users');
});



// **** Export default **** //

export default app;
