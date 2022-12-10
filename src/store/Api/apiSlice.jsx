import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3009" }),
  tagTypes: ["Products"],
  endpoints: ({ query }) => ({
    getProducts: query({
      query: () => "/products",
      providesTags: ["Products"],
    }),
  }),
});
export const { useGetProductsQuery } = apiSlice;
