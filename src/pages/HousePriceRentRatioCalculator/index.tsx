import React, { useState } from "react";

import { Button, Form, Input, InputNumber, Select, Space } from "antd";
import { stringUtils } from "../../utils/StringUtils";

interface IHousePriceRentRatioCalculatorForm {
  housePricePerSquareMeter: number; // 建物價值/每坪
  rentalAreaSquareMeters: number; // 租處坪數
  monthlyRent: number; // 租處租金/每月
}

export default function HousePriceRentRatioCalculator() {
  const [result, setResult] = useState<string>("0");
  const [form] = Form.useForm<IHousePriceRentRatioCalculatorForm>();
  const onFormSubmit = (values: IHousePriceRentRatioCalculatorForm) => {
    const { housePricePerSquareMeter, rentalAreaSquareMeters, monthlyRent } =
      values;
    const newResult =
      (housePricePerSquareMeter * rentalAreaSquareMeters) / (monthlyRent * 12);
    setResult(newResult.toFixed(2));
  };

  return (
    <div className="d-flex flex-column">
      <h2>房價租金比：{result}</h2>
      <Form<IHousePriceRentRatioCalculatorForm>
        form={form}
        name="house-price-rent-ratio-calculator-form"
        labelAlign="left"
        // labelCol={{ span: 64 }}
        // wrapperCol={{ span: 64 }}
        // layout="horizontal"
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
            // ({ getFieldValue }) => ({
            //   validator: () => {
            //     console.log(typeof getFieldValue("housePricePerSquareMeter"));
            //   },
            // }),
          ]}
        >
          <InputNumber
            className="w-100"
            min={1}
            variant="filled"
            addonAfter="$"
          />
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
          <InputNumber className="w-100" min={1} variant="filled" />
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
            min={1}
            variant="filled"
            addonAfter="$"
          />
        </Form.Item>
      </Form>
      <Form.Item wrapperCol={{ span: 16 }}>
        <Space>
          <Button type="primary" onClick={() => form.submit()}>
            提交
          </Button>
          <Button htmlType="button" onClick={() => form.resetFields()}>
            重置
          </Button>
        </Space>
      </Form.Item>
    </div>
  );
}
