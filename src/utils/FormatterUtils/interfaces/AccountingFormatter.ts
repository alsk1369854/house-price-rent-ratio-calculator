export interface AccountingFormatter {
  formatter(value: string): string;
  parser(value: string): number;
}
