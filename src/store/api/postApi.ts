import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post } from "model";

const postApi = createApi({
  reducerPath: "post",
  tagTypes: ["Users"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => {
    return {
      getAllPost: builder.query<Post[], void>({
        query: () => "posts",
        providesTags: [{ type: "Users", id: "LIST" }],
      }),
      storePost: builder.mutation<void, Post>({
        query: (body) => {
          return {
            url: "posts",
            method: "POST",
            body,
          };
        },
        invalidatesTags: [
          {
            type: "Users",
            id: "LIST",
          },
        ],
      }),
    };
  },
});

export const { useGetAllPostQuery, useStorePostMutation } = postApi;

export default postApi;
