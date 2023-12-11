import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppState } from '..';
import User from '../../models/user';

interface UserState {
  isLoggedin?: boolean,
  chefs: User[],
  searchTerm?: string,
  currentUser?: User | null
}

const getInitialState = (): UserState => {
  const storedIsLoggedin = localStorage.getItem('isLoggedin') === 'true';
  const storedUser = JSON.parse(localStorage.getItem('user') || 'null');

  return {
    isLoggedin: storedIsLoggedin,
    chefs: [],
    searchTerm: '',
    currentUser: storedUser,
  };
};

const initialState: UserState = getInitialState();

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setIsLoogedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedin = action.payload;
      localStorage.setItem('isLoggedin', String(action.payload));
    },
    setChefs: (state, action: PayloadAction<User[]>) => {
      state.chefs = action.payload;
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
    setCurrentUser: (state, action: PayloadAction<User | null>) => {
      state.currentUser = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
  }
});


export const { setIsLoogedIn, searchChefs, setChefs, setSearchTerm, setCurrentUser } = userSlice.actions;
export default userSlice.reducer;


export const getUser = (state: UserState) => {
  return localStorage.getItem('user');
}



