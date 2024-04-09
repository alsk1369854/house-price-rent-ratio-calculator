import { Select } from "antd";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ICalculatorSelectOption } from "./interfaces/ICalculatorSelectOption";
import { useIsFirstRender } from "../../hooks/useIsFirstRender";

interface ICalculatorSelectProps {
  className?: string;
  options: ICalculatorSelectOption[];
}

const CalculatorSelect: React.FC<ICalculatorSelectProps> = ({
  className,
  options,
}) => {
  const isFirstRender = useIsFirstRender();

  const navigate = useNavigate();

  const onSelectChange = (value: string) => {
    navigate(value);
  };

  useEffect(() => {
    if (!isFirstRender) return;
    const target = options.find((item) => item.value === "/");
    if (!target) return;
    navigate(target.value);
  }, [options, navigate, isFirstRender]);

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
