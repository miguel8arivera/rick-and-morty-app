import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface CartState {
  id: number | string;
  img: string;
  name: string;
  info: string;
}

// Define the initial state using that type
const initialState: CartState = {
  id: 0,
  img: '',
  name: '',
  info: '',
};

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCar: (state, action: PayloadAction<CartState>) => {},
    removeToCar: (state, action: PayloadAction<CartState>) => {},
  },
});

export const { addToCar, removeToCar } = cartSlice.actions;
