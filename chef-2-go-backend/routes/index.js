// Importing the Recipe route
import recipeRouter from "./recipe-route.js";

export default (app) => {
  app.use("/recipes", recipeRouter);
};
