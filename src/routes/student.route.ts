import { Router } from "express";
import Paths from "./common/Paths";
import StudentService from "../services/student.service";
import logger from "jet-logger";

const apiRouter = Router();
const studentRouter = Router();

//add routes here
studentRouter.get(Paths.Student.Get + "/:id", StudentService.getAll);
studentRouter.get(Paths.Student.Add, StudentService.add);
studentRouter.put(Paths.Student.Update, StudentService.update);
studentRouter.delete(Paths.Student.Delete, StudentService.delete);



apiRouter.use("/", studentRouter);
export default apiRouter;
