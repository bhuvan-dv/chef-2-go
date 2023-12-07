import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import Recipe from '../../models/Recipe';
import { AppState } from '..';

export type RecipeState = Recipe[];
const initialState: RecipeState = [];
export const recipeSlice = createSlice({
    name: 'recipes',
    initialState: initialState,
    reducers: {
        loadRecipes: (state, action: PayloadAction<RecipeState>) => {
            return action.payload;
        }
    }
});
export const { loadRecipes } = recipeSlice.actions;

// export const searchRecipes = (query: string): ((state: AppState) => RecipeState) => {
//     return (state: AppState) => state.courses.filter(c => c.name.startsWith(query));
// }
// export const findById = (id: string | undefined): ((state: AppState) => Course | undefined) => {
//     return (state: AppState) => state.courses.find(c => id && c._id === id);
// }
export default recipeSlice.reducer;

// export{}