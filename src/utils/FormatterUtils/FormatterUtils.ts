import { AccountingFormatter } from "./interfaces/AccountingFormatter";

class FormatterUtils {
  public getAccountingFormatter(): AccountingFormatter {
    return {
      formatter: (value) => {
        value = value.replace(/[^\d.]/g, "");
        let [intStr, floatStr] = value.split(".");
        intStr = intStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        floatStr = floatStr ? `.${floatStr.replace(/\./g, "")}` : "";
        return `${intStr}${floatStr}`;
      },
      parser: (value) => {
        return +value.replace(/\$\s?|,/g, "");
      },
    };
  }
}

export const formatterUtils = new FormatterUtils();
