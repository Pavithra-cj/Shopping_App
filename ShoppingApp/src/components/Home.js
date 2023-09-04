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
  TouchableOpacity,
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
  txtBtnWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '65%',
  },
  imgWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
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
    alignItems: 'center',
    width: '70%'
  },
  text: {
    marginVertical: 5,
    color: '#000000',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  titleText: {
    marginVertical: 5,
    color: '#000000',
    alignItems: 'flex-start',
    justifyContent: 'center',
    fontSize: 20,
  },
  imageWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#272ef2',
    padding: 10,
    width: '75%',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
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
      <View style={styles.imgWrapper}>
        <View style={styles.imageWrapper}>
          <Image
            source={{uri: item.image}}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.txtBtnWrapper}>
        <View style={styles.textWrapper}>
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.text}>{item.description}</Text>
        <Text style={styles.text}>{`Price: ${item.price}$`}</Text>
      </View>
      <View>
          <TouchableOpacity
            style={styles.button}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
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
