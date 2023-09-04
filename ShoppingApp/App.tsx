import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './src/components/TabNavigation';
import HeaderBar from './src/components/HeaderBar';
import Login from './src/Screen/Login';

function App(): JSX.Element {
  return (
    <NavigationContainer>
        <HeaderBar />
        <MyTabs />
    </NavigationContainer>
  );
}

export default App;
