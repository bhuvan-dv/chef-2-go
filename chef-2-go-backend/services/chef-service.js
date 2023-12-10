/**
 * Chef Service
 * This module provides functions to interact with the Chef model for performing CRUD operations.
 * It abstracts away the database operations and is used by the Chef Controller.
 */

// Importing the Chef model
import Chef from "../models/chef-model.js";

//Search for chefs based on specified parameters
export const search = async (params = {}) => {
    const chefs = await Chef.find(params).exec();
    return chefs;
};

//Save a new chef to the database
export const save = async (newChef) => {
    const chef = new Chef(newChef);
    return await chef.save();
};

//Find a chef by ID
export const find = async (id) => {
    const chef = await Chef.findById(id).exec();
    return chef;
};

export const findAll = async () => {
    console.log('inside service');
    const chef = await Chef.find().exec();
    return chef;
};

//Update a chef by ID
export const update = async (updatedChef, id) => {
    const chef = await Chef.findByIdAndUpdate(id, updatedChef).exec();
    return chef;
};

//Remove a chef by ID
export const remove = async (id) => {
    return await Chef.findByIdAndDelete(id).exec();
};
