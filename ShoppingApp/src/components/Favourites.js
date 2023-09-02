import React from 'react';
import {useState, useEffect} from 'react';
import {Text, View, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import {useFavouriteContext} from './context/favouriteContext';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 5,
    backgroundColor: '#ffffff',
    text: {
      marginVertical: 5,
      color: '#000000',
    },
  },
});

const Favourites = () => {
  const {favourites} = useFavouriteContext();

  return (
    <SafeAreaView style={styles.root}>
      {Favourites.length > 0 ? (
        <FlatList />
      ) : (
        <View>
          <Text>Favourites</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Favourites;
