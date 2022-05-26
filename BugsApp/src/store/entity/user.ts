import {createSelector, createSlice} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {store} from '../store';

type RootState = ReturnType<typeof store.getState>;

const isLoggedInSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    profile: {},
  },
  reducers: {
    login: (user, action) => {
      const {userName, password} = action.payload;
      if (isUserValid(userName, password)) {
        user.isLoggedIn = true;
        user.profile = {
          name: 'John Luther',
          designation: ' Assosiate Software Engineer',
        };
      } else {
        Alert.alert('Login Failed', 'Invalid Credentials', [{text: 'Ok'}]);
      }
    },
    logout: user => {
      user.isLoggedIn = false;
      user.profile = {};
    },
  },
});

const isUserValid = (username: string, password: string) => {
  return username === 'aiswarya@gmail.com' && password === '123456';
};

export const isLoggedInReducer = isLoggedInSlice.reducer;

export const isUserLoggedInSelector = createSelector(
  (state: RootState) => state,
  (state: RootState) => state.isLoggedInReducer.isLoggedIn,
);

export const {login, logout} = isLoggedInSlice.actions;
