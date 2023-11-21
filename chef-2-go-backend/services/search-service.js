import User from "../models/user-model.js";
import Recipe from "../models/recipe-model.js";

// Search for chefs by name using a case-insensitive regular expression match
export const searchChefsbyName = async (searchTerm) => {
    // Using $regex to perform a case-insensitive search for the given name
    const chefs = User.find({ name: { $regex: new RegExp(searchTerm, 'i') } });
    return chefs;
}

// Search for a chef by username
export const searchChefByUserName = async (username) => {
    // Finding a user with the specified username
    const chef = await User.find({ username: username });
    return chef;
}

// Search for recipes by name using a case-insensitive regular expression match
export const searchRecipes = async (searchTerm) => {
    // Using $regex to perform a case-insensitive search for the given recipe name
    const recipes = await Recipe.find({ name: { $regex: new RegExp(searchTerm, 'i') } });
    return recipes;
}
