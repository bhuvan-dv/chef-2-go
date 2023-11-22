import ingredient from "../models/ingredient-model.js";


// Find ingredient by ID
export const find = async (id) => {
  const ingredient = await ingredient.findById(id).exec();
  return ingredient;
};


// Save a new ingredient
export const save = async (newingredient) => {
  const ingredient = new ingredient(newingredient);
  return await ingredient.save();
};
