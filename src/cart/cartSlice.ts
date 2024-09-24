import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CartProduct } from "../types";

export interface CartState {
  cart: Array<CartProduct>;
  isCheckout: boolean;
  isVisible: boolean;
}

const initialState: CartState = {
  // cart: [],
  cart: [
    {
      id: 4,
      name: "XX99 Mark II Headphones",
      slug: "xx99-mark-two-headphones",
      price: 2999,
      quantity: 1,
    },
    {
      id: 1,
      name: "YX1 Wireless Earphones",
      slug: "yx1-earphones",
      price: 599,
      quantity: 1,
    },
  ],
  isCheckout: false,
  isVisible: false,
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
    handleVisibility: (state) => {
      state.isVisible = !state.isVisible;
    },
  },
});

export const { handleItem, handleVisibility } = cartSlice.actions;

export default cartSlice.reducer;
