import {IngridentModel} from "../models/ingredient-model.js";


// Find ingredient by ID
export const find = async (id) => {
  const ingredient = await IngridentModel.find().exec();
  return ingredient;
};


// Save a new ingredient
export const save = async (newingredient) => {
  console.log('inside service class');
  console.log(JSON.stringify(newingredient));
  const ingredient = new IngridentModel(newingredient);
  return await ingredient.save();
};
