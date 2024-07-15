import { configureStore } from "@reduxjs/toolkit";

import orderBook from "./slices/orderBook";

export const store = configureStore({
  reducer: {
    orderBook,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
