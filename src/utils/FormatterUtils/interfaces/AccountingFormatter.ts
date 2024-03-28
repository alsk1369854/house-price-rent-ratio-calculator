export interface AccountingFormatter {
  formatter(value: string | number): string;
  parser(value: string): number;
}
