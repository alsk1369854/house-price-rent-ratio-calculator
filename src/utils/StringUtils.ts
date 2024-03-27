class StringUtils {
  private readonly notNumberRex = /[^0-9]/;
  public convertToAccountingFormat(value: number | string): string {
    value = "" + value;
    // if (this.notNumberRex.test(value)) {
    //   throw new Error(`${value} 非純數字字串，不可解析為會計格式`);
    // }
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
export const stringUtils = new StringUtils();
