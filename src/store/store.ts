/** @format */

import { configureStore } from '@reduxjs/toolkit';
import { AuthenticationApi } from './api/AuthenticationApi';
import AuthSlice from './slices/AuthSlice';
import { SessionApi } from './api/SessionApi';
// ...

export const store = configureStore({
  reducer: {
    [AuthenticationApi.reducerPath]: AuthenticationApi.reducer,
    [SessionApi.reducerPath]: SessionApi.reducer,
    // [EventApi.reducerPath]: EventApi.reducer,
    AuthSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      AuthenticationApi.middleware,
      SessionApi.middleware
    ),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
