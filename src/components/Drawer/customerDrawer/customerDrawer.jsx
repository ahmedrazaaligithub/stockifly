import React, { useState } from "react";
import { Row, Col, Drawer, Form } from "antd";
import {
  SearchDropdown,
  ThemeButton,
  ThemeDropdown,
  ThemeInput,
  ThemeUploader,
  WarehouseDrawer,
} from "../../components";
import { BiChevronUp } from "react-icons/bi";
import { MdOutlineAddBox } from "react-icons/md";
import { IoAdd } from "react-icons/io5";
import ThemeTextArea from "../../themeTextArea/themeTextArea";
import { FaRegSave } from "react-icons/fa";

function CustomerDrawer({
  open,
  onClose,
  image,
  uploading,
  drawerUploading,
  drawerErrorMessage,
  onFinish,
  handleImage,
  form,
  setWarehouseData,
  warehouseData,
}) {
  const [balanceValue, setBalanceValue] = useState("");
  const [category, setCategory] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const wareHouse = [{ label: "Electronifly", value: "electronify" }];
  const status = [
    { label: "Enabeld", value: "enabeld" },
    { label: "Disabeld", value: "disabeld" },
  ];
  const balanceType = [
    { label: "Pay", value: "pay" },
    { label: "Recive", value: "recive" },
  ];
  const handleSearchCategory = (category) => {
    setCategory(category);
  };
  // Handler for search input value
  const handleBalanceValue = (value) => {
    setBalanceValue(value);
  };
  return (
    <Drawer width={600} title="Add New Customer" onClose={onClose} open={open}>
      <Form
        name="customerDrawer"
        onFinish={onFinish}
        form={form}
        className="mt-6"
      >
        <Row gutter={4}>
          <Col span={5}>
            <ThemeUploader
              image={image}
              handleImage={handleImage}
              label={"profile Image"}
              uploading={drawerUploading}
              errorMessage={drawerErrorMessage}
              id={"uploadCustomer"}
            />
          </Col>
          <Col span={15}>
            <Form.Item
              name={"warehouse"}
              rules={[{ required: true, message: "Please select warehouse" }]}
            >
              <ThemeDropdown
                label={"Warehouse"}
                name="warehouse"
                options={wareHouse}
                // style={{width:330}}
                className={"w-full"}
                placeholder={"select warehouse"}
              />
            </Form.Item>
          </Col>
          <Col>
            <div
              className="cursor-pointer border text-lg p-1 mt-6 ms-2 border-gray border-dashed"
              onClick={() => {
                setDrawerOpen(true);
              }}
            >
              <IoAdd />
            </div>
          </Col>
          <Col span={5}></Col>
          <Col span={9}>
            <Form.Item
              name={"name"}
              rules={[{ required: true, message: "Please enter name" }]}
            >
              <ThemeInput
                label={"Name"}
                placeholder={"Please Enter Name"}
                className={"py-1"}
              />
            </Form.Item>
          </Col>
          <Col span={9}>
            <Form.Item
              name={"Phone Number"}
              rules={[{ required: true, message: "Please enter phone number" }]}
            >
              <ThemeInput
                label={"phone"}
                placeholder={"Please Enter phone Number"}
                className={"py-1"}
              />
            </Form.Item>
          </Col>
          {/*  */}
          <Col span={5}></Col>
          <Col span={9}>
            <Form.Item
              name={"email"}
              rules={[{ required: true, message: "Please enter email" }]}
            >
              <ThemeInput label={"Email"} placeholder={"Please Enter Email"} />
            </Form.Item>
          </Col>
          <Col span={9}>
            <Form.Item
              name={"status"}
              rules={[{ required: true, message: "Please select status" }]}
            >
              <ThemeDropdown
                options={status}
                label={"Status"}
                placeholder={"please select status"}
                textMd={"text-md"}
                className={"mt-2"}
              />
            </Form.Item>
          </Col>
          <Col span={5}> </Col>
          <Col span={18}>
            <Form.Item
              name={"password"}
              rules={[{ required: true, message: "Please enter password" }]}
            >
              <ThemeInput
                type={"password"}
                suffix={""}
                label={"Password"}
                placeholder={"please Enter Password"}
              />
            </Form.Item>
          </Col>
          <Col span={5}></Col>
          <Col span={18}>
            <Form.Item
              name={"taxNumber"}
              rules={[{ required: true, message: "Please enter tax number" }]}
            >
              <ThemeInput
                label={"Tax Number"}
                placeholder={"Please Enter Tax Number"}
              />
            </Form.Item>
          </Col>
          <Col span={5}></Col>
          <Col span={18}>
            <Form.Item
              name={"openingBalance"}
              rules={[
                { required: false, message: "Please enter opening balance" },
              ]}
            >
              <SearchDropdown
                width={"331px"}
                value={"123"}
                placeholder={"0"}
                handleSearchValue={handleBalanceValue}
                handleSearchCategory={handleSearchCategory}
                options={balanceType}
                dropdownPlaceholder={"select"}
                type={"inputFirst"}
                label={"Opening Balance"}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name={"creditPeriod"}
              rules={[
                { required: true, message: "Please enter credit period" },
              ]}
            >
              <ThemeInput
                addonAfter={"Days(S)"}
                suffix={""}
                label={"Credet Period"}
                placeholder={"enter periods days"}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name={"creditLimit"}
              rules={[{ required: true, message: "Please enter credit limit" }]}
            >
              <ThemeInput
                addonBefore={"$"}
                suffix={""}
                label={"Credet Limit"}
                placeholder={"0"}
              />
            </Form.Item>
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
              name={"shippingAddress"}
              rules={[
                { required: true, message: "Please enter shipping address" },
              ]}
            >
              <ThemeTextArea
                label={"Shipping Address"}
                placeholder={"Please Enter Shipping Address"}
                style={{ height: "70px" }}
              />
            </Form.Item>
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
      <WarehouseDrawer open={drawerOpen} onClose={()=>setDrawerOpen(false)}/>
    </Drawer>
  );
}

export default CustomerDrawer;
