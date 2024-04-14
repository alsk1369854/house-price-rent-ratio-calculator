import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useState } from "react";

type IClassNamesConfig = {
  [_className in string]: boolean;
};
function createClassNames(config: IClassNamesConfig) {
  return Object.entries(config).reduce((classNames, [className, enable]) => {
    if (enable) {
      return `${classNames} ${className}`;
    }
    return classNames;
  }, "");
}

type IFloatMenuProps = {};

const FloatMenu: React.FC<IFloatMenuProps> = () => {
  const [show, setShow] = useState<boolean>(false);

  const getClassName = (show: boolean) => {
    return createClassNames({
      "transition-all": true,
      "duration-150": true,
      "ease-in-out": true,
      "rounded-r-lg": show,
      "border-gray-400": show,
      "border-t": show,
      "border-r": show,
      "border-b": show,
      "h-96": true,
      "w-80": show,
      "w-0": !show,
    });
  };

  return (
    <div className="fixed z-50 top-20 left-0 h-screen dark:text-white">
      <div className="flex items-top justify-center">
        <iframe
          title="float-menu-item-0"
          src="https://www.leju.com.tw/page_search_result?city=E"
          className={getClassName(show)}
        ></iframe>
        <Button
          type="primary"
          className="ml-1"
          icon={<SearchOutlined />}
          onClick={() => setShow(!show)}
        ></Button>
      </div>
    </div>
  );
};
export default FloatMenu;
