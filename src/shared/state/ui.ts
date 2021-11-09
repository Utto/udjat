import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UIState = {
  history: boolean,
};

const initialState: UIState = {
  history: false,
};

const UISlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggle: (state, { payload }: PayloadAction<keyof UIState>) => ({
      ...state,
      [payload]: !state[payload],
    }),
  },
});

const { actions, reducer } = UISlice;
export const { toggle } = actions;
export default reducer;
