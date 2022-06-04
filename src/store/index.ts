import { configureStore } from "@reduxjs/toolkit";
import postApi from "./api/postApi";

const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(postApi.middleware);
  },
});

export default store;
