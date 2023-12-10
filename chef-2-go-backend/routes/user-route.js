import express from 'express';

import * as UserController from '../controllers/user-controller.js';
import * as ChefController from '../controllers/chef-controller.js'

import verifyToken from '../middleware/auth.js';

const router = express.Router();
router.route('/')
.get(ChefController.get)
router.route('/:id')
      .delete(UserController.deleteUser)
router.route('/login')
    .post(UserController.loginUser);
router.route("/signup")
    .post(UserController.signupUser);
router.route('/profile/:id')
    .get(UserController.getUserById);
router.route('/users/profile/:email')
    .get(UserController.getUserByEmail);
router.route('/email')
    .put(UserController.validateUserByEmail);
router.route('/email')
    .post(UserController.reSendOTP);
router.route('/:userId')
    .put(verifyToken,UserController.updateUser);
export default router;