import React from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CartItem from '../../components/CartItem';

import colors from '../../constants/colors';
import {removeFromCart} from '../../store/CartSlice';
import {placeOrder} from '../../store/ordersSlice';

const CartScreen = props => {
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const items = useSelector(state => {
    const itemsData = state.cart.items;
    const itemsDataArray = [];
    for (let key in itemsData) {
      itemsDataArray.push({
        productId: key,
        quantity: itemsData[key].quantity,
        price: itemsData[key].productPrice,
        sum: itemsData[key].sum,
        title: itemsData[key].productTitle,
      });
    }
    return itemsDataArray;
  });

  const dispatch = useDispatch();

  return (
    <>
      <View style={styles.cartHeader}>
        <Text style={styles.totalPriceText}>
          Total :{' '}
          <Text style={styles.totalPrice}>${totalAmount.toFixed(2)}</Text>
        </Text>
        <Button
          disabled={items.length === 0}
          title="Order Now"
          onPress={() => {
            dispatch(placeOrder({items, totalAmount}));
          }}
          color={colors.primary}
        />
      </View>
      <FlatList
        data={items}
        keyExtractor={(item, index) => item.productId}
        renderItem={({item, index}) => {
          return (
            <CartItem
              title={item.title}
              price={item.price}
              quantity={item.quantity}
              sum={item.sum}
              onRemove={() => dispatch(removeFromCart(item.productId))}
            />
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  screen: {},
  cartHeader: {
    margin: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.26,
    shadowRadius: 6,
    elevation: 10,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalPriceText: {
    fontSize: 24,
    fontFamily: 'OpenSans-Regular',
  },
  totalPrice: {
    color: colors.primary,
    fontFamily: 'OpenSans-Bold',
  },
});

export default CartScreen;
