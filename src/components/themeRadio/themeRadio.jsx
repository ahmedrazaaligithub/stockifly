import React, { useEffect } from "react";
import { Radio, Space } from "antd";
function ThemeRadio({ onChange, radios,value ,label,direction}) {
  useEffect(()=>{
console.log(value);

  },[value])
  return (
    <div>
      <p className='mb-3 text-sm font-medium'>{label}</p>
      <Radio.Group onChange={onChange} value={value}>
        <Space direction={direction}>
        {radios.map((data, index) => {
          return <Radio key={index} value={data.value}>{data.label}</Radio>;
        })}
        </Space>
      </Radio.Group>
    </div>
  );
}

export default ThemeRadio;
