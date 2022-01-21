import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import initialState from 'store/init';
import { ThemeTypes } from 'store/types';

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setTheme: (state, { payload }: PayloadAction<ThemeTypes>) => {
      state.theme = payload;
    },
    resetGeneral: () => ({ ...initialState }),
  },
});

export const { reducer, actions } = generalSlice;
