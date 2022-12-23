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
    <div className="w-2/3 mt-24 max-w-[200px] max-sm:hidden px-6">
      <div className="">
        <h4 className="font-bold text-sm">Product Categories</h4>
        <ul className="">
          <li
            className="text-xs opacity-70 m-2 mx-4 hover:opacity-100 cursor-pointer"
            onClick={(e) => {
              handleList(e);
            }}
          >
            Headphones
          </li>
          <li
            className="text-xs opacity-70 m-2 mx-4 hover:opacity-100 cursor-pointer"
            onClick={(e) => {
              handleList(e);
            }}
            value="Headset"
          >
            Headset
          </li>
          <li
            className="text-xs opacity-70 m-2 mx-4 hover:opacity-100 cursor-pointer"
            onClick={(e) => {
              handleList(e);
            }}
          >
            Laptop
          </li>
          <li
            className="text-xs opacity-70 m-2 mx-4  hover:opacity-100 cursor-pointer"
            onClick={(e) => {
              handleList(e);
            }}
          >
            Watches
          </li>
        </ul>
      </div>
      <div className="py-6">
        <h4 className="text-sm font-bold">Filter By Price</h4>
        <input
          className="h-[1px]"
          type="range"
          onChange={handlerange}
          min="0"
          max="1500"
          value={price}
        />
        <p className="text-[10px]">Price: ${price} - $1500</p>
        <button
          className="text-xs bg-black text-white rounded-md py-1 p-2"
          onClick={() => filter()}
        >
          Fillter
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
