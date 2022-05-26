import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {bugReducer} from './entity/bugs';
import {isLoggedInReducer} from './entity/user';

const rootReducer = combineReducers({
  isLoggedInReducer,
  bugReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
