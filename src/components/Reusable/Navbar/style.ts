import { createUseStyles } from 'react-jss';

import { TStringNumber } from '../types';

export interface IStyleProps {
  logoHeight?: TStringNumber;
  logoWidth?: number;
}

const useStyles = createUseStyles(() => ({
  navbar: {
    display: 'flex',
  },
  logoContainer: ({ logoWidth, logoHeight }: IStyleProps) => ({
    height: logoHeight || 20,
    width: logoWidth || 20,
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
    cursor: 'pointer',
  },
}));

export default useStyles;
