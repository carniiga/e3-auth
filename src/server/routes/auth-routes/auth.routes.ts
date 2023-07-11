import { Router } from "express";
import  * as userCtrl from "../../controllers/user-controllers/userController"
export const authRouter = Router();

authRouter.post("/auth/register" , userCtrl.createUserCtrl)
authRouter.post("/auth/login" , userCtrl.loginUserCtrl)