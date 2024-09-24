import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CartProduct } from "../types";

export interface CartState {
  cart: Array<CartProduct>;
}

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartProduct>) => {
      const productInCart = state.cart.find((p) => p.id === action.payload.id);

      if (productInCart) {
        productInCart.quantity = action.payload.quantity;
      } else {
        state.cart.push(action.payload);
      }
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
