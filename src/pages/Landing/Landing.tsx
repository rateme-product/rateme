import { tempTableData, tempTableHeaders } from 'constants/temp';

import { Select, Table } from 'components/Reusable';

import useStyles from './style';

const Landing = () => {
  const classes = useStyles();

  return (
    <div className={classes.landing}>
      <Table columns={tempTableHeaders} dataSource={tempTableData} pagination={{ pageSize: 20 }} />
      <Select options={tempTableData.map((item) => ({ value: item.id, label: item.city }))} />
    </div>
  );
};

export default Landing;
