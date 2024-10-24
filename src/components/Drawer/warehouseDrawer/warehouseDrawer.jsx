import { Drawer } from "antd";
import React, { useState } from "react";
import { FaRegNewspaper } from "react-icons/fa6";
import { IoEyeOutline, IoSettingsOutline } from "react-icons/io5";
import { BasicDetails, PosSetting, Visibility } from "../../components";

function WarehouseDrawer({
  open,
  onClose,
  // image,
  // uploading,
  // drawerUploading,
  // drawerErrorMessage,
  // onFinish,
  // handleImage,
  // form,
}) {
  const [image, setImage] = useState("");
  const [imageFile, setImageFile] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [darkiImage, setDarkImage] = useState("");
  const [darkImageFile, setDarkImageFile] = useState("");
  const [darkerrorMessage, setDarkErrorMessage] = useState("");
  const [darkuploading, setDarkUploading] = useState(false);
  const [signatureiImage, setSignatureImage] = useState("");
  const [signatureImageFile, setSignatureImageFile] = useState("");
  const [signatureerrorMessage, setSignatureErrorMessage] = useState("");
  const [signatureuploading, setSignatureUploading] = useState(false);
  const [drawerType, setDrawerType] = useState("basicDetails");
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone,setShowPhone] = useState(false)
  const [showMPR, setShowMPR] = useState(true);
  const [showDiscTax, setShowDiscTax] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const handleShowEmail = () => {
    setShowEmail(!showEmail);
  };
  const handleShowMPR = () => {
    setShowMPR(!showMPR);
  };
  const handleShowPhone=()=>{
    setShowPhone(!showPhone)
  }
  const  handleShowDiscTax = () => {
    setShowDiscTax(!showDiscTax);
    };

  const onHandleLogo = (e) => {
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
  const onHandleDarkLogo = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      setDarkUploading(true);
      if (allowedFormats.includes(selectedImage.type)) {
        setDarkImage(URL.createObjectURL(selectedImage));
        setDarkImageFile(selectedImage);
        setDarkErrorMessage("");
        setDarkUploading(false);
      } else {
        setDarkImage("");
        setDarkImageFile("");
        setDarkErrorMessage(
          "Invalid file format. Please select a JPEG, PNG or JPG image."
        );
        setDarkUploading(false);
      }
    }
  };
  const onHandleSignature = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      setSignatureUploading(true);
      if (allowedFormats.includes(selectedImage.type)) {
        setSignatureImage(URL.createObjectURL(selectedImage));
        setSignatureImageFile(selectedImage);
        setSignatureErrorMessage("");
        setSignatureUploading(false);
      } else {
        setSignatureImage("");
        setSignatureImageFile("");
        setSignatureErrorMessage(
          "Invalid file format. Please select a JPEG, PNG or JPG image."
        );
        setSignatureUploading(false);
      }
    }
  };
  const handleBasicDetails = (e) => {
    const obj = {
      image,
      darkiImage,
      signatureiImage,
      showEmail,
      ...e,
    };
    console.log("values", e);
  };
  const handleVisibility = (e) => {
    console.log(e);
  };
  const handlePos = (e) => {
    console.log(e);
  };
  return (
    <Drawer width={600} title="Add Warehouse" open={open} onClose={onClose}>
      <div className="px-2">
        <div className="my-6 w-full border-b border-gray   flex items-start gap-7">
          <div
            className={`flex items-center justify-center gap-2  pb-2 cursor-pointer text-sm ${
              drawerType === "basicDetails" &&
              "text-blue border-b-2 border-blue"
            }`}
            onClick={() => {
              setDrawerType("basicDetails");
            }}
          >
            <FaRegNewspaper /> <p className="capitalize">Basic Details</p>
          </div>
          <div
            className={`flex items-center justify-center gap-2  pb-2 cursor-pointer text-sm ${
              drawerType === "visibility" && "text-blue border-b-2 border-blue"
            }`}
            onClick={() => {
              setDrawerType("visibility");
            }}
          >
            <IoEyeOutline /> <p className="capitalize">Visibility </p>
          </div>

          <div
            className={`flex items-center justify-center gap-2  pb-2 cursor-pointer text-sm ${
              drawerType === "pos" && "text-blue border-b-2 border-blue"
            }`}
            onClick={() => {
              setDrawerType("pos");
            }}
          >
            <IoSettingsOutline /> pos setting
          </div>
        </div>
        {drawerType === "visibility" ? (
          <Visibility onFinish={handleVisibility} onClose={onClose} />
        ) : drawerType === "basicDetails" ? (
          <BasicDetails
            onFinish={handleBasicDetails}
            showEmail={showEmail}
            handleShowEmail={handleShowEmail}
            showPhone={showPhone}
            handleShowPhone={handleShowPhone}
            HandleImage={onHandleLogo}
            image={image}
            uploading={uploading}
            errorMessage={errorMessage}
            darkerrorMessage={darkerrorMessage}
            handledarkImage={onHandleDarkLogo}
            darkimage={darkiImage}
            darkuploading={darkuploading}
            signatureimage={signatureiImage}
            handlesignatureImage={onHandleSignature}
            signatureuploading={signatureuploading}
            signatureerrorMessage={signatureerrorMessage}
            onClose={onClose}
          />
        ) : (
          <PosSetting
            onFinish={handlePos}
            handleShowMPR={handleShowMPR}
            handleShowDiscTax={handleShowDiscTax}
            showDiscTax={showDiscTax}
            showMPR={showMPR}
            onClose={onClose}
          />
        )}
      </div>
    </Drawer>
  );
}

export default WarehouseDrawer;
