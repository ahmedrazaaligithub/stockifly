import React, { useState } from 'react';
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { MdSearch } from 'react-icons/md';

function ThemeInput({ label, placeholder, type, onChange, className }) {
  return (
    <div className={`${className}`}>
      <p className='mb-3 text-sm '>{label}</p>

      {type === "password" ? (
        <Input.Password
          placeholder={placeholder}
          onChange={onChange}
          className="text-sm py-1"
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
      ) : (
        <Input
          placeholder={placeholder}
          type={type || 'text'}
          onChange={onChange}
          className="text-sm py-1"
          suffix={<MdSearch/>}
        />
      )}
    </div>
  );
}

export default ThemeInput;
