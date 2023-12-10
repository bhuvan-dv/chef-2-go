import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import User from '../../models/User';

export type UserState = User[];

const initialState: UserState = [];

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setUserCredentials: (state, action: PayloadAction<User>) => {
            const { username, token } = action.payload
            // state.username = username
            // state.token = token
            return { ...state }
        },
        clearUser: (state, action: PayloadAction<User>) => {
            return 
        },
    },
});

// export const { setUserCredentials, clearUser } = authSlice.actions;
export default authSlice.reducer;
