import React from "react";
import { Form, Modal,Spin } from "antd";
import { ThemeButton, ThemeUploader } from "../../components";
function ImportCustomers({
  isModalOpen,
  oncancel,
  onFinish,
  onHandleImage,
  image ,
  uploading,
  errorMessage 
}) {
  return (
    <Modal
      title="Import Customers"
      open={isModalOpen}
      onCancel={oncancel}
      footer={false}
    >
      <p className="text-blue mt-6">Click here to download csv file</p>
      <Form name="importCustomers" onFinish={onFinish}>
        <ThemeUploader
          label={"File"}
          image={image}
          handleImage={(e) => onHandleImage(e)}
          uploading={uploading}
          errorMessage={errorMessage}
        />

        <Form.Item className="flex justify-end gap-2 mt-8 mb-0 w-full"> 
          <ThemeButton 
          htmlType="submit"
          className={"!rounded-md "}
          disabled={uploading}
          >
          {uploading ? (
                <Spin className="" />
              ) : (
                <p className="!text-white  !font-medium ">Import</p>
              )}
          </ThemeButton>
          <ThemeButton
           className={"!rounded-md !border !border-gray"}
           textColor={'text-black'}
           disabled={uploading}
           bgColor={'bg-white'}
           onClick={oncancel}
           >
           {uploading ? (
                 <Spin className="" />
               ) : (
                 <p className="!text-black   ">Cancel</p>
               )}
           </ThemeButton>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ImportCustomers;
