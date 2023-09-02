import React from 'react';
import {useState, useEffect} from 'react';
import {Text, View, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import {useFavouriteContext} from './context/favouriteContext';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 5,
    backgroundColor: '#ffffff',
  },
});

const Favourites = () => {
  const {favourites} = useFavouriteContext();

  return (
    <SafeAreaView>
      <View>
        <Text>Favourites</Text>
      </View>
    </SafeAreaView>
  );
};

export default Favourites;
