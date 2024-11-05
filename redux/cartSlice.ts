import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./index";

interface CartState {
  cart: Array<{ id: number; quantity: number; price: number; [key: string]: any }>;
}

const initialState: CartState = {
  cart: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isPresent = state.cart.find((item) => item.id === action.payload.id);
      if (isPresent) {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromTheCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    updateItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cart.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

export const { addToCart, removeFromTheCart, updateItemQuantity } = CartSlice.actions;
export const getCart = (state: RootState) => state.cart.cart;
export default CartSlice.reducer;
