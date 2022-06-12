import { Post } from "model";
import baseApi from "./baseApi";

type GetAllPostParam = {
  limit?: number;
};

type GetAllPostPayload = {
  param?: GetAllPostParam;
};

const postApi = baseApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getAllPost: builder.query<Post[], GetAllPostPayload | void>({
        query: (arg) => {
          if (!arg) {
            return {
              url: "posts",
            };
          }

          return {
            url: "posts",
            params: {
              _limit: arg.param?.limit,
            },
          };
        },
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
