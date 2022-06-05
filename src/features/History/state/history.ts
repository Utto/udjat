import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Structure } from 'types/structure';
import { HistoryItem } from '../types';

import addToFixed from '../utils/arrayOfN';

const initialState = {
  data: [] as HistoryItem[],
};

const addToHistory = addToFixed(10);

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addHistoryItem: (state, { payload }: PayloadAction<Structure>) => ({
      ...state,
      data: addToHistory(
        {
          type: payload.type,
          value: JSON.stringify(payload.value),
          createdDate: new Date().toISOString(),
        },
        state.data,
      ) as HistoryItem[],
    }),
  },
});

const { actions, reducer } = historySlice;
export const { addHistoryItem } = actions;
export default reducer;
