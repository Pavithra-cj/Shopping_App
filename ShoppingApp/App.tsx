import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './src/components/TabNavigation';
import HeaderBar from './src/components/HeaderBar';
import Login from './src/Screen/Auth/Login';
import Register from './src/Screen/Auth/Register';
import Navigation from './src/Navigation';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f9fbfc'
  },
});

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation/>
    </SafeAreaView>
  );
}

export default App;
