import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./Api/apiSlice";
import noticeReducer from "./Notice";
const middleWares = [apiSlice.middleware];
const store = configureStore({
  reducer: { [apiSlice.reducerPath]: apiSlice.reducer, Notice: noticeReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleWares),
});
export default store;
