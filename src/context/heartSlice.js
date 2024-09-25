import { createSlice } from "@reduxjs/toolkit";


export const heartSlice = createSlice({
  name: "heart",
  initialState: [],
  reducers: {
    addToHeart: (state, action) => {
      return (state = [...state, action.payload]);
    },

    removeFromHeart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },

    clearHeart: (state, action) => {
      return (state = []);
    },
  },
});

export const { addToHeart, removeFromHeart, clearHeart } = heartSlice.actions;
