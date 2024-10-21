import React, { useState } from "react";
import {
  ImportSuppliers,
  Layout,
  SearchDropdown,
  ThemeButton,
  ThemeDropdown,
  ThemeTable,
} from "../../components/components";
import { IoIosAdd } from "react-icons/io";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { DeleteOutlined, EditOutlined, EyeOutlined, UserOutlined } from "@ant-design/icons";

const mockData = [
  {
    key: "1",
    name: "John Doe",
    email: "johndoe@example.com",
    book_name: "The Art of Programming",
    created_at: "2024-10-01",
    balance: "$150.00",
    status: "Enabeld",
    _id: "book_001",
  },
  {
    key: "2",
    name: "Jane Smith",
    email: "janesmith@example.com",
    book_name: "Learning React",
    created_at: "2024-09-15",
    balance: "$200.00",
    status: "Disabeld",
    _id: "book_002",
  },
  {
    key: "3",
    name: "David Williams",
    email: "davidwilliams@example.com",
    book_name: "Mastering JavaScript",
    created_at: "2024-10-10",
    balance: "$75.00",
    status: "Enabeld",
    _id: "book_003",
  },
  {
    key: "4",
    name: "Emma Johnson",
    email: "emmajohnson@example.com",
    book_name: "CSS Design Principles",
    created_at: "2024-09-25",
    balance: "$120.00",
    status: "Disabeld",
    _id: "book_004",
  },
  {
    key: "5",
    name: "Michael Brown",
    email: "michaelbrown@example.com",
    book_name: "Next.js for Beginners",
    created_at: "2024-08-30",
    balance: "$90.00",
    status: "Enabeld",
    _id: "book_005",
  },
  {
    key: "6",
    name: "Olivia Taylor",
    email: "oliviataylor@example.com",
    book_name: "Node.js Deep Dive",
    created_at: "2024-07-14",
    balance: "$220.00",
    status: "Disabeld",
    _id: "book_006",
  },
  {
    key: "7",
    name: "Sophia Martinez",
    email: "sophiamartinez@example.com",
    book_name: "Python for Data Science",
    created_at: "2024-06-20",
    balance: "$300.00",
    status: "Enabeld",
    _id: "book_007",
  },
  {
    key: "8",
    name: "Liam Anderson",
    email: "liamanderson@example.com",
    book_name: "Effective TypeScript",
    created_at: "2024-08-05",
    balance: "$100.00",
    status: "Disabeld",
    _id: "book_008",
  },
  {
    key: "9",
    name: "Noah Davis",
    email: "noahdavis@example.com",
    book_name: "Full-Stack Development",
    created_at: "2024-09-30",
    balance: "$85.00",
    status: "Enabeld",
    _id: "book_009",
  },
  {
    key: "10",
    name: "Isabella Garcia",
    email: "isabellagarcia@example.com",
    book_name: "React Native in Action",
    created_at: "2024-07-25",
    balance: "$140.00",
    status: "Disabeld",
    _id: "book_010",
  },
];
const Supplier = () => {

  const [dropdownValue, setDropdownValue] = useState("");
  const [searchValue, setSearchValue] = useState(""); // Search input value
  const [searchCategory, setSearchCategory] = useState("price");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [image, setImage] = useState('')
  const [imageFile, setImageFile] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [uploading, setUploading] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const allowedFormats = ['image/jpeg', 'image/png', 'image/jpg']
  const showModal = () => {
    setIsModalOpen(true);
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
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: true,
      render: (text) => <p className="">{text}</p>,
    },
    {
      title: "Book Name",
      dataIndex: "name",
      key: "name",
      sorter: true,
      render: (text) => <p className="">{text}</p>,
    },
    {
      title: "Created At",
      dataIndex: "created_at",
      key: "created_at",
      sorter: true,
      render: (text) => <p className="">{text}</p>,
    },
    {
      title: "Balance",
      dataIndex: "balance",
      key: "balance",
      sorter: true,
      render: (text) => <p className="text-blue">{text}</p>,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => (
        <p
          className={`text-sm border text-center rounded ${
            text === "Enabeld"
              ? "text-green-500 bg-green-100 border-green-500"
              : "text-red-500 bg-red-100 border-red-500"
          }`}
        >
          {text}
        </p>
      ),
    },
    {
      title: "In Action",
      dataIndex: "_id",
      key: "_id",
      width: "10%",
      render: (text, data) => (
        <span className="flex justify-start">
          <span
            className="mx-2 cursor-pointer text-base px-2 text-white bg-blue rounded py-1"
            // onClick={() => navigate(`/book-form/${data?._id}`)}
          >
            <EyeOutlined />
          </span>
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
  const handleImportModal=(e)=>{
    console.log(e);
    
  }
  const onHandleImage = (e)=>{
    const selectedImage = e.target.files[0]
    if (selectedImage) {
      setUploading(true)
      if (allowedFormats.includes(selectedImage.type)) {
        setImage(URL.createObjectURL(selectedImage))
        setImageFile(selectedImage)
        setErrorMessage('')
        setUploading(false)
      } else {
        setImage('')
        setImageFile('')
        setErrorMessage(
          'Invalid file format. Please select a JPEG, PNG or JPG image.'
        )
        setUploading(false)
      }
    }

  }
  return (
    <Layout selected={3}>
      <div className="bg-white py-2 px-4">
        <div className="flex gap-4 items-center justify-between w-full">
          <div className="flex gap-2">
            <ThemeButton>
              <IoIosAdd className="inline-block text-lg" /> Add New Suppliers
            </ThemeButton>
            <ThemeButton onClick={showModal}>
              <IoCloudDownloadOutline className="inline-block text-lg" />{" "}
              Imports Supliers
            </ThemeButton>
          </div>
          <div className="flex items-center gap-2">
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
          </div>
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
      <ImportSuppliers image={image} uploading={uploading} errorMessage={errorMessage} onHandleImage={onHandleImage} isModalOpen={isModalOpen} oncancel={()=>setIsModalOpen(false)} onFinish={handleImportModal}/>
    </Layout>
  )
}

export default Supplier
