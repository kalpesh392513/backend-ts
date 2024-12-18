import { IReq, IRes } from "@src/routes/common";
import logger from "jet-logger";

function add(req: IReq, res: IRes) {
  logger.info("add in person service called/////////////////////");
  res.send("");
}

export default {
  add,
} as const;
