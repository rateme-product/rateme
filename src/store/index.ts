import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { actions as generalActions, reducer as generalReducer } from 'store/general';
import { IReduxState } from 'store/types';

const reducer = combineReducers({
  general: generalReducer,
});

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export const { getState, dispatch } = store;

export function getSelectors<T>(processor: (state: IReduxState) => T): T {
  return processor(getState());
}

export * from 'store/init';
export * from 'store/selectors';
export * from 'store/types';

export const { setTheme } = generalActions;

export default store;
