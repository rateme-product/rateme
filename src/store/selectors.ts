import { IGeneralState, IReduxState, ThemeTypes } from 'store/types';

// Main
export const getStore = (state: IReduxState): IReduxState => state;
export const getGeneral = (state: IReduxState): IGeneralState => getStore(state).general;

// Theme
export const getTheme = (state: IReduxState): ThemeTypes => getGeneral(state).theme;
