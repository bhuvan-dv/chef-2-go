import { configureStore } from "@reduxjs/toolkit";
import { recipeSlice } from './slice/recipe-slice';
import { userSlice } from "./slice/user-slice";

export const store = configureStore({
    reducer: {
        [recipeSlice.name]: recipeSlice.reducer,
        [userSlice.name]: userSlice.reducer,
    }
});

export type AppStore = typeof store;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = typeof store.dispatch;
