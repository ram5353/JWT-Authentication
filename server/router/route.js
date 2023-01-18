import { Router } from "express";
const router = Router();

import * as controller from '../controllers/appController.js';
import {verifyUser} from '../controllers/appController.js';

/** POST Methods */
router.route('/register').post(controller.register); // register user

/** Get Methods */
router.route('/login').post(verifyUser, controller.login);


export default router;