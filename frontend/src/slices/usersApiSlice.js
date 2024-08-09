import { apiSlice } from "./apiSlice";
import { USERS_URL } from "../constants";
import { logout } from "./authSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: "POST",
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
    getUsers: builder.query({
      query: () => ({
        url: USERS_URL,
        method: "GET",
      }),
      keepUnusedDataFor: 5,
      providesTags: ["Users"],
    }),
  }),
});

export const {
  useLoginMutation,
  useGetUsersQuer,
  useLogoutMutation,
  useRegisterMutation,
} = userApiSlice;
