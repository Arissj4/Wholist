import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import { usersAPI } from "./usersAPI";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    [usersAPI.reducerPath]: usersAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
