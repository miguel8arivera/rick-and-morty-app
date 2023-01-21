import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface CarAddtState {
  id: number | string;
  image: string;
  name: string;
  info: string;
}

interface CardRemoveState {
  id: number | string;
}

// Define the initial state using that type
const initialState: CarAddtState[] = [];

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CarAddtState>) => {
      const { id } = action.payload;
      if (
        state.length === 0 ||
        state.filter((item) => item.id === id).length === 0
      ) {
        state.push(action.payload);
      }
    },
    removeToCart: (state, action: PayloadAction<CardRemoveState>) => {
      const { id } = action.payload;
      if (state.some((item) => item.id === id)) {
        return (state = state.filter((item) => item.id !== id));
      }
    },
  },
});

export const { addToCart, removeToCart } = cartSlice.actions;
