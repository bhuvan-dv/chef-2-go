import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import { AppState } from '..';
import User from '../../models/user';

interface UserState{
    isLoggedin?: boolean,
    chefs: User[]
    searchTerm?: string;
}

const initialState: UserState = {
    isLoggedin : false,
    chefs: [],
    searchTerm: ""
};

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setIsLoogedIn: (state, action: PayloadAction<boolean>) => {
            state.isLoggedin =  action.payload;
        },
        setChefs: (state, action: PayloadAction<User[]>) => {
          state.chefs =  action.payload;
        },
        setSearchTerm: (state, action: PayloadAction<string>) => {
          state.searchTerm = action.payload;
      },
        searchChefs: (state, action: PayloadAction<string>) => {
          const searchTerm = action.payload.toLowerCase();
          state.chefs = state?.chefs?.filter((chef) =>
            chef?.name?.toLowerCase().includes(searchTerm)
          );
        },
    }
});


export const { setIsLoogedIn, searchChefs, setChefs, setSearchTerm } = userSlice.actions;
export default userSlice.reducer;


export const getUser = (state: UserState) => {
    return localStorage.getItem('user');
}



