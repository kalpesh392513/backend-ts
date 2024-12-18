
import Env from '@src/common/Env';
import server from './server';
import logger from 'jet-logger';







server.listen((Env.Port || 5000), onStart) //() => logger.info(SERVER_START_MSG));

const dotenv = require('dotenv');



// **** Run **** //
dotenv.config({ path: './.env' });

const SERVER_START_MSG = ('Express server started on port: ' +
  Env.Port.toString()) + " " + process.env;




function onStart() {

  logger.info(SERVER_START_MSG)
  // console.log(process.env.DB_USERNAME + "",
  //   process.env.DB_NAME + "",
  //   process.env.DB_PASSWORD,);

}