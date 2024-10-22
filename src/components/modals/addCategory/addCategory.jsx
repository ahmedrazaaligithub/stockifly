import React from "react";
import { Col, Form, Modal, Row } from "antd";
import {
  ThemeButton,
  ThemeDropdown,
  ThemeInput,
  ThemeUploader,
} from "../../components";
import { FaRegSave } from "react-icons/fa";

function AddCategory({
  isModalOpen,
  oncancel,
  onFinish,
  onHandleImage,
  image,
  uploading,
  errorMessage,
  options,
  handleCategoryValue,
  form
}) {
  return (
    <Modal
    
      title="Add New Catgory"
      open={isModalOpen}
      onCancel={oncancel}
      footer={false}
    >
      {/* <p className="text-blue mt-6">Click here to download csv file</p> */}
      <Form form={form} name="addNewCategory" onFinish={onFinish} className="mt-6">
        <Row>
          <Col span={24}>
            <ThemeDropdown
              label={"Select Category"}
              options={options}
              onChange={handleCategoryValue}
            />
          </Col>
          <Col span={24}>
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Please enter your name!" }]}
            >
              <ThemeInput
                label={"Name"}
                type={"text"}
                placeholder={"Please enter name"}
                inputClassName={"h-10"}
              />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              name="slug  "
              rules={[{ required: true, message: "Please enter slug!" }]}
            >
              <ThemeInput
                label={"Slug"}
                type={"text"}
                placeholder={"Please enter slug"}
                inputClassName={"h-10"}
              />
            </Form.Item>
          </Col>
          <ThemeUploader
            label={"File"}
            image={image}
            handleImage={(e) => onHandleImage(e)}
            uploading={uploading}
            errorMessage={errorMessage}
          />
        </Row>
        <Form.Item className="flex justify-end gap-2 mt-8 mb-0 w-full">
          <ThemeButton
            htmlType="submit"
            className={"!rounded !text-white  hover:border  !border-blue "}
            disabled={uploading}
          >
            {uploading ? (
              <Spin className="" />
            ) : (
              <p className=" !font-medium flex items-center gap-2">
                <FaRegSave className="inline-block" /> create
              </p>
            )}
          </ThemeButton>
          <ThemeButton
            className={"!rounded-md !border !border-gray"}
            textColor={"text-black"}
            disabled={uploading}
            bgColor={"bg-white"}
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

export default AddCategory;
