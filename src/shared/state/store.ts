import { Action, configureStore, Middleware } from '@reduxjs/toolkit';

import UIState from './ui';
import structureState from './structure';
import historyState from '../../features/History/state/history';

const historyActionType = 'history/addHistoryItem';

const storageMiddleware: Middleware = ({ getState }) => (next) => (action: Action) => {
  const res = next(action);
  if (action.type === historyActionType) {
    const { data } = getState().historyState;
    localStorage.setItem('historyData', JSON.stringify(data));
  }
  return res;
};

const rehydrate = () => {
  const stored = localStorage.getItem('historyData');
  const data = stored ? JSON.parse(stored) : [];
  return { historyState: { data } };
};

export const store = configureStore({
  reducer: {
    UIState,
    structureState,
    historyState,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(storageMiddleware),
  preloadedState: rehydrate(),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
