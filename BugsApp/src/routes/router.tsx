import React from 'react';
import TabNavigation from './navigation-bottom-tab';
import {Provider as PaperProvider} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {isUserLoggedInSelector} from '../store/entity/user';
import Login from '../screens/Login/login';

const Router = () => {
  const isLoggedIn = useSelector(isUserLoggedInSelector);
  return (
    <PaperProvider>{!isLoggedIn ? <Login /> : <TabNavigation />}</PaperProvider>
  );
};
export default Router;
