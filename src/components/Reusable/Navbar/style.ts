import { createUseStyles } from 'react-jss';

import { TStringNumber } from '../types';

export interface IStyleProps {
  logoHeight?: TStringNumber;
  logoWidth?: TStringNumber;
  logoPointer?: boolean;
}

const useStyles = createUseStyles(() => ({
  navbar: {
    display: 'flex',
  },
  logoContainer: ({ logoWidth, logoHeight, logoPointer }: IStyleProps) => ({
    height: logoHeight,
    width: logoWidth,
    cursor: logoPointer ? 'pointer' : 'default',
    '& > img': {
      objectFit: 'cover',
      height: '100%',
      width: '100%',
    },
  }),
  leftSideContainer: {
    display: 'flex',
  },
  rightSideContainer: {
    display: 'flex',
    marginLeft: 'auto',
  },
  navbarItem: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    padding: 10,
  },
}));

export default useStyles;
