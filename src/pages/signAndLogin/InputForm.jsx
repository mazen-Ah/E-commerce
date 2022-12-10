import React from "react";

const InputForm = ({ placeholder, name }) => {
  return (
    <div className="place-content-center flex flex-col w-full my-4">
      <label className="text-[9px] font-semibold my-1" htmlFor="Username">
        {placeholder}*
      </label>
      <input
        placeholder={placeholder}
        name={name}
        className="border-[1px] border-black rounded px-2 py-1"
        id="Username"
        type="text"
      />
    </div>
  );
};

export default InputForm;
