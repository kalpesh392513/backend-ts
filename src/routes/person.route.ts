import { Router } from "express";
import Paths from "./common/Paths";
import PersonRoutes from "@src/services/person.service";
import logger from "jet-logger";

const apiRouter = Router();
const personRouter = Router();


// add routes here
personRouter.get(Paths.Person.Add, PersonRoutes.add);







apiRouter.use("/", personRouter);

export default apiRouter;
