import axiosInstance from "./axios";
import IngredientsShop from "../models/ingredientsShop";
let path: string = "ingredient/";

const getIngredientShopDetails = async <IngredientsShop>(): Promise<IngredientsShop[]> => {
    return await axiosInstance.get(path);
}

export {getIngredientShopDetails};