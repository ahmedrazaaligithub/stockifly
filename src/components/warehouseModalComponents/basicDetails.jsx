import { Col, Form, Row } from "antd";
import React from "react";
import { ThemeButton, ThemeInput, ThemeSwitch, ThemeUploader } from "../components";
import ThemeTextArea from "../themeTextArea/themeTextArea";
import { FaRegSave } from "react-icons/fa";
function BasicDetails({
  onClose,
  onFinish,
  handleShowEmail,
  showEmail,
  showPhone,
handleShowPhone,
  image,
  handleImage,
  uploading,
  errorMessage,
  darkimage, handledarkImage,darkuploading,darkerrorMessage,
  signatureimage, handlesignatureImage,signatureuploading,signatureerrorMessage,
}) {
  return (
    <div>
      <Form name="warehouseForm" onFinish={onFinish} className="mt-6">
        <Row gutter={12}>
          <Col span={12}>
            <Form.Item
              name={"name"}
              rules={[{ required: true, message: "Please enter name" }]}
              required
            >
              <ThemeInput
                label={"Name"}
                placeholder={"Please Enter Name"}
                className={"py-1"}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name={"slug"}
              rules={[{ required: true, message: "Please enter slug" }]}
              required={true}
            >
              <ThemeInput
                label={"Slug"}
                placeholder={"Please Enter Slug"}
                className={"py-1"}
              />
            </Form.Item>
          </Col>
          <Col span={16}>
            <Form.Item
              name={"email"}
              rules={[{ required: true, message: "Please enter email" }]}
              required={true}
            >
              <ThemeInput
                label={"Email"}
                placeholder={"Please Enter Email"}
                className={"py-1"}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <ThemeSwitch
              label={"Show email on invoice"}
              defaultChecked={showEmail}
              onChange={handleShowEmail}
            />
          </Col>
          <Col span={16}>
            <Form.Item
              name={"phone"}
              rules={[{ required: true, message: "Please enter phone" }]}
              required={true}
            >
              <ThemeInput
                label={"Phone"}
                placeholder={"Please Enter Phone"}
                className={"py-1"}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <ThemeSwitch
              label={"Show phone on invoice"}
              defaultChecked={showPhone}
              onChange={handleShowPhone}
            />
          </Col>
          <Col span={5}>
            <ThemeUploader
              image={image}
              handleImage={handleImage}
              label={"Logo"}
              uploading={uploading}
              errorMessage={errorMessage}
              id={"uploadLogo"}
            />
          </Col>
          <Col span={5}>
            <ThemeUploader
              image={darkimage}
              handleImage={handledarkImage}
              label={"Dark Logo"}
              uploading={darkuploading}
              errorMessage={darkerrorMessage}
              id={"uploaddarkLogo"}
            />
          </Col>
          <Col span={24}>
            <Form.Item
              name={"billingAddress"}
              rules={[{ required: true, message: "Please enter credit limit" }]}
            >
              <ThemeTextArea
                label={"Billing Address"}
                placeholder={"Please Enter Billing Adress"}
                style={{ height: "70px" }}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name={"bankDetails"}
              rules={[{ required: true, message: "Please enter bank details" }]}
            >
              <ThemeTextArea
                label={"Bank Details"}
                placeholder={"Please Enter Bank Details"}
                style={{ height: "70px" }}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name={"Terms&conditions"}
              rules={[{ required: true, message: "Please enter terms & conditions" }]}
            >
              <ThemeTextArea
              value={'1. Goods once sold will not be taken back or exchanged 2 All disputes are subject to [ENTER_YOUR_CITY_NAME] jurisdiction only'}
                label={"Terms & Conditions"}
                placeholder={"Please Enter Terms & Conditions"}
                
                style={{ height: "70px" }}
              />
            </Form.Item>
          </Col>
          <Col span={5}>
            <ThemeUploader
              image={signatureimage}
              handleImage={handlesignatureImage}
              label={"Dark Logo"}
              uploading={signatureuploading}
              errorMessage={signatureerrorMessage}
              id={"signature"}
            />
          </Col>
        </Row>
        <Form.Item className="flex justify-end gap-2 mt-8 mb-0 fixed bottom-0 right-4 w-[584px] py-2 border-t border-gray bg-white z-20 ">
          <ThemeButton htmlType={"submit"} className={" gap-2"}>
            <FaRegSave /> Submit{" "}
          </ThemeButton>

          <ThemeButton
            className={"border border-gray !text-black"}
            bgColor={"bg-white"}
            onClick={onClose}
          >
            {" "}
            Cancel{" "}
          </ThemeButton>
        </Form.Item>
      </Form>
    </div>
  );
}

export default BasicDetails;
