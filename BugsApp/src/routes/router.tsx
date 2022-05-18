import React from 'react';
import Navigation from './navigation-bottom-tab';
import {Provider as PaperProvider} from 'react-native-paper';

const Router = () => {
  return (
    <PaperProvider>
      <Navigation />
    </PaperProvider>
  );
};
export default Router;
