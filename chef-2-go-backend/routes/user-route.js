import express from 'express';

import * as UserController from '../controllers/user-controller.js';

const router = express.Router();

router.route('/login')
    .post(UserController.loginUser);
router.route("/signup")
    .post(UserController.signupUser);
router.route("/search")
      .get(UserController.searchChef);
export default router;