import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      // query: ({ keyword, pageNumber }) => ({
      query: () => ({
        url: PRODUCTS_URL,
        // params: { keyword, pageNumber },
        // url: `${PRODUCTS_URL}?keyword=${keyword}&pageNumber=${pageNumber}`,
      }),
      keepUnusedDataFor: 5,
      providesTags: ["Products"],
    }),
    getProductDetails: builder.query({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    createProduct: builder.mutation({
      query: () => ({
        url: `${PRODUCTS_URL}`,
        method: "POST",
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductDetailsQuery, useCreateProductMutation } =
  productsApiSlice;
