import { Button, Modal, Popconfirm, Table, TableColumnsType, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { IProjectManagementEarnedValueCalculatorResult } from "../interfaces/IProjectManagementEarnedValueCalculatorResult";
import { formatterUtils } from "../../../utils/FormatterUtils/FormatterUtils";
import { InfoOutlined } from "@ant-design/icons";
import { IDataType } from "./interfaces/IDataType";
import { tableUtils } from "./utils/TableUtils";

/**
 * 會計數字格式化器
 */
const accountFormatter = formatterUtils.getAccountingFormatter();

const columns: TableColumnsType<IDataType> = [
  {
    title: "指標名稱",
    dataIndex: "name",
    align: "left",
  },
  {
    title: "數值",
    dataIndex: "value",
    align: "right",
  },
  {
    title: "標籤",
    dataIndex: "tag",
    align: "center",
  },
  {
    title: "說明",
    dataIndex: "popconfirm",
    align: "center",
  },
];

interface IProjectManagementEarnedValueCalculatorResultModalProps {
  result: IProjectManagementEarnedValueCalculatorResult | null;
}

const ProjectManagementEarnedValueCalculatorResultModal: React.FC<
  IProjectManagementEarnedValueCalculatorResultModalProps
> = ({ result }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    if (result) {
      setShowModal(true);
    }
  }, [result]);

  if (!result) return <></>;

  const dataSource: IDataType[] = Object.entries(result).map(([key, value]) => {
    const material = tableUtils.getDataDisplayMaterial(
      key as keyof IProjectManagementEarnedValueCalculatorResult,
      value
    );
    return {
      key: key,
      name: material.name,
      value: accountFormatter.formatter(value.toFixed(2)),
      tag: material.tag ? (
        <Tag color={material.tag.color}>{material.tag.text}</Tag>
      ) : (
        <></>
      ),
      popconfirm: (
        <Popconfirm
          placement="bottomLeft"
          title={material.popconfirm.title}
          description={material.popconfirm.description}
          showCancel={false}
        >
          <Button size="small" shape="circle" icon={<InfoOutlined />} />
        </Popconfirm>
      ),
    };
  });

  return (
    <Modal
      title="掙值計算結果"
      open={showModal}
      footer={null}
      onCancel={() => setShowModal(false)}
    >
      <Table
        columns={columns}
        dataSource={dataSource}
        size="small"
        pagination={false}
        scroll={{ y: 600 }}
      ></Table>
    </Modal>
  );
};
export default ProjectManagementEarnedValueCalculatorResultModal;
