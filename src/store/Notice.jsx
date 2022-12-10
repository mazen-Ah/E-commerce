import { createSlice } from "@reduxjs/toolkit";

const initialState = { toggleSign: false, toggleOrder: false };
const NoticeSlice = createSlice({
  name: "Notice",
  initialState,
  reducers: {
    Sign: (state, action) => {
      state.toggleOrder = false;
      state.toggleSign = !state.toggleSign;
    },
    order: (state, action) => {
      state.toggleSign = false;
      state.toggleOrder = !state.toggleOrder;
    },
  },
});
export default NoticeSlice.reducer;
export const { Sign, order } = NoticeSlice.actions;
