import React, {useEffect} from 'react';
import {View, Image, StyleSheet, Button, Text, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import colors from '../../constants/colors';
import {addToCart} from '../../store/CartSlice';

const ProductDetailsScreen = props => {
  const {navigation, route} = props;
  const id = route.params.productId;
  const selectedProduct = useSelector(state =>
    state.products.allProducts.find(product => product.id === id),
  );

  const dispatch = useDispatch();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: selectedProduct.title,
    });
  }, [selectedProduct, navigation]);

  return (
    <ScrollView>
      <View>
        <Image style={styles.image} source={{uri: selectedProduct.imageUrl}} />
        <View style={styles.buttonContainer}>
          <Button
            color={colors.primary}
            title="Add To Cart"
            onPress={() => {
              dispatch(addToCart(selectedProduct));
            }}
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.price}>${selectedProduct.price}</Text>
          <Text style={styles.description}>{selectedProduct.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 350,
  },
  buttonContainer: {
    margin: 20,
  },
  detailsContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  price: {
    fontSize: 18,
    color: '#888',
    fontFamily: 'OpenSans-Bold',
  },
  description: {
    marginTop: 10,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default ProductDetailsScreen;
