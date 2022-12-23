import { createSlice } from "@reduxjs/toolkit";
const initialState = { inCart: [] };
const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.inCart.push(action.payload);
    },
  },
});
export default CartSlice.reducer;
export const { addToCart } = CartSlice.actions;
