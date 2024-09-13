import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state, action) => {
      return (state = state + action.payload);
    },

    decrement: (state, action) => {
      return (state = state > 0 ? state - action.payload : 0);
    },

    reset: (state, action) => (state = 0),
  },
});

export const { increment, decrement } = counterSlice.actions;
