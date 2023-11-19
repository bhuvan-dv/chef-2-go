import express from 'express';

import * as recipeController from '../controllers/recipe-controller.js';

const router = express.Router();

router.route('/')
   .get(recipeController.find)

router.route('/:id')
   .get(recipeController.get)
   .post(recipeController.post)
   .put(recipeController.put)
   .patch(recipeController.patch)
   .delete(recipeController.remove);

export default router;