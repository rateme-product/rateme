import { Select as AntSelect, SelectProps } from 'antd';

type IAutoCompleteProps = SelectProps;

const Select = (props: IAutoCompleteProps) => {
  return <AntSelect {...props} />;
};

export default Select;
