import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import user from '../../models/user';
import { AppState } from '..';

interface UserState{
    isLoggedin?: boolean,
    chefs?: user[]
}

const initialState: UserState = {
    isLoggedin : false,
    chefs: []
};

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setIsLoogedIn: (state, action: PayloadAction<boolean>) => {
            state.isLoggedin =  action.payload;
        },
        loadChefs: (state, action: PayloadAction<UserState>) => {
          return action.payload;
        },
        searchChefs: (state, action: PayloadAction<string>) => {
          // Assuming you want to filter chefs based on a search query
          const searchTerm = action.payload.toLowerCase();
          state.chefs = state?.chefs?.filter((chef) =>
            chef.name.toLowerCase().includes(searchTerm)
          );
        },
    }
});


export const { setIsLoogedIn } = userSlice.actions;
export default userSlice.reducer;


export const getUser = (state: UserState) => {
    return localStorage.getItem('user');
}



