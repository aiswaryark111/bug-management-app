import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {bugReducer} from './entity/bugs';
import {isLoggedInReducer} from './entity/user';
import {userDetailsReducer} from './entity/userDetails';

const rootReducer = combineReducers({
  isLoggedInReducer,
  bugReducer,
  userDetailsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
