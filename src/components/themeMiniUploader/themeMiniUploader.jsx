import React from "react";
import { Upload, Spin } from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
const { Dragger } = Upload;

const ThemeMiniUploader = ({
  type,
  label,
  labelPrimary,
  textMd,
  image,
  handleImage,
  uploading,
  placeholder,
  errorMessage,
}) => {

  return (

    <div className="mt-8">
      <p
        className={`${labelPrimary && "text-primary"} mb-1`}
      >
        {label}
      </p>
      <label htmlFor="uploader">
        {image ? (
          <>
            {uploading ? (
              <div className="flex items-center justify-center w-64 h-24 rounded-md border-2 border-black">
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
                  id={"uploader"}
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
              <>
                <div className="w-24  shadow-md rounded h-8 flex items-center justify-center">
                  <div className="flex items-center text-black text-xs cursor-pointer">
                    <UploadOutlined className="text-base" />
                    <p className="ml-1">upload</p>
                  </div>
                </div>
                <input
                  type="file"
                  onChange={(e) => handleImage(e)}
                  id={"uploader"}
                  className="!hidden"
                  accept=".png, .jpg, .jpeg, .pdf"
                />
              </>
              
            )}
          </>
        )}
      </label>
      <p className="text-xs text-labelColor mt-2">{placeholder}</p>
      <p className="text-red mt-1 text-xs">{errorMessage}</p>
    </div>
  );
};

export default ThemeMiniUploader;
