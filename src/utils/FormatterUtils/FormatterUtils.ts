import { AccountingFormatter } from "./interfaces/AccountingFormatter";

class FormatterUtils {
  public getAccountingFormatter(): AccountingFormatter {
    return {
      formatter: (value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      parser: (value) => +value.replace(/\$\s?|(,*)/g, ""),
    };
  }
}

export const formatterUtils = new FormatterUtils();
