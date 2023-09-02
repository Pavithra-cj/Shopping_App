import React from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

const Categories = () => {
  return (
    <SafeAreaView style={styles.root}>
      <View>
        <Text>Categories</Text>
      </View>
    </SafeAreaView>
  );
};

export default Categories;
