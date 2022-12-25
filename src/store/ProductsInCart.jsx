import { createSlice } from "@reduxjs/toolkit";
const initialState = { inCart: [] };
const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.inCart.push(action.payload);
    },
    deleteFromCart: (state, action) => {
      state.inCart.splice(action.payload, 1);
    },
  },
});
export default CartSlice.reducer;
export const { addToCart, deleteFromCart } = CartSlice.actions;
