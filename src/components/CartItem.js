import React from 'react';
import {View, Text, StyleSheet, Platform, TouchableOpacity} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const CartItem = props => {
  return (
    <View style={[styles.row, styles.outerRow, styles.container]}>
      <View style={styles.row}>
        <Text style={styles.quantity}>{props.quantity}</Text>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.sum}>${props.sum.toFixed(2)}</Text>
        <TouchableOpacity onPress={props.onRemove}>
          <Ionicons
            name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
            size={25}
            color="red"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  outerRow: {
    justifyContent: 'space-between',
  },
  container: {
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: 'white',
  },
  quantity: {
    fontFamily: 'OpenSans-Bold',
    marginRight: 10,
    fontSize: 18,
  },
  sum: {
    fontFamily: 'OpenSans-Bold',
    marginRight: 10,
    fontSize: 18,
  },
  title: {
    fontSize: 18,
  },
});

export default CartItem;
