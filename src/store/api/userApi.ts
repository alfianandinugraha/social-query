import { User } from "model";
import baseApi from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getAllUser: builder.query<User[], void>({
        query: () => "users",
        providesTags: [{ type: "User", id: "LIST" }],
      }),
    };
  },
});

export const { useGetAllUserQuery } = userApi;

export default userApi;
