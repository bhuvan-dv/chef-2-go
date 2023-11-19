import Recipe from "../models/recipe-model.js";

export const search = async (params = {}) => {
    const recipes = await Recipe.find(params).exec();
    return recipes;
};

export const save = async (newCourse) => {
    const recipe = new Recipe(newCourse);
    return await recipe.save();
};

export const find = async (id) => {
    const recipe = await Recipe.findById(id).exec();
    return recipe;
};

export const update = async (updatedCourse, id) => {
    const recipe = await Recipe.findByIdAndUpdate(id, updatedCourse).exec();
    return recipe;
};

export const remove = async (id) => {
    return await Recipe.findByIdAndDelete(id).exec();
};
