import React, { useState } from 'react';
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { MdSearch } from 'react-icons/md';

function ThemeInput({style, label, placeholder, type, onChange, className, suffix,addonAfter,addonBefore}) {
  return (
    <div className={`${className}`}>
      <p className='mb-3 text-sm '>{label}</p>

      {type === "password" ? (
        <Input.Password
        addonAfter={addonAfter}
        addonBefore={addonBefore}
          placeholder={placeholder}
          onChange={onChange}
          className="text-sm py-1"
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          style={style}
        />
      ) : (
        <Input
        style={style}
        addonAfter={addonAfter}
        addonBefore={addonBefore}
          placeholder={placeholder}
          type={type || 'text'}
          onChange={onChange}
          className="text-sm py-1"
          suffix={suffix ? suffix :''}
        />
      )}
    </div>
  );
}

export default ThemeInput;
