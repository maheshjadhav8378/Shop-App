import {createSlice} from '@reduxjs/toolkit';
import {Order} from '../models/Order';

const initialState = {
  orders: [],
};

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    placeOrder: (state, action) => {
      const {items, totalAmount} = action.payload;
      state.orders.push(
        new Order(new Date().toString(), items, totalAmount, new Date()),
      );
    },
  },
});

export const {placeOrder} = ordersSlice.actions;

export default ordersSlice.reducer;
