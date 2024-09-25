import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            return (state = [...state, action.payload]);
        },
        
         removeFromCart: (state, action) => {
        return state.filter((item) => item.id !== action.payload);
        },
  
        clearCart: (state, action) => {
        return (state = []);
      },
    },
  });

export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;
