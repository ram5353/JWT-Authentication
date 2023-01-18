import { Router } from "express";
const router = Router();

import * as controller from '../controllers/appController.js';
import {verifyUser} from '../controllers/appController.js';
import Auth, { localVariables } from "../middleware/auth.js";

/** POST Methods */
router.route('/register').post(controller.register); // register user
router.route('/login').post(verifyUser, controller.login);

/** Get Methods */
router.route('/user/:username').get(controller.getUser) // user with username
router.route('/generateOTP').get(controller.verifyUser, localVariables, controller.generateOTP) // generate random OTP
router.route('/verifyOTP').get(controller.verifyUser, controller.verifyOTP) // verify generated OTP
router.route('/createResetSession').get(controller.createResetSession) // reset all the variables

/** PUT Methods */
router.route('/updateuser').put(Auth, controller.updateUser);
router.route('/resetPassword').put(controller.verifyUser, controller.resetPassword); // use to reset password

export default router;