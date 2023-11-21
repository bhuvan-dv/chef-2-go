import express from "express";

import * as ingredientController from "../controllers/ingredient-controller.js";

const router = express.Router();
console.log("here");
router.route("/").post(ingredientController.post);

router.route("/:id").get(ingredientController.get);

export default router;
