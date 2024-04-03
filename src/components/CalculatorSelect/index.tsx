import { Select } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ICalculatorSelectOption } from "./interfaces/ICalculatorSelectOption";

interface ICalculatorSelectProps {
  className?: string;
  options: ICalculatorSelectOption[];
}

const CalculatorSelect: React.FC<ICalculatorSelectProps> = (props) => {
  const { className, options } = props;

  const navigate = useNavigate();

  const onSelectChange = (value: string) => {
    navigate(value);
  };

  return (
    <Select
      className={className}
      defaultValue={options?.find((option) => option.value === "/")?.value}
      onChange={onSelectChange}
      options={options}
    />
  );
};
export default CalculatorSelect;
