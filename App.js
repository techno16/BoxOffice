/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import BoxOfficeNavigator from './navigators/BoxOfficeNavigator';
import AppNavigator from './navigators/AppNavigator';
import BoxOffice from './pages/BoxOffice';

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
  },
};


const App: () => React$Node = () => {
  return (
    <>
     <NavigationContainer theme={Theme}>
        <AppNavigator/>
    </NavigationContainer>
    </>
  );
};

export default App;
