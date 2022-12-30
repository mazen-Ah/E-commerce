import React, { useState } from "react";
import Categorys from "./Category/Categorys";
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
  const Cates = [
    {
      title: "Category",
      Category: [
        "Laptops",
        "Headphones",
        "Gadgets",
        "Accessories",
        "Televisions",
        "Cameras",
      ],
    },
    {
      title: "Brands",
      Category: ["Beats", "Sony", "Baseus", "Apple", "Samsung", "Lenovo"],
    },
  ];
  return (
    <div className="w-full max-w-[250px] max-sm:hidden px-3 py-6">
      {/* <div className="grid">
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
      </div> */}
      {Cates.map((item, i) => {
        return (
          <Categorys setTag={setTag} title={item.title} item={item} key={i} />
        );
      })}

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
