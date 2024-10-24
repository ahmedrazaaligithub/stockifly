import React, { useState } from "react";
import { Row, Col, Drawer, Form } from "antd";
import {
    AddBrand,
    AddCategory,
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

function ProductDrawer({
  open,
  onClose,
  image,
  uploading,
  errorMessage,
  onFinish,
  handleImage,
  form,
}) {
  const [balanceValue, setBalanceValue] = useState("");
  const [category, setCategory] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [categoryModal,setCategoryModal] = useState(false)
  const [brandModal,setBrandModal] = useState(false)
  const wareHouse = [{ label: "Electronifly", value: "electronify" }];
  
  const productType = [
    { label: "singleTypeProduct", value: "Single Type Product" },
    { label: "variantTypeProduct", value: "Variant Type Product" },
    { label: "serviceTypeProduct", value: "Service Type Product" },
  ];
  const categories = [
    {
      label: <span>Electronics</span>,
      title: "Electronics",
      options: [
        {
          label: <span>Audio</span>,
          value: "audio",
          options: [
            { label: <span>Headphones</span>, value: "headphones" },
            { label: <span>Soundbars</span>, value: "soundbars" }
          ]
        },
        { label: <span>Mobiles</span>, value: "mobiles" },
        { label: <span>Televisions</span>, value: "televisions" },
        {
          label: <span>Computers</span>,
          value: "computers",
          options: [
            { label: <span>Laptops</span>, value: "laptops" },
            { label: <span>Desktops</span>, value: "desktops" }
          ]
        }
      ]
    }
  ];
  const brands = [
    { value: "headphone", label: "HeadPhone" },
    { value: "mobiles", label: "Mobiles" },
    { value: "laptops", label: "Laptops" },
  ];
  const barcodeTypes = [
    { label: "CODE128", value: "code128" },
    { label: "CODE39", value: "code39" },
    { label: "EAN8", value: "ean8" },
    { label: "EAN13", value: "ean13" },
    { label: "UPC", value: "upc" },
  ];
  const taxRates = [
    { label: "Gst (5%)", value: "gst5" },
    { label: "Gst (3%)", value: "gst3" },
    { label: "Gst (12%)", value: "gst12" },
    { label: "Gst (18%)", value: "gst18" },
    { label: "vat (10%)", value: "vat10" },
  ];
const purchasePriceTax=[{label:"withTax",value:"With Tax"},{label:"withOutTax",value:"Without Tax"}]    
  
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
    <Drawer width={700} title="Add New Product" onClose={onClose} open={open}>
      <Form
        name="productDrawer"
        onFinish={onFinish}
        form={form}
        className="mt-6"
      >
        <Row gutter={12}>
        <Col span={24}>
            <Form.Item
              name={"productType"}
              rules={[{ required: true, message: "Please select product type" }]}
            >
              <ThemeDropdown
                label={"Product Type"}
                name="productType"
                options={productType}
                // style={{width:330}}
                className={"w-full"}
                placeholder={"select product type"}
              />
            </Form.Item>
          </Col>
          <Col span={5}>
            <ThemeUploader
              image={image}
              handleImage={handleImage}
              label={"profile Image"}
              uploading={uploading}
              errorMessage={errorMessage}
              id={"uploadProduct"}
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
              name={"slug"}
              rules={[{ required: true, message: "Please enter slug" }]}
            >
              <ThemeInput
                label={"slug"}
                placeholder={"Please Enter slug"}
                className={"py-1"}
              />
            </Form.Item>
          </Col>
          {/*  */}
          <Col span={5}></Col>
          <Col span={7}>
            <Form.Item
              name={"category"}
              rules={[{ required: true, message: "Please enter category" }]}
            >
              <ThemeDropdown options={categories} label={"Category"} placeholder={"Please Select Category"} />
            </Form.Item>
          </Col>
          <Col>
            <div
              className="cursor-pointer border text-lg p-1 mt-6 ms-2 border-gray border-dashed"
              onClick={() => {
                setCategoryModal(true);
              }}
            >
              <IoAdd />
            </div>
          </Col>
          <Col span={5}></Col>
          <Col span={7}>
            <Form.Item
              name={"brand"}
              rules={[{ required: true, message: "Please enter brand" }]}
            >
              <ThemeDropdown options={brands} label={"Brand"} placeholder={"Please Select brand"} />
            </Form.Item>
          </Col>
          <Col>
            <div
              className="cursor-pointer border text-lg p-1 mt-6 ms-2 border-gray border-dashed"
              onClick={() => {
                setBrandModal(true);
              }}
            >
              <IoAdd />
            </div>
          </Col> 
          <Col span={5}></Col>
          {/* <Col span={7}>
            <Form.Item
              name={"unit"}
              rules={[{ required: true, message: "Please enter unit" }]}
            >
              <ThemeDropdown options={un} label={"Unit"} placeholder={"Please Select Unit"} />
            </Form.Item>
          </Col>
          <Col>
            <div
              className="cursor-pointer border text-lg p-1 mt-6 ms-2 border-gray border-dashed"
              onClick={() => {
                setBrandModal(true);
              }}
            >
              <IoAdd />
            </div>
          </Col>    */}

          {/* <Col span={9}>
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
              rules={[{ required: true, message: "Please enter billing adress" }]}
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
          </Col> */}
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
        <AddCategory isModalOpen={categoryModal} oncancel={()=>setCategoryModal(false)}/>
      <AddBrand isModalOpen={brandModal} oncancel={()=>setBrandModal(false)}/>      
    </Drawer>
  );
}

export default ProductDrawer;
