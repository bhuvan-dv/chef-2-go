// Express router for Ingredient API
import express from "express";

import * as ingredientController from "../controllers/ingredient-controller.js";

const router = express.Router();
console.log("here");

// Define API endpoints
router.route("/").post(ingredientController.post);
router.route("/:id").get(ingredientController.get);

export default router;
