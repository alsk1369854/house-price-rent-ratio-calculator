export interface IProjectManagementEarnedValueCalculatorResult {
  // 計畫值(Plannend Value, PV) = 預計單位成本 * 預計進度
  plannendValue: number;
  // 實獲值(Earned Value, EV) = 預計單位成本 * 實際進度
  earnedValue: number;
  // 實際成本(Actual Cost, AC) = 實際單位成本 * 實際進度
  actualCost: number;
  // 實成變異(Schedule Variance, SV) = EV - PV
  scheduleVariance: number;
  // 成本變異(Cost Variance, CV) = EV - AC
  costVariance: number;
  // 進度執行指標(Schedule Performed Index, SPI) = EV / PV
  schedulePerformedIndex: number;
  // 成本績效指標(Cost Performed Index, CPI) = EV / AC
  costPerformedIndex: number;
  // 完工總預算(Budget At Completion, BAC) = 完工總預算
  budgetAtCompletion: number;
  // 完工成本預估值(Estimate At Completion, EAC) = BAC / CPI
  estimateAtCompletion: number;
  // 未完工成本預估值(Estimate To Completion, ETC) = EAC - AC
  estimateToCompletion: number;
  // 完工變異(Variance At Completion, VAC) = BAC - EAC
  varianceAtCompletion: number;
  // 完工百分比 = EV / BAC
  done: number;
  // 剩餘的工作價值 = BAC - EV
  fcst: number;
}
