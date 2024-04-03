import React from "react";
import CalculatorSelect from "../../components/CalculatorSelect";
import ThemeSwitch from "../../components/ThemeSwitch";
import { ThemeSwitchEventHandler } from "../../components/ThemeSwitch/types/ThemeSwitchEventHandler";
import { ThemeType } from "../../theme/ThemeProvider";
import { ICalculatorSelectOption } from "../../components/CalculatorSelect/interfaces/ICalculatorSelectOption";

interface IHeaderProps {
  className?: string;
  theme: ThemeType;
  onThemeChange: ThemeSwitchEventHandler;
  calculatorSelectOptions: ICalculatorSelectOption[];
}

const Header: React.FC<IHeaderProps> = (props) => {
  const { className, onThemeChange, theme, calculatorSelectOptions } = props;

  return (
    <div className={className}>
      <div className="flex justify-between items-center p-4">
        <CalculatorSelect
          className="w-48"
          options={calculatorSelectOptions}
        ></CalculatorSelect>
        <ThemeSwitch theme={theme} onChange={onThemeChange}></ThemeSwitch>
      </div>
    </div>
  );
};
export default Header;
