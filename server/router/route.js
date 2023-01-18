import { Router } from "express";
const router = Router();

import * as controller from '../controllers/appController.js';
import {verifyUser} from '../controllers/appController.js';
import Auth from "../middleware/auth.js";

/** POST Methods */
router.route('/register').post(controller.register); // register user
router.route('/login').post(verifyUser, controller.login);

/** Get Methods */
router.route('/user/:username').get(controller.getUser) // user with username

/** PUT Methods */
router.route('/updateuser').put(Auth, controller.updateUser);

export default router;