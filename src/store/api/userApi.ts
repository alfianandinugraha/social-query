import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post, User } from "model";

const userApi = createApi({
  reducerPath: "user",
  tagTypes: ["Users"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => {
    return {
      getAllUser: builder.query<User[], void>({
        query: () => "users",
        providesTags: [{ type: "Users", id: "LIST" }],
      }),
    };
  },
});

export const { useGetAllUserQuery } = userApi;

export default userApi;
