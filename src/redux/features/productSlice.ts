import {createSlice} from '@reduxjs/toolkit';

export interface ProductState {
  popularProduct: null;
}

const initialState: ProductState = {
  popularProduct: null,
};

export const productSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPopularProduct: (state, action) => {
      state.popularProduct = action.payload;
    },
  },
});

export const {setPopularProduct} = productSlice.actions;

export default productSlice.reducer;
