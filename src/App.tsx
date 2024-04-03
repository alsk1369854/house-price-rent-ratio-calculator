import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { useThemeHook } from "./hooks/useThemeHook";
import ThemeProvider from "./theme/ThemeProvider";
import Header from "./layouts/Header";
import { IRouteConfig } from "./interfaces/IRouteConfig";
import HousePriceRentRatioCalculator from "./pages/HousePriceRentRatioCalculator";
import { ICalculatorSelectOption } from "./components/CalculatorSelect/interfaces/ICalculatorSelectOption";

const routeConfigs: IRouteConfig[] = [
  {
    label: "房價租金比計算機",
    path: "/",
    // path: "house-price-rent-ratio-calculator",
    element: (
      <HousePriceRentRatioCalculator className="px-4"></HousePriceRentRatioCalculator>
    ),
  },
];

const calculatorSelectOptions: ICalculatorSelectOption[] = routeConfigs.map(
  ({ path, label }) => ({
    value: path,
    label,
  })
);

function App() {
  const [theme, setTheme] = useThemeHook();

  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <Header
          theme={theme}
          onThemeChange={setTheme}
          calculatorSelectOptions={calculatorSelectOptions}
        ></Header>
        <Routes>
          {routeConfigs.map((config) => (
            <Route key={config.path} {...config}></Route>
          ))}
        </Routes>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
