import {createSlice} from '@reduxjs/toolkit';
import {CartItem} from '../models/CartItem';

const initialState = {
  items: {},
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const addedProduct = action.payload;
      if (state.items[addedProduct.id]) {
        const cartItem = state.items[addedProduct.id];
        cartItem.quantity += 1;
        cartItem.productPrice = addedProduct.price;
        cartItem.sum += addedProduct.price;
        cartItem.productTitle = addedProduct.title;
      } else {
        state.items[addedProduct.id] = new CartItem(
          1,
          addedProduct.price,
          addedProduct.title,
          addedProduct.price,
        );
      }
      state.totalAmount += addedProduct.price;
    },
    removeFromCart: (state, action) => {
      const selectedProductId = action.payload;
      const selectedProduct = state.items[selectedProductId];
      const quantityOfSelected = selectedProduct.quantity;
      if (quantityOfSelected > 1) {
        selectedProduct.quantity -= 1;
        selectedProduct.sum -= selectedProduct.productPrice;
      } else {
        delete state.items[selectedProductId];
      }
      state.totalAmount -= selectedProduct.productPrice;
    },
  },
});

export const {addToCart, removeFromCart} = cartSlice.actions;

export default cartSlice.reducer;
