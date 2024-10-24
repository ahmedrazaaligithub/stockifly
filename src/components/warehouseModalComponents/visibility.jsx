import { Form } from 'antd'
import React, { useState } from 'react'
import { ThemeButton, ThemeRadio } from '../components'
import { FaRegSave } from 'react-icons/fa';

function Visibility({onFinish,onClose}) {
  const [firstRadio,setFirstRadio] = useState('viewAllCustomers');
  const [secondRadio,setSecondRadio] = useState('viewAllSuppliers');
  const [thirdRadio,setThirdRadio] = useState("viewAllProducts");
  const optionsOne = [
    {label:"View All Customers",value:"viewAllCustomers"},
    {label:"View Only Warehouse Customers",value:"viewOnlyWarehouseCustomers"},
  ]
  const optionsTwo = [
    {label:"View All Suppliers",value:"viewAllSuppliers"},
    {label:"View Only Warehouse Suppliers",value:"viewOnlyWarehouseSuppliers"},
  ]
  const optionsThree = [
    {label:"View All Products",value:"viewAllProducts"},
    {label:"View Only Warehouse Products",value:"viewOnlyWarehouseProducts"},
  ]
  const onFirstRadioChange= (e)=>{
    setFirstRadio(e.target.value)
  }
  const onSecondRadioChange = (e)=>{
setSecondRadio(e.target.value)
  };
  const onThirdRadioChange = (e)=>{
    setThirdRadio(e.target.value)
      };
  return (
    <Form name='visibilityForm' className='mt-6'onFinish={onFinish}
    initialValues={{
      customersVisibility: firstRadio,  
      suppliersVisibility: secondRadio,
      productsVisibility: thirdRadio
    }}>
       <Form.Item
              name={"customersVisibility"}
              rules={[{ required: true, message: "Please select customers visibility" }]}
              required
            >
              <ThemeRadio
                label={"Customers Visibility"}
                className={"py-1"}
                radios={optionsOne}
                value={firstRadio}
                onChange={onFirstRadioChange}
                direction={'vertical'}
              />
            </Form.Item>

            <Form.Item
              name={"suppliersVisibility"}
              rules={[{ required: true, message: "Please select suppliers  visibility" }]}
              required
            >
              <ThemeRadio 
                label={"Suppliers Visibility"}
                className={"py-1"}
                radios={optionsTwo}
                value={secondRadio}
                onChange={onSecondRadioChange}
                direction={'vertical'}
              />


            </Form.Item>
            <Form.Item
              name={"productsVisibility"}
              rules={[{ required: true, message: "Please select products visibility" }]}
              required
            >
              <ThemeRadio
                label={"Products Visibility"}
                className={"py-1"}
                radios={optionsThree}
                value={thirdRadio}
                onChange={onThirdRadioChange}
                direction={'vertical'}
              />


            </Form.Item>
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
  )
}

export default Visibility
