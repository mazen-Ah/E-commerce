import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3009" }),
  tagTypes: ["Products"],
  endpoints: ({ query, mutation }) => ({
    getProducts: query({
      query: () => "/products",
      providesTags: ["Products"],
    }),
    getOneProduct: query({
      query: (id) => `/products/${id}`,
      invalidatesTags: ["Products"],
    }),
    postReview: mutation({
      query: (body) => ({
        url: `/products/${body.id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});
export const {
  useGetProductsQuery,
  useGetOneProductQuery,
  usePostReviewMutation,
} = apiSlice;
