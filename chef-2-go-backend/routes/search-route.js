import express from 'express';
import * as serviceController from "../controllers/search-controller.js";
import verifyToken from '../middleware/auth.js';

const router = express.Router();
router.route("/chefs")
      .get(verifyToken, serviceController.searchChef);
router.route("/recipes")
      .get(verifyToken, serviceController.searchRecipe);

export default router;