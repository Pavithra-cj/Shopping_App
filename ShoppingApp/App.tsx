/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './src/components/TabNavigation';
import FavouriteContextProvider from './src/components/context/favouriteContext';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <FavouriteContextProvider>
        <MyTabs />
      </FavouriteContextProvider>
    </NavigationContainer>
  );
}

export default App;
