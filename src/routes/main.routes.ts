import { Router } from "express";
import Paths from "./common/Paths";
import personRoute from "../routes/person.route";
import studentRoute from "./student.route";
import logger from "jet-logger";
// **** Variables **** //

const apiRouter = Router();
// ** Add UserRouter ** //

// Init router
const mainRoutes = Router();

mainRoutes.use(Paths.Person.Base, personRoute);
mainRoutes.use(Paths.Student.Base, studentRoute);

apiRouter.use("/", mainRoutes);

// **** Export default **** //

export default apiRouter;
