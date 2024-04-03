import { useState } from "react";
import { ThemeType } from "../theme/ThemeProvider";

const isOSThemeOnDark = (): boolean => {
  // 查看系統樣式主題是否為 dark
  return matchMedia("(prefers-color-scheme: dark)").matches;
};

export type SetThemeTypeAction = React.Dispatch<
  React.SetStateAction<ThemeType>
>;
type ThemeTypeState = [ThemeType, SetThemeTypeAction];

export const useThemeHook = (): ThemeTypeState => {
  const [theme, setTheme] = useState<ThemeType>(
    isOSThemeOnDark() ? "dark" : "light"
  );
  return [theme, setTheme];
};
