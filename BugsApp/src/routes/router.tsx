import React from 'react';
import TabNavigation from './navigation-bottom-tab';
import {Provider as PaperProvider} from 'react-native-paper';
import Login from '../screens/Login/login';

const Router = () => {
  const isLoggedIn = true;
  return (
    <PaperProvider>{isLoggedIn ? <Login /> : <TabNavigation />}</PaperProvider>
  );
};
export default Router;
