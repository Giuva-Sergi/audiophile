import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CartProduct } from "../types";

export interface CartState {
  cart: Array<CartProduct>;
  isVisible: boolean;
  isCheckedOut: boolean;
}

const initialState: CartState = {
  cart: [],
  isVisible: false,
  isCheckedOut: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    initializeCart: (state, action: PayloadAction<CartProduct[] | []>) => {
      state.cart = action.payload;
    },
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
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeAllItems: (state) => {
      state.cart = [];
      state.isVisible = false;
      localStorage.setItem("cart", JSON.stringify(state.cart));
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
      localStorage.setItem("cart", JSON.stringify(state.cart));
      if (state.cart.length === 0) {
        state.isVisible = false;
      }
    },
    handleVisibility: (state) => {
      state.isVisible = !state.isVisible;
    },
    handleCheckOut: (state) => {
      state.isCheckedOut = !state.isCheckedOut;
    },
  },
});

export const {
  initializeCart,
  handleItem,
  removeAllItems,
  handleQuantity,
  handleVisibility,
  handleCheckOut,
} = cartSlice.actions;

export default cartSlice.reducer;
