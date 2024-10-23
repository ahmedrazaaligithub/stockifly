import { Input, Select ,Space} from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Option } = Select;

const SearchDropdown = ({
  defaultValue,
  options,
  placeholder,
  handleSearchValue,
  handleSearchCategory,
  width,
  dropdownPlaceholder,
  type,
  label
}) => {
  return (
        <>
       <p className='mb-3 text-sm'>{label}</p>
        {
          type !== "inputFirst" ? (
            <>
       <Space.Compact onChange={handleSearchValue}>
      <Select style={{width:"70px"}} placeholder={dropdownPlaceholder} defaultValue={defaultValue} options={options} />
      <Input  style={{ width:width ? width : "200px" }} defaultValue={defaultValue} placeholder={placeholder} />
    </Space.Compact>
            </>  
          ):(
            <>
            <Space.Compact onChange={handleSearchValue}>
           <Input  style={{ width:width ? width : "200px" }} defaultValue={defaultValue} placeholder={placeholder} />
           <Select  style={{width:"70px"}} placeholder={dropdownPlaceholder} defaultValue={defaultValue} options={options} />
         </Space.Compact>
                 </>  
          )
}
    {/* <Input.Group compact> */}
      {/* Select for search category (e.g. Name, Email, Price) */}
      {/* {type !== "inputFirst" ? (
        <>
          <Select
            defaultValue={defaultValue}
            style={{ width: width ? width : "70px" }}
            onChange={handleSearchCategory} // Capture category change
            placeholder={dropdownPlaceholder}
          >
            {options?.map((data, index) => (
              <Option key={index} value={data.value}>
                {data.label}
              </Option>
            ))}
          </Select> */}

          {/* Input for search term */}
          {/* <Input
            style={{ width: "200px" }}
            placeholder={placeholder}
            onChange={(e) => handleSearchValue(e.target.value)} // Capture input value
            suffix={<SearchOutlined />}
          />
        </>
      ) : (
        <> */}
          {/* Input for search term */}
          {/* <Input
            style={{ width: width ? width : "200px" }}
            placeholder={placeholder}
            onChange={(e) => handleSearchValue(e.target.value)} // Capture input value
            suffix={<SearchOutlined />}
          />
          <Select
            defaultValue={defaultValue}
            style={{ width: "70px" }}
            onChange={handleSearchCategory} // Capture category change
            placeholder={dropdownPlaceholder}
          >
            {options?.map((data, index) => (
              <Option key={index} value={data.value}>
                {data.label}
              </Option>
            ))}
          </Select>
        </>
      )} */}
    {/* </Input.Group> */}
        </>
  );
};

export default SearchDropdown;
