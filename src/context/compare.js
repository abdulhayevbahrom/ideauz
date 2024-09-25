import { createSlice } from "@reduxjs/toolkit";

export const compareSlice = createSlice({
  name: "compare",
  initialState: JSON.parse(localStorage.getItem("compare")) || [],
  reducers: {
    addToCompare: (state, action) => {
      let result = (state = [...state, action.payload]);
      localStorage.setItem("compare", JSON.stringify(result));
      return result;
    },

    removeFromCompare: (state, action) => {
      let result = state.filter((item) => item.id !== action.payload);
      localStorage.setItem("compare", JSON.stringify(result));
      return result;
    },
  },
});

export const { addToCompare, removeFromCompare } = compareSlice.actions;
