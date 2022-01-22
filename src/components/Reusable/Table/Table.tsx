import { TStringNumber } from 'components/Reusable/types';

import useStyles from './style';

interface IHeader {
  title: string;
  sortable?: boolean;
  dataKey: string;
}

interface ITableProps {
  headers: IHeader[];
  // Todo: change any later
  data: any[];
  tableHeight?: number;
  rowHeight?: TStringNumber;
}

const Table = ({ headers, data, tableHeight, rowHeight = 50 }: ITableProps): JSX.Element => {
  const classes = useStyles({ tableHeight, rowHeight });

  return (
    <table className={classes.table}>
      <thead className={classes.thead}>
        <tr>
          {headers.map(({ title }) => {
            return (
              <th align="left" className={classes.th} scope="col" key={title}>
                {title}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className={classes.tbody}>
        {data.map((el, index) => (
          <tr className={classes.tbodyTr} key={el.id}>
            {headers.map(({ dataKey }) => (
              <td align="left" className={classes.td} key={`${index}-${dataKey}`}>
                <span>{el[dataKey]}</span>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      <div>Pagination</div>
    </table>
  );
};

export default Table;
