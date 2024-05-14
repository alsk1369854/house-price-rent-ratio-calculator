import { Button, Form, InputNumber, Space } from "antd";
import React, { useState } from "react";
import { formatterUtils } from "../../utils/FormatterUtils/FormatterUtils";
import { IProjectManagementEarnedValueCalculatorForm } from "./interfaces/IProjectManagementEarnedValueCalculatorForm";
import { IProjectManagementEarnedValueCalculatorResult } from "./interfaces/IProjectManagementEarnedValueCalculatorResult";
import ProjectManagementEarnedValueCalculatorResultModal from "./ProjectManagementEarnedValueCalculatorResoultModal";
import { useIsFirstRender } from "../../hooks/useIsFirstRender";

/**
 * 會計數字格式化器
 */
const accountFormatter = formatterUtils.getAccountingFormatter();

const initialValues: IProjectManagementEarnedValueCalculatorForm = {
  budgetAtCompletion: 10_000,
  estimatedProgress: 50,
  estimatedUnitCost: 100,
  actualProgress: 40,
  actualUnitCost: 112.5,
};

interface IProjectManagementEarnedValueCalculatorProps {
  className?: string;
}

const ProjectManagementEarnedValueCalculator: React.FC<
  IProjectManagementEarnedValueCalculatorProps
> = ({ className }) => {
  const isFirstRender = useIsFirstRender();

  /**
   * 計算結果
   */
  const [result, setResult] =
    useState<IProjectManagementEarnedValueCalculatorResult | null>(null);

  /**
   * 計算參數表單
   */
  const [form] = Form.useForm<IProjectManagementEarnedValueCalculatorForm>();

  /**
   * 表單提交事件
   * @param values 表單參數
   */
  const onFormSubmit = (
    values: IProjectManagementEarnedValueCalculatorForm
  ) => {
    const {
      budgetAtCompletion: bac,
      actualUnitCost,
      actualProgress,
      estimatedUnitCost,
      estimatedProgress,
    } = values;

    const pv = estimatedUnitCost * estimatedProgress;
    const ev = estimatedUnitCost * actualProgress;
    const ac = actualUnitCost * actualProgress;
    const cpi = ev / ac;
    const eac = bac / cpi;
    const result: IProjectManagementEarnedValueCalculatorResult = {
      plannendValue: pv,
      earnedValue: ev,
      actualCost: ac,
      scheduleVariance: ev - pv,
      costVariance: ev - ac,
      schedulePerformedIndex: ev / pv,
      costPerformedIndex: cpi,
      budgetAtCompletion: bac,
      estimateAtCompletion: eac,
      estimateToCompletion: eac - ac,
      varianceAtCompletion: bac - eac,
      done: ev / bac,
      fcst: bac - ev,
    };
    setResult(result);
  };

  /**
   * 表單重置事件
   */
  const onFormReset = () => {
    // 重置表單
    form.resetFields();
    setResult(null);
  };

  return (
    <div className={className}>
      <div className="border-2 rounded-lg p-4">
        <ProjectManagementEarnedValueCalculatorResultModal
          result={result}
        ></ProjectManagementEarnedValueCalculatorResultModal>
        <Form
          form={form}
          size="large"
          scrollToFirstError={true}
          layout="vertical"
          onFinish={onFormSubmit}
          className="flex flex-col"
          initialValues={isFirstRender ? initialValues : undefined}
        >
          <Form.Item<IProjectManagementEarnedValueCalculatorForm>
            label="完工總預算"
            name="budgetAtCompletion"
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
              formatter={(value) => accountFormatter.formatter(value ?? 0)}
              parser={(value) => accountFormatter.parser(`${value ?? ""}`)}
              min={1 as number}
              variant="filled"
              addonAfter="元"
            ></InputNumber>
          </Form.Item>
          <Form.Item<IProjectManagementEarnedValueCalculatorForm>
            label="預計單位成本"
            name="estimatedUnitCost"
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
              formatter={(value) => accountFormatter.formatter(value ?? 0)}
              parser={(value) => accountFormatter.parser(`${value ?? ""}`)}
              min={1 as number}
              variant="filled"
              addonAfter="元"
            ></InputNumber>
          </Form.Item>
          <Form.Item<IProjectManagementEarnedValueCalculatorForm>
            label="預計進度"
            name="estimatedProgress"
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
              formatter={(value) => accountFormatter.formatter(value ?? 0)}
              parser={(value) => accountFormatter.parser(`${value ?? ""}`)}
              min={1 as number}
              variant="filled"
              addonAfter="項"
            ></InputNumber>
          </Form.Item>
          <Form.Item<IProjectManagementEarnedValueCalculatorForm>
            label="實際單位成本"
            name="actualUnitCost"
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
              formatter={(value) => accountFormatter.formatter(value ?? 0)}
              parser={(value) => accountFormatter.parser(`${value ?? ""}`)}
              min={1 as number}
              variant="filled"
              addonAfter="元"
            ></InputNumber>
          </Form.Item>
          <Form.Item<IProjectManagementEarnedValueCalculatorForm>
            label="實際進度"
            name="actualProgress"
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
              formatter={(value) => accountFormatter.formatter(value ?? 0)}
              parser={(value) => accountFormatter.parser(`${value ?? ""}`)}
              min={1 as number}
              variant="filled"
              addonAfter="項"
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
export default ProjectManagementEarnedValueCalculator;
