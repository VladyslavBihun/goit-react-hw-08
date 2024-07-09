//(filters) slice.js

import { createSlice } from "@reduxjs/toolkit";

const initialFilterState = {
  name: "",
};

const slice = createSlice({
  name: "filters",
  initialState: initialFilterState,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = slice.actions;

export default slice.reducer;
