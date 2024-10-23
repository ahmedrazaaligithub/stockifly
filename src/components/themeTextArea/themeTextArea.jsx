import { Input } from "antd";

const { TextArea } = Input;

const ThemeTextArea = ({
  label,
  placeholder,
  value,
  labelPrimary,
  textMd,
  className,
  onChange,
  name,
  disabled,
  onKeyDown,
  type,
  inputClassName,
  dir,
  isRtl,
  rows
}) => {
  return (
    <div className={className}>
      <p
        className={`${labelPrimary && "text-primary"} ${
          textMd ? "font-medium" : "font-semibold"
        } mb-1`}
      >
        {label}
      </p>

      <TextArea
      autoSize={{
        minRows: 2,
        maxRows: 6,
      }}
        rows={rows ||4}
        type={type || "text"}
        dir={dir}
        onKeyDown={onKeyDown}
        name={name}
        placeholder={placeholder}
        value={value}
        className={`font-medium  ${inputClassName} ${
          isRtl && "urdu-font"
        }`}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};

export default ThemeTextArea;
