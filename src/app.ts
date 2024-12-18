import Env from "@src/common/Env";
import server from "./server";
import logger from "jet-logger";
const dotenv = require("dotenv");


server.listen(Env.Port || 5000, onStart); //() => logger.info(SERVER_START_MSG));


dotenv.config({ path: "./.env" });

const SERVER_START_MSG =
  "Express server started on port: " + Env.Port.toString() ;

function onStart() {
  logger.info(SERVER_START_MSG);
}
