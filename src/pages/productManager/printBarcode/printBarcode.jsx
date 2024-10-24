import React from 'react'
import {Layout, ThemeInput,ThemeTable} from "../../../components/components";
import { MdSearch } from 'react-icons/md';
function PrintBarcode() {
  const mockData = [];
  const columns = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
      render: (text) => (
        <div className="text-blue">{text}</div>
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => (
        <div className="">{text}</div>
      ),
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      render: (text) => (
        <div className="">{text}</div>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text) => (
        <div className="">{text}</div>
      ),
    },
  ];
  return (
   <Layout selected={8}>
    <div className='w-full bg-white rounded px-3 py-5'>
      <ThemeInput placeholder={"Search Product Name / Item Code / Scan barcode "} className={'mb-4'} suffix={<MdSearch/>}/>
      <ThemeTable data={mockData} columns={columns}/>
    </div>
   </Layout>
  )
}

export default PrintBarcode
