// Importing the Recipe route
import recipeRouter from "./recipe-route.js";
import userRouter from "./user-route.js";

export default (app) => {
  app.use("/users",userRouter);
  app.use("/recipes", recipeRouter);
};
