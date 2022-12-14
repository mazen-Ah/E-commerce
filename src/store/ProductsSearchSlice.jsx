import { createSlice } from "@reduxjs/toolkit";
const initialState = { match: [], check: false, search: "", result: "" };
const matchSlice = createSlice({
  name: "match",
  initialState,
  reducers: {
    rematch: (state, action) => {
      state.match = action.payload;
    },
    recheck: (state, action) => {
      state.check = action.payload.length > 0;
      state.result = action.payload;
      state.search = action.payload;
    },
  },
});
export const { rematch, recheck } = matchSlice.actions;
export default matchSlice.reducer;
