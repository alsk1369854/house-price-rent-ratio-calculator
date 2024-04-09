export const calculatorTypes = [
  "house-price-rent-ratio",
  "project-management-earned-value",
] as const;
export type CalculatorType = (typeof calculatorTypes)[number];
