import React, { useState } from "react";

const Sidebar = () => {
  const [range, setRange] = useState(0);
  const handlerange = (e) => {
    setRange(e.target.value);
  };

  return (
    <div className="w-2/3 mt-14 max-w-[280px]">
      <div className="mb-6">
        <h4 className="font-bold text-sm">Product Categories</h4>
        <ul className="">
          <li className="text-xs opacity-70 m-2 mx-4 hover:opacity-100 cursor-pointer">
            Headphones
          </li>
          <li className="text-xs opacity-70 m-2 mx-4 hover:opacity-100 cursor-pointer">
            Headset
          </li>
          <li className="text-xs opacity-70 m-2 mx-4 hover:opacity-100 cursor-pointer">
            Laptops
          </li>
          <li className="text-xs opacity-70 m-2 mx-4  hover:opacity-100 cursor-pointer">
            watches
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-bold">Filter By Price</h4>
        <input
          className="h-[1px]"
          type="range"
          onChange={handlerange}
          min="0"
          max="1500"
          value={range}
        />
        <p className="text-[10px]">Price: ${range} - $1500</p>
        <button className="text-xs bg-black text-white rounded-md py-1 p-2">
          Fillter
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
