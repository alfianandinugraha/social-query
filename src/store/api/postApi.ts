import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post } from "model";

const postApi = createApi({
  reducerPath: "post",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => {
    return {
      getAllPost: builder.query<Post[], void>({
        query: () => "posts",
      }),
    };
  },
});

export const { useGetAllPostQuery } = postApi;

export default postApi;
