import React from 'react';
import {Platform} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Item} from 'react-navigation-header-buttons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import colors from '../constants/colors';
import ProductDetailsScreen from '../screens/shop/ProductDetailsScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import CustomHeaderButton from '../components/UI/CustomHeaderButton';

const ShopNavigator = createNativeStackNavigator();

export const ShopNavigation = () => {
  return (
    <ShopNavigator.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? colors.primary : '',
        },
        headerTintColor: Platform.OS === 'ios' ? colors.primary : 'white',
        headerTitle: 'Products',
      }}>
      <ShopNavigator.Screen
        name="ProductsOverview"
        component={ProductsOverviewScreen}
      />
      <ShopNavigator.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
      />
      <ShopNavigator.Screen
        name="Cart"
        component={CartScreen}
        options={{headerTitle: 'Your Cart'}}
      />
    </ShopNavigator.Navigator>
  );
};

const OrdersStackNavigator = createNativeStackNavigator();

export const OrdersStackNavigation = () => {
  return (
    <OrdersStackNavigator.Navigator
      screenOptions={{
        headerTintColor: Platform.OS === 'android' ? 'white' : colors.primary,
      }}>
      <OrdersStackNavigator.Screen
        name="Orders"
        component={OrdersScreen}
        options={({navigation, route}) => ({
          headerLeft: () => {
            return (
              <CustomHeaderButton>
                <Item
                  title="menu"
                  onPress={() => navigation.toggleDrawer()}
                  iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                />
              </CustomHeaderButton>
            );
          },
        })}
      />
    </OrdersStackNavigator.Navigator>
  );
};

const DrawerNavigator = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <DrawerNavigator.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: colors.primary,
      }}>
      <DrawerNavigator.Screen
        name="ProductsStack"
        component={ShopNavigation}
        options={{
          title: 'Products',
          drawerLabel: ({focused, color, size}) => {
            return (
              <Ionicons
                size={size}
                color={color}
                name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
              />
            );
          },
        }}
      />
      <DrawerNavigator.Screen
        name="OrdersStack"
        component={OrdersStackNavigation}
        options={{title: 'Orders'}}
      />
    </DrawerNavigator.Navigator>
  );
};
