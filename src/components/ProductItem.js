import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

import Colors from '../constants/colors';

const ProductItem = props => {
  let TouchableCom = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCom = TouchableNativeFeedback;
  }

  return (
    <View style={styles.product}>
      <View style={styles.touchable}>
        <TouchableCom onPress={props.onViewDetail} useForeground>
          <View>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{uri: props.image}} />
            </View>
            <View style={styles.details}>
              <Text style={styles.title}>{props.title}</Text>
              <Text style={styles.price}>${props.price.toFixed(2)}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                color={Colors.primary}
                title="View Details"
                onPress={props.onViewDetail}
              />
              <Button
                color={Colors.primary}
                title="To Cart"
                onPress={props.onToCart}
              />
            </View>
          </View>
        </TouchableCom>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    height: 350,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.26,
    shadowRadius: 6,
    backgroundColor: 'white',
    elevation: 5,
    margin: 10,
    borderRadius: 15,
  },
  imageContainer: {
    height: '60%',
    width: '100%',
    overflow: 'hidden',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  details: {
    alignItems: 'center',
    height: '15%',
    justifyContent: 'space-around',
  },
  title: {
    marginVertical: 4,
    fontSize: 18,
  },
  price: {
    color: '#888',
    fontSize: 14,
    fontFamily: 'OpenSans-Bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '25%',
    paddingHorizontal: 30,
  },
  touchable: {
    borderRadius: 15,
    overflow: 'hidden',
  },
});

export default ProductItem;
