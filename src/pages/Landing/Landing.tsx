import { tempTableData, tempTableHeaders } from 'constants/temp';

import { Table } from 'components/Reusable';

import useStyles from './style';

const Landing = () => {
  const classes = useStyles();

  return (
    <div className={classes.landing}>
      <Table headers={tempTableHeaders} data={tempTableData} tableHeight={600} />
    </div>
  );
};

export default Landing;
