import React, { useState, useRef } from "react";

import { Button, Form, InputNumber, Space } from "antd";

interface IHousePriceRentRatioCalculatorForm {
  housePricePerSquareMeter: number; // 建物價值/每坪
  rentalAreaSquareMeters: number; // 租處坪數
  monthlyRent: number; // 租處租金/每月
}

export default function HousePriceRentRatioCalculator() {
  /**
   * 計算結果
   */
  const [result, setResult] = useState<string>("0");

  /**
   * 計算結果HTML元素
   */
  const resultElement = useRef<HTMLDivElement>(null);

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
    resultElement.current?.focus();
  };

  return (
    <div className="d-flex flex-column overflow-x-hidden">
      <h2 ref={resultElement} tabIndex={-1}>
        房價租金比：{result}
      </h2>
      <Form<IHousePriceRentRatioCalculatorForm>
        form={form}
        name="house-price-rent-ratio-calculator-form"
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
            type="number"
            pattern="[0-9]*"
            min={1}
            variant="filled"
            addonAfter="$"
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
            type="number"
            className="w-100"
            pattern="[0-9]*"
            min={1}
            variant="filled"
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
            type="number"
            pattern="[0-9]*"
            min={1}
            variant="filled"
            addonAfter="$"
          ></InputNumber>
        </Form.Item>
      </Form>
      <Form.Item wrapperCol={{ span: 16 }}>
        <Space>
          <Button type="primary" onClick={form.submit}>
            提交
          </Button>
          <Button htmlType="button" onClick={onFormReset}>
            重置
          </Button>
        </Space>
      </Form.Item>
    </div>
  );
}
