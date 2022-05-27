import {createSelector, createSlice} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {UserDetails} from '../../models/userDetails';
import {store} from '../store';

type RootState = ReturnType<typeof store.getState>;
const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState: [],
  reducers: {
    user: (userDetails: UserDetails[], action) => {
      userDetails.push({
        userName: action.payload.userName,
        userEmail: action.payload.userEmail,
        designation: action.payload.designation,
        passsword: action.payload.passsword,
      });
      Alert.alert(
        'Registered Successfully',
        'User has registered successfully',
        [{text: 'Ok'}],
      );
    },
  },
});

export const userDetailsReducer = userDetailsSlice.reducer;

export const userDetailsSelector = createSelector(
  (state: RootState) => state,
  state => state.userDetailsReducer,
);

export const {user} = userDetailsSlice.actions;
