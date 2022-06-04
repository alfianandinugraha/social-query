import { configureStore } from "@reduxjs/toolkit";
import postApi from "./api/postApi";
import userApi from "./api/userApi";

const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(postApi.middleware)
      .concat(userApi.middleware);
  },
});

export default store;
