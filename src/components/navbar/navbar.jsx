import React, { useContext, useState } from "react";
import { Avatar, Layout } from "antd";
import {} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoClock } from "react-icons/go";
import { GrCart } from "react-icons/gr";
import { IoAddCircleOutline } from "react-icons/io5";
import { FaChevronDown, FaUser } from "react-icons/fa6";

const { Header } = Layout;

const Navbar = ({ toggleSidebar, collapsed,setCollapsed }) => {
  //   const { user, setUser } = useContext(UserContext);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  //   const [allNotification, setAllNotification] = useState(notifications);
  const navigate = useNavigate();

  const onLogout = () => {
    Cookies.remove("userToken");
    setUser(null);
    navigate("/");
  };
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div
        className={`w-full top-0 !ms-0 ${
          collapsed ? "md:!ms-20" : " md:!ms-[200px]"
        }  bg-white border-b border-[#ddd] flex items-center justify-between px-4  `}
      >
        <div className="w-full flex items-center justify-between">
          <div>
            <RxHamburgerMenu className="text-xl"  onClick={()=>{setCollapsed(!collapsed)}}/>
          </div>
          <div className="flex items-center justify-center  text-blue ">
            <div className="px-8  border-e border-[#ddd] cursor-pointer flex justify-center items-center   text-sm">
              <GoClock className="mx-2" />  Clock In
            </div>
            <div className="px-8  border-e border-[#ddd] cursor-pointer flex justify-center items-center   text-sm">
              <GrCart className="mx-2" /> POS
            </div>
            <div className="px-4  border-e border-[#ddd] cursor-pointer flex justify-center items-center   text-sm">
              <IoAddCircleOutline className="mx-2" /> <span className="text-white hidden">abc </span>
            </div>
            <div className="px-4  border-e border-[#ddd] cursor-pointer flex justify-center items-center   text-sm">
               Electronify <FaChevronDown className="mx-2" />
            </div>
            <div className="px-4  border-e border-[#ddd] cursor-pointer flex justify-center items-center   text-sm">
               En <FaChevronDown className="mx-2" />
            </div>
            <div className="px-4  cursor-pointer flex justify-center items-center   text-sm">
               <Avatar icon={<FaUser className="text-secondary"/>} className="bg-lightblue"/>
            </div>
          </div>
        </div>
        <div className="bg-white py-8">
            <p></p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
