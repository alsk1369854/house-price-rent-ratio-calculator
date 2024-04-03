import "./App.css";
import ThemeSwitch from "./components/ThemeSwitch";
import { useThemeType } from "./hooks/useThemeType";
import HousePriceRentRatioCalculator from "./pages/HousePriceRentRatioCalculator";
import ThemeProvider from "./theme/ThemeProvider";

function App() {
  const [themeType, setThemeType] = useThemeType();

  return (
    <ThemeProvider theme={themeType}>
      <ThemeSwitch theme={themeType} setTheme={setThemeType}></ThemeSwitch>
      <HousePriceRentRatioCalculator></HousePriceRentRatioCalculator>
    </ThemeProvider>
  );
}

export default App;
