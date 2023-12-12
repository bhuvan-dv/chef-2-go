import express from 'express';

import * as UserController from '../controllers/user-controller.js';
import * as ChefController from '../controllers/chef-controller.js'

import verifyToken from '../middleware/auth.js';

const router = express.Router();
router.route('/')
.get(UserController.getAllRegisteredUsers)
router.route('/:id')
    .patch(UserController.updateUserDetails)
      .delete(UserController.deleteUser)
router.route('/login')
    .post(UserController.loginUser);
router.route("/signup")
    .post(UserController.signupUser);
router.route('/profile/:id')
    .get(UserController.getUserById)
    .delete(UserController.deleteUser);
router.route('/users/profile/:email')
    .get(UserController.getUserByEmail);
router.route('/email')
    .put(UserController.validateUserByEmail);
router.route('/email')
    .post(UserController.reSendOTP);
router.route('/:userId')
    .put(UserController.updateUser);
export default router;