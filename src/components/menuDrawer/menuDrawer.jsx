import React from "react";
import { Drawer, Menu } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const MenuDrawer = ({ selected, open, onClose, menuItems, onHandleRoute }) => {
  return (
    <Drawer
      placement="left"
      open={open}
      className={"w-full bg-primary  rounded-tr-md rounded-br-md p-0 sidemenu-drawer"}
      width={200}
      closable={false}
    >
      <div className="flex justify-end  p-4 pb-0">
        <CloseOutlined className="text-lg cursor-pointer" onClick={onClose} />
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={[selected]}
        className=" mt-4 w-full"
        items={menuItems}
        onSelect={(items) => onHandleRoute(items?.key)}
      />
    </Drawer>
  );
};

export default MenuDrawer;
