import React from "react";
import { Upload, Spin } from "antd";
import { PlusOutlined } from "@ant-design/icons";
const { Dragger } = Upload;

const ThemeUploader = ({
  type,
  label,
  labelPrimary,
  textMd,
  image,
  handleImage,
  uploading,
  placeholder,
  errorMessage,
  id
}) => {

  return (

    <div>
      <p
        className={`${labelPrimary && "text-primary"} ${
          textMd ? "font-medium" : "font-semibold"
        } mb-1`}
      >
        {label}
      </p>
      <label htmlFor= {id ? id :"uploader01"}>
        {image ? (
          <>
            {uploading ? (
              <div className="flex items-center justify-center w-64 h-24 rounded-md border-2 border-primary">
                <Spin />
              </div>
            ) : (
              <div>
                
                <img 
                  src={image}
                  alt=""
                  className="w-64 h-24 rounded-md object-cover border-2 border-primary cursor-pointer"
                />
                <input
                  type="file"
                  onChange={(e) => handleImage(e)}
                  id={id ? id : "uploader01"}
                  className="!hidden"
                  accept=".png, .jpg, .jpeg, .pdf"
                />
              </div>
            )}
          </>
        ) : (
          <>
            {uploading ? (
              <div className="flex justify-center">
                <Spin />
              </div>
            ) : (
              <div
                className={`!border !border-dashed !rounded h-24 md:!w-24 !w-full !bg-[#fafafa] ${
                  errorMessage ? "border-red-600" : "border-[#cccccc]"
                } flex justify-center items-center`}
              >
                {/* <div className="w-24 !bg-[#E4E4E4] rounded h-8 flex items-center justify-center">
                  <div className="flex items-center text-black text-xs">
                    
                    <p className="ml-1">Browse</p>
                  </div>
                </div> */}
                <div className="flex flex-col gap-2 justify-center items-center">
                <PlusOutlined className="" />
                <p>Upload</p>
                </div>
                <input
                  type="file"
                  onChange={(e) => handleImage(e)}
                  id={id ? id:"uploader01"}
                  className="!hidden"
                  accept=".png, .jpg, .jpeg, .pdf"
                />
              </div>
            )}
          </>
        )}
      </label>
      <p className="text-xs text-labelColor mt-2">{placeholder}</p>
      <p className="text-red mt-1 text-xs">{errorMessage}</p>
    </div>
  );
};

export default ThemeUploader;
