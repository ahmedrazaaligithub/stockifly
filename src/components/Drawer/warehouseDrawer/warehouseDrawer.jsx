import { Drawer } from "antd";
import React, { useState } from "react";
import { FaRegNewspaper } from "react-icons/fa6";
import { IoEyeOutline, IoSettingsOutline } from "react-icons/io5";

function WarehouseDrawer({
  open,
  onClose,
  image,
  uploading,
  drawerUploading,
  drawerErrorMessage,
  onFinish,
  handleImage,
  form,
}) {
    const [drawerType,setDrawerType]= useState('basicDetails')
  return (
    <Drawer width={600} title="Add Warehouse" open={open} onClose={onClose}>
      <div className="px-2">
      <div className="my-6 w-full border-b border-gray   flex items-start gap-7">
        <div
          className={`flex items-center justify-center gap-2  pb-2 cursor-pointer text-sm ${
            drawerType === "basicDetails" && "text-blue border-b-2 border-blue"
          }`}
          onClick={() => {
            setDrawerType("basicDetails");
          }}
        >
        <FaRegNewspaper/>   <p className="capitalize">Basic Details</p>
        </div>
        <div
          className={`flex items-center justify-center gap-2  pb-2 cursor-pointer text-sm ${
            drawerType === "visibility" && "text-blue border-b-2 border-blue"
          }`}
          onClick={() => {
            setDrawerType("visibility");
          }}
        >
         <IoEyeOutline/>  <p className="capitalize">Visibility </p>
        </div>

        <div
          className={`flex items-center justify-center gap-2  pb-2 cursor-pointer text-sm ${
            drawerType === "pos" && "text-blue border-b-2 border-blue"
          }`}
          onClick={() => {
            setDrawerType("pos");
          }}
        >
           <IoSettingsOutline/> pos setting
        </div>
      </div>

      {/* {
        drawerType ==="basicDetails" ? () : drawerType ==="basicDetails"
      } */}
      </div>
    </Drawer>
  );
}

export default WarehouseDrawer;
