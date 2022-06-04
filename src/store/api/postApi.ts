import { Post } from "model";
import baseApi from "./baseApi";

const postApi = baseApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getAllPost: builder.query<Post[], void>({
        query: () => "posts",
        providesTags: [{ type: "Post", id: "LIST" }],
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
            type: "Post",
            id: "LIST",
          },
          {
            type: "User",
            id: "LIST",
          },
        ],
      }),
    };
  },
});

export const { useGetAllPostQuery, useStorePostMutation } = postApi;

export default postApi;
