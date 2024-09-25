import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: JSON.parse(localStorage.getItem("cart")) || [],
  reducers: {
    addToCart: (state, action) => {
      action.payload.quantity = 1;
      let result = (state = [...state, action.payload]);
      localStorage.setItem("cart", JSON.stringify(result));
      return result;
    },

    removeFromCart: (state, action) => {
      let result = state.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(result));
      return result;
    },

    clearCart: (state, action) => {
      let result = (state = []);
      localStorage.setItem("cart", JSON.stringify(result));
      return result;
    },

    incrementQuantity: (state, action) => {
      return (state = state.map((i) => {
        let id = action.payload;
        if (i.id === id) {
          return { ...i, quantity: i.quantity + 1 };
        } else {
          return i;
        }
      }));
    },

    decrementQuantity: (state, action) => {
      return (state = state.map((i) => {
        let id = action.payload;
        if (i.id === id) {
          return { ...i, quantity: i.quantity === 1 ? 1 : i.quantity - 1 };
        } else {
          return i;
        }
      }));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
