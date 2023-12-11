import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Recipe from "../../models/Recipe";   

interface RecipeState {
    recipes: Recipe[];
    searchTerm: string;
}

const initialState: RecipeState = {
    recipes: [],
    searchTerm: "",
};

const recipeSlice = createSlice({
    name: "recipes",
    initialState,
    reducers: {
        setRecipes: (state, action: PayloadAction<Recipe[]>) => {
            state.recipes = action.payload;
        },
        setSearchTerm: (state, action: PayloadAction<string>) => {
            state.searchTerm = action.payload;
        },
        addRecipe: (state, action: PayloadAction<Recipe>) => {
            state.recipes.push(action.payload);
        },
    },
});

export const { setRecipes, setSearchTerm } = recipeSlice.actions;
export default recipeSlice;
