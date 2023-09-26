import React from "react";

const InputWithLabel = ({ label, placeholder, value, onChange }) => {
  return (
    <label className="w-full flex flex-col gap-4">
      {label}
      <input
        className="outline-none rounded-sm px-8 py-10 border-1 border-black"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
};

export default InputWithLabel;
