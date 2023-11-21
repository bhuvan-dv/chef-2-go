// Importing the Recipe route
import recipeRouter from "./recipe-route.js";
import ingredientRouter from "./ingredient-route.js";

export default (app) => {
  app.use("/recipies", recipeRouter);
  app.use("/ingredient", ingredientRouter);
};
