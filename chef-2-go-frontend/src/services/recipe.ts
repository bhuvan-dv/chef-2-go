import axiosInstance from "./axios";
import Recipe from '../models/Recipe';
let path: string = "recipes/";

const getRecipes = async <Recipe>(_id: any): Promise<Recipe[]> => {
    return axiosInstance.get(path+_id);
}

const getAllRecipes = async () => {
    return axiosInstance.get(path);
}

const createNewRecipes = async <T>(reqBody: Recipe): Promise<T[]> =>{
    return axiosInstance.post(path, reqBody);
}

const getRecipesByChefId = async <Recipe>(chefId: string): Promise<Recipe[]> => {
    return axiosInstance.get(path+"/byChef/"+chefId);
}

export { getRecipes, getAllRecipes, createNewRecipes, getRecipesByChefId };