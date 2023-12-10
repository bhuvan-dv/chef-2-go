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
        }
    }
});


export const { setIsLoogedIn } = userSlice.actions;
export default userSlice.reducer;

// export const isUserLoggedIn = (state: UserState) => {
//     return localStorage.getItem('token') !== null;
// }

export const getUser = (state: UserState) => {
    return localStorage.getItem('user');
}

// export const searchChefs = (query: string): ((state: AppState) => UserState) => {
//     return (state: AppState) => state.users.chefs!.filter(c => c.name.startsWith(query));
// } 


