import React, { useState } from "react";
import {
  AddBrand,
  ImportBrand,
  ImportCustomers,
  Layout,
  SearchDropdown,
  ThemeButton,
  ThemeDropdown,
  ThemeTable,
  VariationModal,
} from "../../../components/components";
import { IoIosAdd } from "react-icons/io";
import { IoCloudDownloadOutline } from "react-icons/io5";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  UserOutlined,
} from "@ant-design/icons";

const mockData = [
  {
    key: "1",
    name: "John Doe",
    value: [1, 2],
    _id: "book_001",
  },
  {
    key: "2",
    name: "Jane Smith",
    value: [1, 2],
    _id: "book_002",
  },
  {
    key: "3",
    name: "David Williams",
    value: [1, 2],
    _id: "book_003",
  },
  {
    key: "4",
    name: "Emma Johnson",
    value: [1, 2],
    _id: "book_004",
  },
  {
    key: "5",
    name: "Michael Brown",
    value: [1, 2],
    _id: "book_005",
  },
  {
    key: "6",
    name: "Olivia Taylor",
    value: [1, 2],
    _id: "book_006",
  },
  {
    key: "7",
    name: "Sophia Martinez",
    value: [1, 2],
    _id: "book_007",
  },
  {
    key: "8",
    name: "Liam Anderson",
    value: [1, 2],
    _id: "book_008",
  },
  {
    key: "9",
    name: "Noah Davis",
    value: [1, 2],
    _id: "book_009",
  },
  {
    key: "10",
    name: "Isabella Garcia",
    value: [1, 2],
    _id: "book_010",
  },
];

function Variations() {
  const [dropdownValue, setDropdownValue] = useState("");
  const [searchValue, setSearchValue] = useState(""); // Search input value
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploading,setUploading] = useState(false)
  const searchDropdown = [{ value: "name", label: "Name" }];
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",

      render: (text) => (
        <div className="text-blue">
          {" "}
          <span className="p-2 ">
            <UserOutlined />
          </span>{" "}
          {text}
        </div>
      ),
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "value",

      render: (text) => (
        <div className="">
          {text &&
            text.map((data, index) => (
              <ul key={index}>
                <li className="flex items-center">
                  {" "}
                  <div className="mx-2 !h-1 w-1 rounded-full bg-black"></div>{" "}
                  {data}
                </li>
              </ul>
            ))}
        </div>
      ),
    },
    {
      title: "In Action",
      dataIndex: "_id",
      key: "_id",
      width: "30%",
      render: (text, data) => (
        <span className="flex justify-start">
          <span
            className="mx-2 cursor-pointer text-base px-2 text-white bg-blue rounded py-1"
            // onClick={() => navigate(`/book-form/${data?._id}`)}
          >
            <EditOutlined />
          </span>
          <span
            className="mx-2 cursor-pointer text-base px-2 text-white bg-blue rounded py-1"
            // onClick={() => onDelete(data?._id)}
          >
            <DeleteOutlined className="hover:text-red" />
          </span>
        </span>
      ),
    },
  ];
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleSearchCategory = (category) => {
    setSearchCategory(category);
  };
  // Handler for search input value
  const handleSearchValue = (value) => {
    setSearchValue(value);
  };
  const handleVariantModal = (e) => {
    setUploading(true)
    console.log(e);
    setUploading(false)
  };
  return (
    <Layout selected={11}>
      <div className="bg-white py-2 px-4">
        <div className="flex gap-4 items-center justify-between w-full">
          <div className="flex gap-2">
            <ThemeButton onClick={showModal}>
              <IoIosAdd className="inline-block text-lg" /> Add New Variations
            </ThemeButton>
          </div>

          <div className="flex items-center gap-2">
            <SearchDropdown
              options={searchDropdown}
              defaultValue="name" // Default search category
              placeholder="Search..."
              handleSearchValue={handleSearchValue}
              handleSearchCategory={handleSearchCategory}
            />
          </div>
        </div>
      </div>
      <ThemeTable
        columns={columns}
        data={mockData} 
        loader={false}
        pagination={{ total: mockData.length }}
        direction="ltr"
        scroll={{ x: 1000 }}
      />
      <VariationModal isModalOpen={isModalOpen}
      onFinish={handleVariantModal}
      oncancel={()=>{setIsModalOpen(false)}}
      uploading={uploading}
      />
    </Layout>
  );
}

export default Variations;
