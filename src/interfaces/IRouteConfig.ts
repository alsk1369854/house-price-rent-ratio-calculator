import { ReactNode } from "react";
import { CalculatorPathType } from "../types/CalculatorPathType";

export interface IRouteConfig {
  path: CalculatorPathType;
  element: ReactNode;
  label: string;
}
