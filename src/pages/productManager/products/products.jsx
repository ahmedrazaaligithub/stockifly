import React, { useEffect, useState } from "react";
// import Layout from "../../../components/components";
import {
  Addproduct,
  Importproduct,
  ImportCustomers,
  Layout,
  ProductDrawer,
  SearchDropdown,
  ThemeButton,
  ThemeDropdown,
  ThemeInput,
  ThemeTable,
} from "../../../components/components";
import { IoIosAdd } from "react-icons/io";
import { IoCloudDownloadOutline } from "react-icons/io5";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { TbCategoryPlus } from "react-icons/tb";

const mockData = [
  {
    key: "1",
    product: "Smartphone A1",
    productType: "Electronics",
    category: "Mobile Phones",
    product: "productX",
    salesPrice: 299.99,
    purchasePrice: 199.99,
    currentStock: 50,
    type: "single", // Single product
  },
  {
    key: "2",
    product: "Laptop B2",
    productType: "Electronics",
    category: "Laptops",
    product: "productY",
    salesPrice: 899.99,
    purchasePrice: 749.99,
    currentStock: 30,
    type: "variant", // Variant product (e.g., different specs/versions)
  },
  {
    key: "3",
    product: "Headphones C3",
    productType: "Accessories",
    category: "Audio",
    product: "productZ",
    salesPrice: 59.99,
    purchasePrice: 39.99,
    currentStock: 100,
    type: "single", // Single product
  },
  {
    key: "4",
    product: "Tablet D4",
    productType: "Electronics",
    category: "Tablets",
    product: "productA",
    salesPrice: 499.99,
    purchasePrice: 399.99,
    currentStock: 25,
    type: "variant", // Variant product (e.g., different sizes, storage options)
  },
  {
    key: "5",
    product: "Smartwatch E5",
    productType: "Wearables",
    category: "Smartwatches",
    product: "productB",
    salesPrice: 149.99,
    purchasePrice: 99.99,
    currentStock: 75,
    type: "single", // Single product
  },
  {
    key: "6",
    product: "Wireless Charger F6",
    productType: "Accessories",
    category: "Chargers",
    product: "productC",
    salesPrice: 29.99,
    purchasePrice: 19.99,
    currentStock: 150,
    type: "single", // Single product
  },
  {
    key: "7",
    product: "Gaming Console G7",
    productType: "Electronics",
    category: "Gaming",
    product: "productD",
    salesPrice: 499.99,
    purchasePrice: 450.0,
    currentStock: 20,
    type: "variant", // Variant product (e.g., different editions or bundles)
  },
  {
    key: "8",
    product: "Bluetooth Speaker H8",
    productType: "Audio",
    category: "Speakers",
    product: "productE",
    salesPrice: 79.99,
    purchasePrice: 49.99,
    currentStock: 60,
    type: "single", // Single product
  },
  {
    key: "9",
    product: "4K TV I9",
    productType: "Electronics",
    category: "Television",
    product: "productF",
    salesPrice: 799.99,
    purchasePrice: 699.99,
    currentStock: 15,
    type: "variant", // Variant product (e.g., different screen sizes or features)
  },
  {
    key: "10",
    product: "Camera J10",
    productType: "Photography",
    category: "Cameras",
    product: "productG",
    salesPrice: 599.99,
    purchasePrice: 499.99,
    currentStock: 25,
    type: "single", // Single product
  },
];

