import express from 'express';

// Importing the Recipe Controller
import * as recipeController from '../controllers/recipe-controller.js';
import * as commentController from '../controllers/comment-controller.js';
import verifyToken from '../middleware/auth.js';

const router = express.Router();
router.route('/')
   .get(verifyToken, recipeController.find)
   .post(verifyToken, recipeController.post)

router.route('/:id')
   .get(verifyToken, recipeController.get)
   .put(verifyToken, recipeController.put)
   .delete(verifyToken, recipeController.remove);

router.route('/:id/comments')
   .post(verifyToken, commentController.post);

router.route('/:id/comments/:id')
   .get(verifyToken, commentController.find)
   .delete(verifyToken, commentController.remove)
   .put(verifyToken, commentController.put);

export default router;