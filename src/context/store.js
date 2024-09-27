import { configureStore } from "@reduxjs/toolkit";
import { heartSlice } from "./heartSlice";
import { compareSlice } from "./compare";
import { cartSlice } from "./cartSlice";

export const store = configureStore({
  reducer: {
    heart: heartSlice.reducer,
    compare: compareSlice.reducer,
    cart: cartSlice.reducer,
  },
});
