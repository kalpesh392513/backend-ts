import { Router } from 'express';
 import Paths from './common/Paths';
import UserRoutes from './user.routes';
// **** Variables **** //

const apiRouter = Router();


// ** Add UserRouter ** //

// Init router
const userRouter = Router();

// Get all users
userRouter.get(Paths.Users.Get+"/:id", UserRoutes.getAll);
userRouter.get(Paths.Users.Add, UserRoutes.add);
userRouter.put(Paths.Users.Update, UserRoutes.update);
userRouter.delete(Paths.Users.Delete, UserRoutes.delete);
// userRouter.get('/get',person.getAllRecords)
// Add UserRouter
apiRouter.use(Paths.Users.Base, userRouter);


// **** Export default **** //

export default apiRouter;
