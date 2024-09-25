import { configureStore } from "@reduxjs/toolkit";
import { heartSlice } from "./heartSlice";
<<<<<<< HEAD
import { compareSlice } from "./compare";
=======
import { cartSlice } from "./cartSlice";
>>>>>>> bf1ce73f347466f4ae69102295a00bfcbc4df353

export const store = configureStore({
  reducer: {
    heart: heartSlice.reducer,
<<<<<<< HEAD
    compare: compareSlice.reducer,
=======
    cart: cartSlice.reducer,
>>>>>>> bf1ce73f347466f4ae69102295a00bfcbc4df353
  },
});
