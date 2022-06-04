import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const baseApi = createApi({
  reducerPath: "api",
  tagTypes: ["User", "Post"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://jsonplaceholder.typicode.com/",
  }),
  endpoints: () => {
    return {};
  },
});

export default baseApi;
