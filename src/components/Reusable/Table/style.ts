import { createUseStyles } from 'react-jss';

import { TStringNumber } from 'components/Reusable/types';

import Colors from 'styles/Colors';

export interface IStyleProps {
  tableHeight?: number;
  rowHeight?: TStringNumber;
}

const useStyles = createUseStyles({
  table: ({ tableHeight }: IStyleProps) => ({
    height: tableHeight || 'unset',
    borderSpacing: 0,
  }),
  thead: {
    backgroundColor: Colors.GRAY_LIGHT,
    height: 50,
  },
  th: {
    fontFamily: 'monospace',
    padding: '0 10px',
  },
  tbody: ({ tableHeight }: IStyleProps) => ({
    height: tableHeight ? tableHeight - 100 : 'unset',
  }),
  tbodyTr: ({ rowHeight }: IStyleProps) => ({
    height: rowHeight,
  }),
  td: {
    fontFamily: 'monospace',
    padding: '0 10px',
    borderBottom: `1px solid ${Colors.GRAY_LIGHT}`,
  },
});

export default useStyles;
