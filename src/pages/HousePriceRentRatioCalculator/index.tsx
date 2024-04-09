import React, { useState } from "react";

import { Button, Form, InputNumber, Space } from "antd";
import { formatterUtils } from "../../utils/FormatterUtils/FormatterUtils";
import { IHousePriceRentRatioCalculatorForm } from "./interfaces/IHousePriceRentRatioCalculatorForm";
import { useIsFirstRender } from "../../hooks/useIsFirstRender";

/**
 * 會計數字格式化器
 */
const accountFormatter = formatterUtils.getAccountingFormatter();

const initialValues: IHousePriceRentRatioCalculatorForm = {
  housePricePerSquareMeter: 175_000,
  rentalAreaSquareMeters: 4.5,
  monthlyRent: 6_500,
};

interface IHousePriceRentRatioCalculatorProps {
  className?: string;
}

const HousePriceRentRatioCalculator: React.FC<
  IHousePriceRentRatioCalculatorProps
> = ({ className }) => {
  const isFirstRender = useIsFirstRender();

  /**
   * 計算結果
   */
  const [result, setResult] = useState<string>("0");

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
  };

  /**
   * 表單重置事件
   */
  const onFormReset = () => {
    // 重置表單
    form.resetFields();
    setResult("0");
  };

  return (
    <div className={className}>
      <div className="border-2 rounded-lg p-4">
        <div className="font-bold text-xl dark:text-white">
          房價租金比：{result}
        </div>
        <Form<IHousePriceRentRatioCalculatorForm>
          form={form}
          name="house-price-rent-ratio-calculator-form"
          size="large"
          scrollToFirstError={true}
          layout="vertical"
          onFinish={onFormSubmit}
          className="flex flex-col"
          initialValues={isFirstRender ? initialValues : undefined}
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
              className="w-full"
              inputMode="decimal"
              formatter={(value) =>
                accountFormatter.formatter(`${value ?? ""}`)
              }
              parser={(value) => accountFormatter.parser(`${value ?? ""}`)}
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
              className="w-full"
              inputMode="decimal"
              formatter={(value) =>
                accountFormatter.formatter(`${value ?? ""}`)
              }
              parser={(value) => accountFormatter.parser(`${value ?? ""}`)}
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
              className="w-full"
              inputMode="decimal"
              formatter={(value) =>
                accountFormatter.formatter(`${value ?? ""}`)
              }
              parser={(value) => accountFormatter.parser(`${value ?? ""}`)}
              min={1 as number}
              variant="filled"
              addonAfter="元"
            ></InputNumber>
          </Form.Item>
        </Form>
        <Form.Item className="mb-1">
          <Space
            size="large"
            direction="horizontal"
            className="w-full justify-center"
          >
            <Button type="primary" size="large" onClick={form.submit}>
              提交
            </Button>
            <Button size="large" onClick={onFormReset}>
              重置
            </Button>
          </Space>
        </Form.Item>
      </div>
    </div>
  );
};
export default HousePriceRentRatioCalculator;
