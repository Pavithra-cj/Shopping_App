import React from 'react';

import {StyleSheet, View, SafeAreaView, Text} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

const Home = () => {
  return (
    <SafeAreaView style={styles.root}>
      <View>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
