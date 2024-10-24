import { Col, Form, Row } from 'antd'
import React from 'react'
import { ThemeButton, ThemeDropdown, ThemeSwitch } from '../components'
import { FaRegSave } from 'react-icons/fa';

function PosSetting({onFinish,  handleShowMPR,showMPR,handleShowDiscTax,showDiscTax,onClose}) {
   
  const status = [
    { label: "Ordered", value: "ordered" },
    { label: "Confirmed", value: "confirmed" },
    { label: "Processing", value: "processing" },
    { label: "Shipping", value: "shipping" },
    { label: "Delivered", value: "delivered" },
  ];
  const codes = [
    { label: "Barcode", value: "barcode" },
    { label: "QR code", value: "qr code" },
  ];
  return (
    <Form name='posForm' className='mt-6'onFinish={onFinish}>
        <Row >
          <Col span={24}>
          <Form.Item
              name={"posStatus"}
            >
             <ThemeDropdown
                label={"POS Default Status"}
                name="posStatus"
                options={status}
                className={"w-full"}
                placeholder={"select status"}
              />
            </Form.Item>
            </Col>
            <Col span={24}>
            <Form.Item
              name={"mrp"}
            >
              <ThemeSwitch label={"Show MRP On Invoice"} onChange={handleShowMPR} defaultChecked={showMPR} />
            </Form.Item>
            </Col>
            <Col span={24}>
            <Form.Item
              name={"disc&tax"}
              // rules={[{ required: true, message: "Please select discount & Tax" }]}
            >
              <ThemeSwitch label={"Show discount & Tax On Invoice"} onChange={handleShowDiscTax} defaultChecked={showDiscTax} />
            </Form.Item>
            </Col>
            <Col span={8}>
            <Form.Item
              name={"posStatus"}
            >
             <ThemeDropdown
                label={"Barcode Type"}
                name="barcodeType"
                options={codes}
                className={"w-full"}
                placeholder={"select barcode type"}
              />
            </Form.Item>
            </Col>
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
        </Row>
    </Form>
  )
}

export default PosSetting
