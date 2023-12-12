import express from 'express';

// Importing the Recipe Controller
import * as recipeController from '../controllers/recipe-controller.js';
import * as commentController from '../controllers/comment-controller.js';
import verifyToken from '../middleware/auth.js';

const reciperouter = express.Router();
reciperouter.route('/')
   .get(recipeController.findAll)
   .post(verifyToken,recipeController.post)

   reciperouter.route('/:id')
   .get(recipeController.get)
   .put(verifyToken,recipeController.put)
   .delete(verifyToken,recipeController.remove);

   reciperouter.route('/:id/comments')
   .post(verifyToken,commentController.post);

   reciperouter.route('/:id/comments/:id')
   .get(verifyToken,commentController.find)
   .delete(verifyToken,commentController.remove)
   .put(verifyToken,commentController.put);

   reciperouter.route('/byChef/:id')
   .get(recipeController.findByChefId);

export default reciperouter;