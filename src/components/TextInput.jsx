import React from "react";

const TextInput = ({ placeholder, name, isWarning, onBlur }) => {
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        name={name}
        onBlur={onBlur}
        className={`w-full border-1 ${
          isWarning ? "border-red-400 bg-red-50" : "border-zinc-400"
        } rounded p-2`}
      />
    </>
  );
};

export default TextInput;
