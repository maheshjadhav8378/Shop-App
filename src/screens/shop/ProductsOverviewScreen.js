import React, {useEffect} from 'react';
import {FlatList, Platform} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Item} from 'react-navigation-header-buttons';

import CustomHeaderButton from '../../components/UI/CustomHeaderButton';
import ProductItem from '../../components/ProductItem';
import {addToCart} from '../../store/CartSlice';

const ProductsOverviewScreen = props => {
  const {navigation} = props;
  const allProducts = useSelector(state => state.products.allProducts);
  const dispatch = useDispatch();

  useEffect(
    () =>
      navigation.setOptions({
        headerLeft: () => {
          return (
            <CustomHeaderButton>
              <Item
                iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                title="menu"
                onPress={() => navigation.toggleDrawer()}
              />
            </CustomHeaderButton>
          );
        },
        headerRight: () => {
          return (
            <CustomHeaderButton>
              <Item
                onPress={() => {
                  navigation.navigate('Cart');
                }}
                title="cart"
                iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
              />
            </CustomHeaderButton>
          );
        },
      }),
    [navigation],
  );

  return (
    <FlatList
      data={allProducts}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <ProductItem
          image={item.imageUrl}
          title={item.title}
          onViewDetail={() => {
            props.navigation.navigate('ProductDetails', {productId: item.id});
          }}
          onToCart={() => {
            dispatch(addToCart(item));
          }}
          price={item.price}
        />
      )}
    />
  );
};

export default ProductsOverviewScreen;
