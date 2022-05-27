import React from 'react';
import TabNavigation from './navigation-bottom-tab';
import {Provider as PaperProvider} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {isUserLoggedInSelector} from '../store/entity/user';
import {StackNavigation} from './stack-navigator';

const Router = () => {
  const isLoggedIn = useSelector(isUserLoggedInSelector);
  return (
    <PaperProvider>
      {!isLoggedIn ? <StackNavigation /> : <TabNavigation />}
    </PaperProvider>
  );
};
export default Router;
