import express from 'express';

import * as UserController from '../controllers/user-controller.js';

const router = express.Router();
router.route('/:id')
      .delete(UserController.deleteUser)
router.route('/login')
    .post(UserController.loginUser);
router.route("/signup")
    .post(UserController.signupUser);
export default router;