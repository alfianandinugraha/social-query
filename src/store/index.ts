import { configureStore } from "@reduxjs/toolkit";
import postApi from "./api/postApi";

const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
  },
});

export default store;
