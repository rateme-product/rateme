import { createUseStyles } from 'react-jss';

import Colors from 'styles/Colors';

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
    position: 'relative',
    alignItems: 'center',
    cursor: 'pointer',
    fontFamily: 'monospace',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
    textTransform: 'uppercase',
    textDecoration: 'none',
    overflow: 'hidden',
    '& > span': {
      color: Colors.BLACK,
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      backgroundColor: 'transparent',
      height: 8,
      width: '100%',
      bottom: -4,
      left: 0,
      borderRadius: 5,
    },
    '&:hover:before': {
      backgroundColor: Colors.YELLOW_HOVER,
    },
  },
  active: {
    '&:before': {
      backgroundColor: `${Colors.BLACK} !important`,
    },
  },
}));

export default useStyles;
