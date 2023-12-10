import { configureStore } from "@reduxjs/toolkit";
import { recipeSlice } from './slice/recipe-slice';

export const store = configureStore({
    reducer: {
        [recipeSlice.name]: recipeSlice.reducer
    }
});

export type AppStore = typeof store;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = typeof store.dispatch;
