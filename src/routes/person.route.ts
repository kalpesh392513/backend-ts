import { Router } from "express";
import Paths from "./common/Paths";
import PersonRoutes from "@src/services/person.service";
import logger from "jet-logger";

const apiRouter = Router();

const userRouter = Router();

// Get all users
userRouter.get("/", (req, res) => {
  logger.warn("/ in person routes");
  res.send("csdgb");
});
userRouter.get(Paths.Person.Add, PersonRoutes.add);

apiRouter.use("/", userRouter);

// **** Export default **** //

export default apiRouter;
