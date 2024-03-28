import React, { useState, useRef } from "react";

import { Button, Form, InputNumber, Space } from "antd";
import { formatterUtils } from "../../utils/FormatterUtils/FormatterUtils";

interface IHousePriceRentRatioCalculatorForm {
  housePricePerSquareMeter: number; // 建物價值/每坪
  rentalAreaSquareMeters: number; // 租處坪數
  monthlyRent: number; // 租處租金/每月
}

/**
 * 會計數字格式化器
 */
const accountFormatter = formatterUtils.getAccountingFormatter();

export default function HousePriceRentRatioCalculator() {
  /**
   * 計算結果
   */
  const [result, setResult] = useState<string>("0");

  /**
   * 計算結果 div 元素
   */
  const resultElement = useRef<HTMLDivElement>(null);

  /**
   * 表單第一項 input 元素
   */
  const firstFormInputElement = useRef<HTMLInputElement>(null);

  /**
   * 計算參數表單
   */
  const [form] = Form.useForm<IHousePriceRentRatioCalculatorForm>();

  /**
   * 表單提交事件
   * @param values 表單參數
   */
  const onFormSubmit = (values: IHousePriceRentRatioCalculatorForm) => {
    const { housePricePerSquareMeter, rentalAreaSquareMeters, monthlyRent } =
      values;
    // 計算結果
    const housePriceRentRatio =
      (housePricePerSquareMeter * rentalAreaSquareMeters) / (monthlyRent * 12);
    // 更新結果呈現
    setResult(housePriceRentRatio.toFixed(2));
    // 回到標單頂部
    resultElement.current?.focus();
  };

  /**
   * 表單重置事件
   */
  const onFormReset = () => {
    // 重置表單
    form.resetFields();
    setResult("0");
    // 回到標單頂部
    firstFormInputElement.current?.focus();
  };

  return (
    <div className="d-flex flex-column overflow-x-hidden">
      <h1 ref={resultElement} tabIndex={-1}>
        房價租金比：{result}
      </h1>
      <Form<IHousePriceRentRatioCalculatorForm>
        form={form}
        name="house-price-rent-ratio-calculator-form"
        size="large"
        scrollToFirstError={true}
        layout="vertical"
        onFinish={onFormSubmit}
      >
        <Form.Item
          label="建物價值/每坪"
          name="housePricePerSquareMeter"
          rules={[
            {
              required: true,
              message: "必填",
            },
          ]}
        >
          <InputNumber
            className="w-100"
            ref={firstFormInputElement}
            pattern="[0-9]*"
            formatter={(value) => accountFormatter.formatter(value ?? "")}
            parser={(value) => accountFormatter.parser(value ?? "")}
            min={1 as number}
            variant="filled"
            addonAfter="元"
          ></InputNumber>
        </Form.Item>
        <Form.Item
          label="租處坪數"
          name="rentalAreaSquareMeters"
          rules={[
            {
              required: true,
              message: "必填",
            },
          ]}
        >
          <InputNumber
            className="w-100"
            type="number"
            pattern="number"
            formatter={(value) => `${value}`.replace(/[^\d.]/g, "")}
            parser={(value) => +value!}
            min={1 as number}
            variant="filled"
            addonAfter="坪"
          ></InputNumber>
        </Form.Item>
        <Form.Item
          label="租處租金/每月"
          name="monthlyRent"
          rules={[
            {
              required: true,
              message: "必填",
            },
          ]}
        >
          <InputNumber
            className="w-100"
            pattern="[0-9]*"
            formatter={(value) => accountFormatter.formatter(value ?? "")}
            parser={(value) => accountFormatter.parser(value ?? "")}
            min={1 as number}
            variant="filled"
            addonAfter="元"
          ></InputNumber>
        </Form.Item>
      </Form>
      <Form.Item>
        <Space size="large">
          <Button type="primary" size="large" onClick={form.submit}>
            提交
          </Button>
          <Button size="large" onClick={onFormReset}>
            重置
          </Button>
        </Space>
      </Form.Item>
    </div>
  );
}
