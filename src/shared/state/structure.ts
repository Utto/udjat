// Structure state lives in shared for now as it doesn't belong to a particular feature
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Structure, StructureType } from 'types/structure';

type Overwrite<T1, T2> = {
  [P in Exclude<keyof T1, keyof T2>]: T1[P]
} & T2;

type State = Overwrite<Structure, {
  type: StructureType;
}>;

export const initialState: State = {
  type: '',
  value: [],
};

const structureSlice = createSlice({
  name: 'structure',
  initialState,
  reducers: {
    setStructure: (state, { payload }: PayloadAction<Structure>) => ({
      ...state,
      ...payload,
    }),
  },
});

const { actions, reducer } = structureSlice;
export const { setStructure } = actions;
export default reducer;
