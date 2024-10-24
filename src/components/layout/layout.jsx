import React, { useState } from "react";
import { AiOutlineHome, AiOutlineProduct } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Navbar, Sidebar, MenuDrawer, Breadcrumbs } from "../components";
import { IoMdLogOut } from "react-icons/io";
function Layout({ selected, children }) {
  const navigate = useNavigate();
  const [Collapse, setCollapsed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const onHandleRoute = (key) => {
    key === "1" && navigate("/");
    key == "2" && navigate("/admin/dashboard");
    key == "3" && navigate("/admin/parties/customers");
    key == "4" && navigate("/admin/parties/suppliers");
    key == "5" && navigate("/admin/parties");
    key == "6" && navigate("admin/productManager/brand");
    key == "7" && navigate("admin/productManager/categories");
    key == "8" && navigate("admin/productManager/printBarcode");
    key == "9" && navigate("admin/productManager/products");
    key == "10" && navigate("admin/productManager/variations");
    key == "11" && navigate("admin/productManager");
    key == "0" && onLogout();
  };
  const onLogout = () => {
    navigate("/");
  };
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const menuItems = [
    getItem("Dashboard", "2", <AiOutlineHome className="inline-block" />),
     getItem("Parties", "5", <AiOutlineHome className="inline-block" />,[
      getItem("Customers", "3"),
      getItem("Suppliers", "4"),
    ]),
    getItem('Product Manager','11',<AiOutlineProduct className="inline-block"/>,[
      getItem('Brand','6'),
      getItem('Categories','7'),
      getItem('Variations','11'),
      getItem('PrintBarcode','8'),
      getItem('Products','9'),
      // getItem('Productsvariations','10'),
    ]),
    getItem("Logout", "0",<IoMdLogOut className="inline-block" />),
  ];
  return (
    <div className="flex flex-col bg-bluish min-h-screen">
      <div className="flex">
        <div className="md:flex hidden">
          <Sidebar
            collapsed={Collapse}
            setCollapsed={(e) => setCollapsed(e)}
            selected={selected}
            menuItems={menuItems}
            onHandleRoute={onHandleRoute}
          />
        </div>
        <Navbar
          collapsed={Collapse}
          setCollapsed={setCollapsed}
          toggleSidebar={() => setIsOpen(true)}
        />
      </div>
      <Breadcrumbs collapsed={Collapse} />

      <div
        className={`flex-1 ${
          !Collapse ? "md:pl-56 pl-2" : "md:pl-[6.5rem] pl-2"
        } md:pr-6 pr-2 py-6 overflow-x-hidden w-full h-full`}
      >
        {children}
      </div>

      <div className="md:hidden flex bg-darkBlue">
        <MenuDrawer
          open={isOpen}
          onClose={() => setIsOpen(false)}
          selected={selected}
          menuItems={menuItems}
          onHandleRoute={onHandleRoute}
        />
      </div>
    </div>
  );
}

export default Layout;
