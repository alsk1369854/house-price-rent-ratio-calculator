import { ReactNode } from "react";
import { CalculatorPathType } from "../types/CalculatorPathType";

export interface IRouteConfig<D = {}> {
  path: CalculatorPathType;
  element: ReactNode;
  data?: D;
}
