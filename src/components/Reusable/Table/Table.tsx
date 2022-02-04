import { Table as AntTable, TableProps } from 'antd';

type ITableProps<T> = TableProps<T>;

const Table = <T extends object>(props: ITableProps<T>): JSX.Element => {
  return <AntTable {...props} />;
};

export default Table;
