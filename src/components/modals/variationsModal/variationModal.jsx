import React, { useState } from "react";
import { Col, Form, Modal, Row } from "antd";
import {
  ThemeButton,
  ThemeDropdown,
  ThemeInput,
  ThemeUploader,
} from "../../components";
import { FaRegSave } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";

function VariationModal({ isModalOpen, oncancel, onFinish, uploading, form }) {
  const [showValue, setShowValue] = useState(false);
  return (
    <Modal
      title="Add New Variations"
      open={isModalOpen}
      onCancel={oncancel}
      footer={false}
    >
      {/* <p className="text-blue mt-6">Click here to download csv file</p> */}
      <Form
        form={form}
        name="addNewVariations"
        onFinish={onFinish}
        className="mt-6"
      >
        <Row>
          <Col span={24}>
            <Form.Item
              name="variation name"
              rules={[
                { required: true, message: "Please enter variation name!" },
              ]}
            >
              <ThemeInput
                label={"Variation Name"}
                type={"text"}
                placeholder={"Please enter variation name"}
                inputClassName={"h-10"}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <p className="text-xl pb-2 border-b border-gray">
              Variation Values
            </p>

            {showValue && (
              <Form.Item
                name="variation value"
                rules={[
                  { required: true, message: "Please enter variation value!" },
                ]}
              >
                <ThemeInput
                  type={"text"}
                  placeholder={"Please enter variation value"}
                  inputClassName={"h-10"}
                />
              </Form.Item>
            )}

            <div
              className="border border-gray border-dashed mt-2 cursor-pointer"
              onClick={() => setShowValue(!showValue)}
            >
              <p disabled className="flex items-center justify-center py-1">
                <IoIosAdd /> {showValue ? "hide New Value" : "Show New Value"}{" "}
              </p>
            </div>
          </Col>
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

export default VariationModal;
