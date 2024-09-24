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
    handleItem: (state, action: PayloadAction<CartProduct>) => {
      const productInCart = state.cart.find((p) => p.id === action.payload.id);

      if (action.payload.quantity === 0 && !productInCart) return;

      if (productInCart) {
        if (action.payload.quantity === 0) {
          state.cart = state.cart.filter((p) => p.id !== productInCart.id);
        }
        productInCart.quantity = action.payload.quantity;
      } else {
        state.cart.push(action.payload);
      }
    },
  },
});

export const { handleItem } = cartSlice.actions;

export default cartSlice.reducer;
