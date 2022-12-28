import React, { useState } from "react";
const Sidebar = ({ setPrice, price, setTag }) => {
  const handlerange = (e) => {
    setPrice(e.target.value);
  };
  const handleList = (e) => {
    setTag(e.target.outerText);
  };
  const filter = () => {
    setTag("");
    setPrice(0);
  };
  return (
    <div className="w-full max-w-[250px] max-sm:hidden px-3 py-6">
      <div className="grid">
        <h4 className="font-bold text-lg mx-1">Product Categories</h4>
        <ul className="">
          <li
            className="text-sm opacity-70 m-2 mx-4 hover:opacity-100 cursor-pointer"
            onClick={(e) => {
              handleList(e);
            }}
          >
            Headphones
          </li>
          <li
            className="text-sm opacity-70 m-2 mx-4 hover:opacity-100 cursor-pointer"
            onClick={(e) => {
              handleList(e);
            }}
            value="Headset"
          >
            Headset
          </li>
          <li
            className="text-sm opacity-70 m-2 mx-4 hover:opacity-100 cursor-pointer"
            onClick={(e) => {
              handleList(e);
            }}
          >
            Laptop
          </li>
          <li
            className="text-sm opacity-70 m-2 mx-4  hover:opacity-100 cursor-pointer"
            onClick={(e) => {
              handleList(e);
            }}
          >
            Watches
          </li>
        </ul>
      </div>
      <div className="py-6 mx-1">
        <h4 className="text-lg font-bold ">Filter By Price</h4>
        <input
          className="h-[1px] my-2"
          type="range"
          onChange={handlerange}
          min="0"
          max="1500"
          value={price}
        />
        <p className="text-[10px] mb-2">Price: ${price} - $1500</p>
        <button
          className="text-sm bg-black text-white rounded-md py-1 p-4"
          onClick={() => filter()}
        >
          Fillter
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
