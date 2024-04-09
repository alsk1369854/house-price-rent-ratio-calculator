import { IProjectManagementEarnedValueCalculatorResult } from "../../interfaces/IProjectManagementEarnedValueCalculatorResult";
import { IDataDisplayMaterial } from "../interfaces/IDataDisplayMaterial";

class TableUtils {
  public getDataDisplayMaterial(
    key: keyof IProjectManagementEarnedValueCalculatorResult,
    value: number
  ): IDataDisplayMaterial {
    switch (key) {
      case "plannendValue":
        return {
          name: "計畫值\n(PV)",
          popconfirm: {
            title: "計畫值(Plannend Value, PV)",
            description: "= 預計單位成本 * 預計進度",
          },
        };
      case "earnedValue":
        return {
          name: "實獲值\n(EV)",
          popconfirm: {
            title: "實獲值(Earned Value, EV)",
            description: "= 預計單位成本 * 實際進度",
          },
        };
      case "actualCost":
        return {
          name: "實際成本\n(AC)",
          popconfirm: {
            title: "實際成本(Actual Cost, AC)",
            description: "= 實際單位成本 * 實際進度",
          },
        };
      case "scheduleVariance":
        return {
          name: "實成變異\n(SV)",
          tag:
            value > 0
              ? {
                  color: "green",
                  text: "進度超前",
                }
              : {
                  color: "red",
                  text: "進度落後",
                },
          popconfirm: {
            title: "實成變異(Schedule Variance, SV)",
            description: "= EV - PV",
          },
        };
      case "costVariance":
        return {
          name: "成本變異\n(CV)",
          tag:
            value > 0
              ? {
                  color: "green",
                  text: "有效率",
                }
              : {
                  color: "red",
                  text: "沒效率",
                },
          popconfirm: {
            title: "成本變異(Cost Variance, CV)",
            description: "= EV - AC",
          },
        };
      case "schedulePerformedIndex":
        return {
          name: "進度執行指標\n(SPI)",
          tag:
            value > 1
              ? {
                  color: "green",
                  text: "有效率",
                }
              : {
                  color: "red",
                  text: "沒效率",
                },
          popconfirm: {
            title: "進度執行指標(Schedule Performed Index, SPI)",
            description: "= EV / PV",
          },
        };
      case "costPerformedIndex":
        return {
          name: "成本績效指標\n(CPI)",
          tag:
            value > 1
              ? {
                  color: "green",
                  text: "有效率",
                }
              : {
                  color: "red",
                  text: "沒效率",
                },
          popconfirm: {
            title: "成本績效指標(Cost Performed Index, CPI)",
            description: "= EV / AC",
          },
        };
      case "budgetAtCompletion":
        return {
          name: "完工總預算\n(BAC)",
          popconfirm: {
            title: "完工總預算(Budget At Completion, BAC)",
            description: "= 完工總預算",
          },
        };
      case "estimateAtCompletion":
        return {
          name: "完工成本預估值\n(EAC)",
          popconfirm: {
            title: "完工成本預估值(Estimate At Completion, EAC)",
            description: "= BAC / CPI",
          },
        };
      case "estimateToCompletion":
        return {
          name: "未完工成本預估值\n(ETC)",
          popconfirm: {
            title: "未完工成本預估值(Estimate To Completion, ETC)",
            description: "= EAC - AC",
          },
        };
      case "varianceAtCompletion":
        return {
          name: "完工變異\n(VAC)",
          popconfirm: {
            title: "完工變異(Variance At Completion, VAC)",
            description: "= BAC - EAC",
          },
        };
      case "done":
        return {
          name: "完工百分比",
          popconfirm: {
            title: "完工百分比",
            description: "= EV / BAC",
          },
        };
      case "fcst":
        return {
          name: "剩餘的工作價值",
          popconfirm: {
            title: "剩餘的工作價值",
            description: "= BAC - EV",
          },
        };
      default:
        const _expandCheck: never = key;
        return _expandCheck;
    }
  }
}
export const tableUtils = new TableUtils();
