import { Button } from "antd";
import React, { useState } from "react";

type IFloatMenuProps = {};

type IClassNamesObject = {
  [_key in string]: boolean;
};
function createClassNames(obj: IClassNamesObject) {
  return Object.entries(obj).reduce((classNames, [className, enable]) => {
    if (enable) {
      return `${classNames} ${className}`;
    }
    return classNames;
  }, "");
}

const FloatMenu: React.FC<IFloatMenuProps> = () => {
  const [show, setShow] = useState<boolean>(false);
  const contentClassName = createClassNames({
    "transition-all": true,
    "duration-150": true,
    "ease-in-out": true,
    "h-96": true,
    "w-80": show,
    "w-0": !show,
  });

  return (
    <div className="fixed z-50 top-16 left-0 h-screen dark:text-white">
      <div className="flex items-top justify-center">
        <div className={contentClassName}>
          <iframe
            title="float-menu-item-0"
            src="https://www.leju.com.tw/page_search_result?city=E"
            className="w-full h-full"
          ></iframe>
        </div>
        <Button
          type="primary"
          className="flex items-center justify-center w-12 h-24 text-lg"
          style={{
            writingMode: "vertical-lr",
          }}
          onClick={() => setShow(!show)}
        >
          實價登入
        </Button>
      </div>
      {/* <div className={` ${show ? "w-full h-full" : "w-0 h-0"}`}>
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
          src="https://www.leju.com.tw/page_search_result?city=E"
          className="w-full h-full"
        ></iframe>
      </div> */}
    </div>
  );
};
export default FloatMenu;
