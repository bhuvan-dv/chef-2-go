import User from "../models/user-model.js";
import Recipe from "../models/recipe-model.js";


export const searchChefsbyName = async (searchTerm) =>{
    const chefs = User.find({ name: { $regex: new RegExp(searchTerm) } });
    return chefs;
}

export const searchChefByUserName = async (username) =>{
    const chef = await User.find({ username: username });
    return chef;
}