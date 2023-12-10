import express from 'express';

import * as UserController from '../controllers/user-controller.js';
import * as ChefController from '../controllers/chef-controller.js'

const router = express.Router();
router.route('/')
.get(ChefController.get)
router.route('/:id')
      .delete(UserController.deleteUser)
router.route('/login')
    .post(UserController.loginUser);
router.route("/signup")
    .post(UserController.signupUser);
export default router;