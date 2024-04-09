import React, { Suspense, useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { useThemeHook } from "./hooks/useThemeHook";
import ThemeProvider from "./theme/ThemeProvider";
import Header from "./layouts/Header";
import { IRouteConfig } from "./interfaces/IRouteConfig";
import HousePriceRentRatioCalculator from "./pages/HousePriceRentRatioCalculator";
import { ICalculatorSelectOption } from "./components/CalculatorSelect/interfaces/ICalculatorSelectOption";
import ProjectManagementEarnedValueCalculator from "./pages/ProjectManagementEarnedValueCalculator";

const routeConfigs: IRouteConfig<{ label: string }>[] = [
  {
    path: "/",
    // path: "house-price-rent-ratio",
    element: <HousePriceRentRatioCalculator className="px-4" />,
    data: {
      label: "房價租金比",
    },
  },
  {
    path: "project-management-earned-value",
    element: <ProjectManagementEarnedValueCalculator className="px-4" />,
    data: {
      label: "專案管理-掙值",
    },
  },
];

const calculatorSelectOptions: ICalculatorSelectOption[] = routeConfigs.map(
  ({ path, data }) => ({
    value: path,
    label: data?.label ?? "unll",
  })
);

function App() {
  const [theme, setTheme] = useThemeHook();

  useEffect(() => {
    // 阻止兩指縮放畫面 [Safari only]
    document.addEventListener("gesturestart", function (event) {
      event.preventDefault();
    });
  }, []);

  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <Header
          theme={theme}
          onThemeChange={setTheme}
          calculatorSelectOptions={calculatorSelectOptions}
        ></Header>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routeConfigs.map((config) => (
              <Route key={config.path} {...config}></Route>
            ))}
          </Routes>
        </Suspense>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
