import React from 'react';
import TabNavigation from './navigation-bottom-tab';
import {Provider as PaperProvider} from 'react-native-paper';

const Router = () => {
  return (
    <PaperProvider>
      <TabNavigation />
    </PaperProvider>
  );
};
export default Router;
