import express from 'express';

// Importing the Recipe Controller
import * as recipeController from '../controllers/recipe-controller.js';
import * as commentController from '../controllers/comment-controller.js';
import verifyToken from '../middleware/auth.js';

const reciperouter = express.Router();
reciperouter.route('/')
   .get(recipeController.findAll)
   .post(recipeController.post)

   reciperouter.route('/:id')
   .get(recipeController.get)
   .put(recipeController.put)
   .delete(recipeController.remove);

   reciperouter.route('/:id/comments')
   .post(commentController.post);

   reciperouter.route('/:id/comments/:id')
   .get(commentController.find)
   .delete(commentController.remove)
   .put(commentController.put);

   reciperouter.route('/byChef/:id')
   .get(recipeController.findByChefId);

export default reciperouter;