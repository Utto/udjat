import { configureStore } from '@reduxjs/toolkit';

import UIState from './ui';

export const store = configureStore({
  reducer: {
    UIState,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
