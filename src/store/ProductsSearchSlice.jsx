import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";
const initialState = { match: [], check: false, search: "" };
const matchSlice = createSlice({
  name: "match",
  initialState,
  reducers: {
    rematch: (state, action) => {
      state.match = action.payload;
    },
    recheck: (state, action) => {
      state.check = action.payload.length > 0;
      state.search = action.payload;
    },
  },
});
export const { rematch, recheck } = matchSlice.actions;
export default matchSlice.reducer;
