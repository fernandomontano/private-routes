import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi: any = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/" }),
  endpoints: (build) => ({
    getUserByToken: build.query({
      query: (token) => ({
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        url: `users/${token}`,
      }),
    }),
    addNewUser: build.mutation({
      query: ({ name, email, token }) => ({
        url: "users",
        method: "POST",
        body: {
          name,
          email,
          token,
        },
      }),
    }),
  }),
});

export const { useGetUserByTokenQuery, useAddNewUserMutation } = todoApi;
