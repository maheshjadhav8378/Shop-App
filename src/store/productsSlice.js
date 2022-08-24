import {createSlice} from '@reduxjs/toolkit';
import PRODUCTS from '../../data/dummy_data';

const initialState = {
  allProducts: PRODUCTS,
  userProducts: PRODUCTS.filter(product => product.ownerId === 'u1'),
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export const {} = productSlice.actions;

export default productSlice.reducer;
