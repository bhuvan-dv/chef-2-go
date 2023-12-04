import axiosInstance from "./axios";
import Recipe from '../models/Recipe';
let path: string = "recipes/";

const getRecipes = async <Recipe>(_id: any): Promise<Recipe[]> => {
    return axiosInstance.get(path+_id);
}

const getAllRecipes = async <Recipe>(): Promise<Recipe[]> => {
    return axiosInstance.get(path);
}

const createNewRecipes = async <T>(reqBody: Recipe): Promise<T[]> =>{
    return axiosInstance.post(path, reqBody);
}

export { getRecipes, getAllRecipes, createNewRecipes };