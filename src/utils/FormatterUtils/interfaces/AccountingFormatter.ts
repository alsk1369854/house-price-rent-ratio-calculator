export interface AccountingFormatter {
  formatter(value: number): string;
  parser(value: string): number;
}
