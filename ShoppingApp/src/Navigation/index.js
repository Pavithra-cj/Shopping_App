import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Login from '../Screen/Auth/Login';
import Register from '../Screen/Auth/Register';
import MyTabs from '../components/TabNavigation';
import HeaderBar from '../components/HeaderBar';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='SignIn' component={Login} />
        <Stack.Screen name='Register' component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation