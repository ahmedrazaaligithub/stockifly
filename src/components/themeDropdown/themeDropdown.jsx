import React from "react";
import { Select } from "antd";

const ThemeDropdown = ({
  value,
  onChange,
  placeholder,
  options,
  className,
  label,
  labelPrimary,
  textMd,
  style,
  defaultValue,
  ...props
}) => {
  return (
    <div>
      <p
        className={`${labelPrimary && "text-primary font-small"} ${
          textMd ? "font-medium" : "font-semibold"
        } mb-1 text-sm`}
      >
        {label}
      </p>
      <Select
        {...props}
        style={style ? style : { height: 32, minWidth: 100 }}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        placeholder={placeholder}
        className={`${className} selectBox`}
        options={options}
      />
    </div>
  );
};

export default ThemeDropdown;
