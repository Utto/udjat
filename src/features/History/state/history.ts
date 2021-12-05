import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StructureData } from 'state/structure';

import addToFixed from '../utils';

type HistoryItem = {
  type: string,
  list: string,
  createdDate: string,
}

export const initialState = {
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
        { ...payload, list: JSON.stringify(payload.list), createdDate: new Date().toISOString() },
        state.data,
      ),
    }),
  },
});

const { actions, reducer } = historySlice;
export const { addHistoryItem } = actions;
export default reducer;
