import express from 'express';
import * as serviceController from "../controllers/search-controller.js";

const router = express.Router();
router.route("/")
      .get(serviceController.searchChef);

export default router;