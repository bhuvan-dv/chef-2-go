import express from 'express';

// Importing the Recipe Controller
import * as recipeController from '../controllers/recipe-controller.js';
import * as commentController from '../controllers/comment-controller.js';

const router = express.Router();
router.route('/')
   .get(recipeController.find)
   .post(recipeController.post)

router.route('/:id')
   .get(recipeController.get)
   .put(recipeController.put)
   .delete(recipeController.remove);

router.route('/:id/comments')
   .post(commentController.post);

router.route('/:id/comments/:id')
   .get(commentController.find)
   .delete(commentController.remove)
   .put(commentController.put);

export default router;