import React from "react";

type InputWithLabelProps = {
  label: string,
  placeholder: string,
  value: string | number,
  onChange: Function
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({ label, placeholder, value, onChange }) => {
  return (
    <label className="w-full flex flex-col gap-1">
      {label}
      <input
        className="outline-none rounded-md px-2 py-2 border-2 border-gray-300"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
};

export default InputWithLabel;