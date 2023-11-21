import express from 'express';

// Importing the Recipe Controller
import * as recipeController from '../controllers/recipe-controller.js';

const router = express.Router();
router.route('/')
   .get(recipeController.find)
   .post(recipeController.post)

router.route('/:id')
   .get(recipeController.get)
   .put(recipeController.put)
   .patch(recipeController.patch)
   .delete(recipeController.remove);

export default router;