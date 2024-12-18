import { Router } from "express";
import Paths from "./common/Paths";
import StudentService from "../services/student.service";
import logger from "jet-logger";
// **** Variables **** //

const apiRouter = Router();

// ** Add UserRouter ** //

// Init router
const userRouter = Router();
// Get all users

userRouter.get(Paths.Student.Get + "/:id", StudentService.getAll);
userRouter.get(Paths.Student.Add, StudentService.add);
userRouter.put(Paths.Student.Update, StudentService.update);
userRouter.delete(Paths.Student.Delete, StudentService.delete);

apiRouter.use("/", userRouter);

// **** Export default **** //

export default apiRouter;
