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
import HeaderBar from './src/components/HeaderBar';

function App(): JSX.Element {
  return (
    <NavigationContainer>
        <HeaderBar />
        <MyTabs />
    </NavigationContainer>
  );
}

export default App;
