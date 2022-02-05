import { Input as AntInput, InputProps } from 'antd';

interface IInputProps extends InputProps {
  componentType?: 'text' | 'password';
}

const Input = (props: IInputProps) => {
  return props.componentType === 'password' ? <AntInput.Password {...props} /> : <AntInput {...props} />;
};

export default Input;
