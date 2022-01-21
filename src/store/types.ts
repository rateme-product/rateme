export interface IReduxState {
  general: IGeneralState;
}

export interface IGeneralState {
  theme: ThemeTypes;
}

export enum ThemeTypes {
  dark = 'dark',
  light = 'light',
}
