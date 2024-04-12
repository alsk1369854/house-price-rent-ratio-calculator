import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useState } from "react";

type IFloatMenuProps = {};

const FloatMenu: React.FC<IFloatMenuProps> = ({}) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="fixed z-50 top-0 left-0 dark:text-white w-full h-screen">
      <div className={` ${show ? "w-full h-full" : "w-0 h-0"}`}>
        <Button
          className={`transition-all ease-in-out duration-700 absolute top-40 ${
            show ? "right-0" : "left-0"
          }`}
          type="primary"
          onClick={() => setShow(!show)}
        >
          {show ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>

        <iframe
          src="https://www.leju.com.tw/page_search_result?oid=L0ba110289f92f5&bType=0"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};
export default FloatMenu;
