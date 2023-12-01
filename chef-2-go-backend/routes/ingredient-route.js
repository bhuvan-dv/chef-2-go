// Express router for Ingredient API
import express from "express";

import * as ingredientController from "../controllers/ingredient-controller.js";

const router = express.Router();

// Define API endpoints
router.route("/").post(ingredientController.post);
router.route("/:id").get(ingredientController.get);

export default router;
