import React from "react";
import { Switch } from "antd";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { SwitchChangeEventHandler } from "antd/es/switch";
import { ThemeSwitchEventHandler } from "./types/ThemeSwitchEventHandler";
import { ThemeType } from "../../theme/ThemeProvider";

interface IThemeSwitchProps {
  className?: string;
  theme?: ThemeType;
  onChange?: ThemeSwitchEventHandler;
}

const ThemeSwitch: React.FC<IThemeSwitchProps> = (props) => {
  const { className, onChange, theme } = props;

  const switchOnChange: SwitchChangeEventHandler = (checked) => {
    if (!onChange) return;
    if (checked) {
      onChange("light");
    } else {
      onChange("dark");
    }
  };

  return (
    <Switch
      className={className}
      checkedChildren={<SunOutlined />}
      unCheckedChildren={<MoonOutlined />}
      checked={theme === "light"}
      onChange={switchOnChange}
    />
  );
};
export default ThemeSwitch;
