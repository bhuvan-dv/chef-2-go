/**
 * Recipe Service
 * This module provides functions to interact with the Recipe model for performing CRUD operations.
 * It abstracts away the database operations and is used by the Recipe Controller.
 */

// Importing the Recipe model
import Recipe from "../models/recipe-model.js";

//Search for recipes based on specified parameters
export const search = async (params = {}) => {
    const recipes = await Recipe.find(params).exec();
    return recipes;
};

//Save a new recipe to the database
export const save = async (newRecipe) => {
    const recipe = new Recipe(newRecipe);
    return await recipe.save();
};

//Find a recipe by its ID
export const find = async (id) => {
    const recipe = await Recipe.findById(id).exec();
    return recipe;
};

//Update a recipe by its ID
export const update = async (updatedRecipe, id) => {
    const recipe = await Recipe.findByIdAndUpdate(id, updatedRecipe).exec();
    return recipe;
};

//Remove a recipe by its ID
export const remove = async (id) => {
    return await Recipe.findByIdAndDelete(id).exec();
};