function Products() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isproductModalOpen, setIsproductModalOpen] = useState(false);
  const [productValue, setProductValue] = useState("Sony");
  const [categoryValue, setCategoryValue] = useState("Headphone");
  const [image, setImage] = useState("");
  const [imageFile, setImageFile] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [uploading, setUploading] = useState(false);
  // const [submitting, setSubmitting] = useState(false);
  // const [productImage, setProductImage] = useState("");
  // const [productImageFile, setProductImageFile] = useState("");
  // const [productErrorMessage, setProductErrorMessage] = useState("");
  // const [productUploading, setProductUploading] = useState(false);
  // const [productSubmitting, setProductSubmitting] = useState(false);
  const [drawerImage, setdrawerImage] = useState("");
  const [drawerImageFile, setdrawerImageFile] = useState("");
  const [drawerErrorMessage, setdrawerErrorMessage] = useState("");
  const [drawerUploading, setdrawerUploading] = useState(false);
  const [drawerSubmitting, setdrawerSubmitting] = useState(false);
  const allowedFormats = ["image/jpeg", "image/png", "image/jpg"];
  const [TabelType, setTabelType] = useState("single");
  const [tabelData, setTabelData] = useState(mockData);
  useEffect(() => {
    const updateTabel = mockData.filter((data) => data.type === "single");
    setTabelData(updateTabel);
  }, []);
  useEffect(() => {
    const updateTabel = mockData.filter((data) => data.type === TabelType);
    setTabelData(updateTabel);
  }, [TabelType]);

  const columns = [
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
      sorter: true,
      render: (text) => <div className="text-blue">{text}</div>,
    },
    {
      title: "Product Type",
      dataIndex: "productType",
      key: "productType",
      sorter: true,
      render: (text) => <div className="">{text}</div>,
    },
    {
      title: "product",
      dataIndex: "product",
      key: "product",
      sorter: true,
      render: (text) => <div className="">{text}</div>,
    },
    {
      title: "Sales price",
      dataIndex: "salesPrice",
      key: "salesPrice",
      sorter: true,
      render: (text) => <div className="">{text}</div>,
    },
    {
      title: "Purchase Price",
      dataIndex: "purchasePrice",
      key: "purchasePrice",
      sorter: true,
      render: (text) => <div className="">{text}</div>,
    },
    {
      title: "Current Stock",
      dataIndex: "currentStock",
      key: "currentStock",
      sorter: true,
      render: (text) => <div className="">{text}</div>,
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
  const showproductModal = () => {
    setIsproductModalOpen(true);
  };
  const productDropdown = [
    { value: "sony", label: "Sony" },
    { value: "apple", label: "Apple" },
    { value: "lenova", label: "Lenova" },
  ];
  const categoryDropdown = [
    { value: "headphone", label: "HeadPhone" },
    { value: "mobiles", label: "Mobiles" },
    { value: "laptops", label: "Laptops" },
  ];
  const handleproductDropdown = (e) => {
    console.log(e);
    setProductValue(e);
  };
  const handleCatgoryDropdown = (e) => {
    console.log(e);
    setCategoryValue(e);
  };

  const handleImportModal = (e) => {
    console.log(e);
    setIsModalOpen(false);
  };
  const handleproductModal = (e) => {
    console.log(e);
    setIsproductModalOpen(false);
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
  const onHandleDrawerImage = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      setUploading(true);
      if (allowedFormats.includes(selectedImage.type)) {
        setdrawerImage(URL.createObjectURL(selectedImage));
        setdrawerImageFile(selectedImage);
        setdrawerErrorMessage("");
        setdrawerUploading(false);
      } else {
        setdrawerImage("");
        setdrawerImageFile("");
        setdrawerErrorMessage(
          "Invalid file format. Please select a JPEG, PNG or JPG image."
        );
        setdrawerUploading(false);
      }
    }
  };
  // const onHandleproductImage = (e) => {
  //   try {
  //     console.log(e);
  //     const selectedImage = e.target.files[0];
  //     if (selectedImage) {
  //       setProductUploading(true);
  //       if (allowedFormats.includes(selectedImage.type)) {
  //         setProductImage(URL.createObjectURL(selectedImage));
  //         setProductImageFile(selectedImage);
  //         setProductErrorMessage("");
  //         setProductUploading(false);
  //       } else {
  //         setProductImage("");
  //         setProductImageFile("");
  //         setProductErrorMessage(
  //           "Invalid file format. Please select a JPEG, PNG or JPG image."
  //         );
  //         setProductUploading(false);
  //       }
  //     }
  //   } catch (error) {
  //     console.log(e);
  //   }
  // };
  const handleDrawer = (value)=>{
    
    const values ={
      ...value,
      image:drawerImage
    }
    console.log(values);
  }
  return (
    <Layout selected={9}>
      <div className="bg-white py-2 px-4">
        <div className="flex gap-4 items-center justify-between w-full">
          <div className="flex gap-2">
            <ThemeButton onClick={showproductModal}>
              <IoIosAdd className="inline-block text-lg" /> Add New Product
            </ThemeButton>
            <ThemeButton onClick={showModal}>
              <IoCloudDownloadOutline className="inline-block text-lg" /> Import
              Product
            </ThemeButton>
          </div>
          <div className="flex items-center gap-2">
            <ThemeInput placeholder={"Search"} />
            <ThemeDropdown
              options={productDropdown}
              onChange={handleproductDropdown}
              value={productValue}
            />
            <ThemeDropdown
              options={categoryDropdown}
              onChange={handleCatgoryDropdown}
              value={categoryValue}
            />
          </div>
        </div>
      </div>
      <div className="my-6 w-full border-b border-gray   flex items-start gap-7">
        <div
          className={`flex items-center justify-center gap-2  pb-2 cursor-pointer text-sm ${
            TabelType === "single" && "text-blue border-b-2 border-blue"
          }`}
          onClick={() => {
            setTabelType("single");
          }}
        >
          <TbCategoryPlus /> <p className="capitalize">single type product</p>
        </div>
        <div
          className={`flex items-center justify-center gap-2  pb-2 cursor-pointer text-sm ${
            TabelType === "variant" && "text-blue border-b-2 border-blue"
          }`}
          onClick={() => {
            setTabelType("variant");
          }}
        >
          <TbCategoryPlus /> <p className="capitalize">variant type product </p>
        </div>

        <div
          className={`flex items-center justify-center gap-2  pb-2 cursor-pointer text-sm ${
            TabelType === "service" && "text-blue border-b-2 border-blue"
          }`}
          onClick={() => {
            setTabelType("service");
          }}
        >
          <TbCategoryPlus /> <p className="capitalize">service type product </p>
        </div>
      </div>
      <ThemeTable
        columns={columns}
        data={tabelData} // Pass the mock data here
        loader={false}
        pagination={{ total: mockData.length }}
        direction="ltr"
        scroll={{ x: 1000 }}
      />
      <Importproduct
        image={image}
        uploading={uploading}
        errorMessage={errorMessage}
        onHandleImage={onHandleImage}
        isModalOpen={isModalOpen}
        oncancel={() => setIsModalOpen(false)}
        onFinish={handleImportModal}
        title={"Import Product"}
        name={"importProduct"}
      />
      <ProductDrawer onFinish={handleDrawer} 
      image={drawerImage}
      uploading={drawerUploading}
      errorMessage={drawerErrorMessage}
      handleImage={onHandleDrawerImage}
      open={isproductModalOpen}
      />
    </Layout>
  );
}

export default Products;
