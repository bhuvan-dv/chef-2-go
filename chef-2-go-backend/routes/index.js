// Importing the Recipe route
import recipeRouter from "./recipe-route.js";
import userRouter from "./user-route.js";
import searchRouter from "./search-route.js";

export default (app) => {
  app.use("/users",userRouter);
  app.use("/recipes", recipeRouter);
  app.use("/search",searchRouter);
};
