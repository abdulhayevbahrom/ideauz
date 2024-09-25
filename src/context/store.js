import { configureStore } from "@reduxjs/toolkit";
import { heartSlice } from "./heartSlice";
import { cartSlice } from "./cartSlice";

export const store = configureStore({
  reducer: {
    heart: heartSlice.reducer,
    cart: cartSlice.reducer,
  },
});
