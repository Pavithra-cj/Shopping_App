import React from 'react';
import {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  ActivityIndicator,
  FlatList,
  Image,
} from 'react-native';
import axios from 'axios';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 5,
    backgroundColor: '#ffffff',
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    width: 180,
    height: 180,
  },
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#dedede',
    padding: 10,
  },
  textWrapper: {
    flex: 1,
  },
  text: {
    marginVertical: 5,
    color: '#000000',
  },
  imageWrapper: {
    flex: 1,
  },
});

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios
      .get('https://fakestoreapi.com/products')
      .then(res => {
        setProducts(res.data);
      })
      .catch(e => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.wrapper}>
      <View style={styles.imageWrapper}>
        <Image
          source={{uri: item.image}}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.text}>{item.description}</Text>
        <Text style={styles.text}>{item.price}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.root}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={'large'} color={'#000000'} />
        </View>
      ) : (
        <FlatList
          data={products}
          keyExtractor={element => element.id}
          renderItem={renderItem}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;
