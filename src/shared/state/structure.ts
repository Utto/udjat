// Structure state lives in shared for now as it doesn't belong to a particular feature
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StructureData } from 'types/input';

export const initialState: StructureData = {
  type: '',
  list: [],
};

const structureSlice = createSlice({
  name: 'structure',
  initialState,
  reducers: {
    setStructure: (state, { payload }: PayloadAction<StructureData>) => ({
      ...state,
      ...payload,
      createdDate: new Date().toISOString(),
    }),
  },
});

const { actions, reducer } = structureSlice;
export const { setStructure } = actions;
export default reducer;
