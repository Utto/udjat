import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StructureData } from 'types/input';
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
    addHistoryItem: (state, { payload }: PayloadAction<StructureData>) => ({
      ...state,
      data: addToHistory(
        {
          ...payload,
          structure: JSON.stringify(payload.list),
          createdDate: new Date().toISOString(),
        },
        state.data,
      ),
    }),
  },
});

const { actions, reducer } = historySlice;
export const { addHistoryItem } = actions;
export default reducer;
