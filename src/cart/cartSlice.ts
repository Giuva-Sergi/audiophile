import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CartProduct } from "../types";

export interface CartState {
  cart: Array<CartProduct>;
  isCheckout: boolean;
  isVisible: boolean;
}

const initialState: CartState = {
  cart: [],
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
    removeAllItems: (state) => {
      state.cart = [];
      state.isVisible = false;
    },
    handleQuantity: (state, action: PayloadAction<CartProduct>) => {
      if (action.payload.quantity === 0) {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      }
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
    },
    handleVisibility: (state) => {
      state.isVisible = !state.isVisible;
    },
    handleCheckout: (state) => {
      state.isCheckout = !state.isCheckout;
    },
  },
});

export const {
  handleItem,
  removeAllItems,
  handleQuantity,
  handleVisibility,
  handleCheckout,
} = cartSlice.actions;

export default cartSlice.reducer;
