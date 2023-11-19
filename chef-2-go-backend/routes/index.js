import recipeRouter from "./recipe-route.js";

export default (app) => {
  app.use("/recipies", recipeRouter);
};
