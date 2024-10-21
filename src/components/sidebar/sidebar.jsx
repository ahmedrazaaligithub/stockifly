import React from "react";
import { Layout, Menu } from "antd";
import { RxHamburgerMenu } from "react-icons/rx";
const { Sider } = Layout;
const { SubMenu } = Menu; // Import SubMenu from Menu

const Sidebar = ({
  collapsed,
  setCollapsed,
  selected,
  menuItems,
  onHandleRoute,
}) => {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      className=" bg-darkBlue shadow-lg  h-screen fixed z-50 overflow-auto"
    >
      <div className="mx-auto w-1/2 my-4">
        <img src="/images/logo_white.png" />
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={[selected]}
        className="mt-4 bg-inherit"
        onSelect={(item) => onHandleRoute(item?.key)}
      >
        {menuItems.map((menuItem) => {
          // Check if the menu item has children (subitems)
          if (menuItem.children) {
            return (
              <SubMenu
                key={menuItem.key}
                icon={menuItem.icon}
                title={menuItem.label}
                className="text-gray bg-dark"
              >
                {menuItem.children.map((subItem) => (
                  <Menu.Item
                    key={subItem.key}
                    className={`!text-gray hover:!text-white ${
                      selected === subItem.key ? "bg-blue-500 text-white" : ""
                    }`} // Conditionally apply the background and text color
                  >
                    {subItem.label}
                  </Menu.Item>
                ))}
              </SubMenu>
            );
          }

          return (
            <Menu.Item
              key={menuItem.key}
              className={`text-gray hover:text-white ${
                selected === menuItem.key ? "bg-blue-500 text-white" : ""
              }`}
            >
              <div className="text-base !text-gray">
                <span className="text-[20px]">{menuItem.icon}</span>
                {collapsed ? "" : menuItem.label}
              </div>
            </Menu.Item>
          );
        })}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
