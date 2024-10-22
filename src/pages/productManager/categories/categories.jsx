import React, { useState } from "react";
import {
  AddCategory,
  ImportBrand,
  Layout,
  SearchDropdown,
  ThemeButton,
  ThemeDropdown,
  ThemeTable,
} from "../../../components/components";
import { IoIosAdd } from "react-icons/io";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { DeleteOutlined, EditOutlined, UserOutlined } from "@ant-design/icons";
import { Form } from "antd";

const mockData = [
  {
    key: "1",
    name: "John Doe",
    image:
      "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    _id: "book_001",
  },
  {
    key: "2",
    name: "Jane Smith",
    image:
      "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    _id: "book_002",
  },
  {
    key: "3",
    name: "David Williams",
    image:
      "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    _id: "book_003",
  },
  {
    key: "4",
    name: "Emma Johnson",
    image:
      "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    _id: "book_004",
  },
  {
    key: "5",
    name: "Michael Brown",
    image:
      "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    _id: "book_005",
  },
  {
    key: "6",
    name: "Olivia Taylor",
    image:
      "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    _id: "book_006",
  },
  {
    key: "7",
    name: "Sophia Martinez",
    image:
      "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    _id: "book_007",
  },
  {
    key: "8",
    name: "Liam Anderson",
    image:
      "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    _id: "book_008",
  },
  {
    key: "9",
    name: "Noah Davis",
    image:
      "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    _id: "book_009",
  },
  {
    key: "10",
    name: "Isabella Garcia",
    image:
      "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D",
    _id: "book_010",
  },
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


function Categories() {
  const [form] = Form.useForm();
  const [dropdownValue, setDropdownValue] = useState("");
  const [searchValue, setSearchValue] = useState(""); // Search input value
  const [searchCategory, setSearchCategory] = useState("price");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [image, setImage] = useState("");
  const [imageFile, setImageFile] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [CategoryImage, setCategoryImage] = useState("");
  const [CategoryImageFile, setCategoryImageFile] = useState("");
  const [CategoryErrorMessage, setCategoryErrorMessage] = useState("");
  const [CategoryUploading, setCategoryUploading] = useState(false);
  const [category, setCategory] = useState("");
  const allowedFormats = ["image/jpeg", "image/png", "image/jpg"];
  // Example options for search dropdown and filter dropdown
  const dropdownOption = [
    { value: "enabled", label: "Enabled" },
    { value: "disabled", label: "Disabled" },
  ];

  const searchDropdown = [
    { value: "name", label: "Name" },
    { value: "email", label: "Email" },
    { value: "price", label: "Price" },
  ];
  // Table columns configuration
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: true,
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
      title: "Category Logo",
      dataIndex: "image",
      key: "image",
      sorter: true,
      render: (text) => (
        <div className="">
          {text && (
            <img
              src={text}
              alt="icon"
              className="w-10 h-10  border border-primary object-cover"
            />
          )}
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
  const showCategoryModal = () => {
    setIsCategoryModalOpen(true);
  };
  // Handler for dropdown selection in the search (Name, Email, Price)
  const handleSearchCategory = (category) => {
    setSearchCategory(category);
  };

  // Handler for search input value
  const handleSearchValue = (value) => {
    setSearchValue(value);
  };

  const handleFilterValue = (value) => {
    setDropdownValue(value);
  };
  const onHandleImage = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      setUploading(true);
      if (allowedFormats.includes(selectedImage.type)) {
        setImage(URL.createObjectURL(selectedImage));
        setImageFile(selectedImage);
        setErrorMessage("");
        setUploading(false);
      } else {
        setImage("");
        setImageFile("");
        setErrorMessage(
          "Invalid file format. Please select a JPEG, PNG or JPG image."
        );
        setUploading(false);
      }
    }
  };
  const onHandleCategoryImage = (e) => {
    try {
      console.log(e);
      const selectedImage = e.target.files[0];
      if (selectedImage) {
        setCategoryUploading(true);
        if (allowedFormats.includes(selectedImage.type)) {
          setCategoryImage(URL.createObjectURL(selectedImage));
          setCategoryImageFile(selectedImage);
          setCategoryErrorMessage("");
          setCategoryUploading(false);
        } else {
          setCategoryImage("");
          setCategoryImageFile("");
          setCategoryErrorMessage(
            "Invalid file format. Please select a JPEG, PNG or JPG image."
          );
          setCategoryUploading(false);
        }
      }
    } catch (error) {
      console.log(e);
    }
  };
const handleCategoryValue=(e)=>{
  console.log(e);
  setCategory(e)
}
  const handleImportModal = (e) => {
    console.log(e);
    setIsModalOpen(false);
  };
  const handleCategoryModal = (e) => {
    console.log({e,CategoryImage,category});
    setIsCategoryModalOpen(false);
    setCategoryImage("")
    setCategory("")
    form.resetFields()
  };
  
  return (
    <Layout selected={7}>
      <div className="bg-white py-2 px-4">
        <div className="flex gap-4 items-center justify-between w-full">
          <div className="flex gap-2">
            <ThemeButton onClick={showCategoryModal}>
              <IoIosAdd className="inline-block text-lg" /> Add New Category
            </ThemeButton>
            <ThemeButton onClick={showModal}>
              <IoCloudDownloadOutline className="inline-block text-lg" />{" "}
              Imports Categories
            </ThemeButton>
          </div>
          {/* <div className="flex items-center gap-2">
            <SearchDropdown
              options={searchDropdown}
              defaultValue="price" // Default search category
              placeholder="Search..."
              handleSearchValue={handleSearchValue}
              handleSearchCategory={handleSearchCategory}
            />
            <ThemeDropdown
              defaultValue={"select"}
              placeholder={"Select Status"}
              onChange={handleFilterValue}
              value={dropdownValue || "Disabled"}
              options={dropdownOption}
            />
          </div> */}
        </div>
      </div>
      <ThemeTable
        columns={columns}
        data={mockData} // Pass the mock data here
        loader={false}
        pagination={{ total: mockData.length }}
        direction="ltr"
        scroll={{ x: 1000 }}
      />
      <ImportBrand
        image={image}
        uploading={uploading}
        errorMessage={errorMessage}
        onHandleImage={onHandleImage}
        isModalOpen={isModalOpen}
        oncancel={() => setIsModalOpen(false)}
        onFinish={handleImportModal}
        title={"Import Categories"}
        name="importCategory"
      />
      <AddCategory
        image={CategoryImage}
        uploading={CategoryUploading}
        errorMessage={CategoryErrorMessage}
        onHandleImage={onHandleCategoryImage}
        isModalOpen={isCategoryModalOpen}
        oncancel={() => setIsCategoryModalOpen(false)}
        onFinish={handleCategoryModal}
        options={categories}
        handleCategoryValue={handleCategoryValue}
        form={form}
      />
    </Layout>
  );
}

export default Categories;
