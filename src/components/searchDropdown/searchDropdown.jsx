import { Input, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Option } = Select;

const SearchDropdown = ({ defaultValue, options, placeholder, handleSearchValue, handleSearchCategory }) => {
  return (
    <Input.Group compact>
      {/* Select for search category (e.g. Name, Email, Price) */}
      <Select
        defaultValue={defaultValue}
        style={{ width: '50px' }}
        onChange={handleSearchCategory} // Capture category change
      >
        {options?.map((data, index) => (
          <Option key={index} value={data.value}>
            {data.label}
          </Option>
        ))}
      </Select>

      {/* Input for search term */}
      <Input
        style={{ width: '200px' }}
        placeholder={placeholder}
        onChange={(e) => handleSearchValue(e.target.value)} // Capture input value
        suffix={<SearchOutlined />}
      />
    </Input.Group>
  );
};

export default SearchDropdown;
