import { tempTableData, tempTableHeaders } from 'constants/temp';

import { Button, Input, Select, Table } from 'components/Reusable';

import useStyles from './style';

const Landing = () => {
  const classes = useStyles();

  return (
    <div className={classes.landing}>
      <div>
        <span>Components</span>
        <Table columns={tempTableHeaders} dataSource={tempTableData} pagination={{ pageSize: 20 }} rowKey={'id'} />
        <Select
          options={tempTableData.map((item) => ({ value: item.id, label: item.city }))}
          style={{ minWidth: 100 }}
        />
        <Input />
        <Button>Button</Button>
      </div>
    </div>
  );
};

export default Landing;
