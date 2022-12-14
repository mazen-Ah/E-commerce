import React, { useState } from "react";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineMenuFold } from "react-icons/ai";
import Sidebar from "../Shop/Sidebar";
const Sidenav = ({ menu, setMenu }) => {
  const [range, setRange] = useState(0);
  const handlerange = (e) => {
    setRange(e.target.value);
  };
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="absolute -left-[10px] top-0 bg-slate-300 w-1/3 h-[80vh] z-10">
      <div className="relative">
        <AiOutlineMenuFold
          className="ml-2 mt-2 mb-4"
          onClick={() => setMenu(false)}
        />
        <div>
          <ul className="flex flex-col justify-between items-left divide-y-2">
            <li className="text-xs cursor-pointer hover:underline max-sm:px-2 max-sm:py-3">
              <Link to="/">Home</Link>
            </li>
            <li className="text-xs cursor-pointer hover:underline max-sm:px-2 max-sm:py-3">
              <Link to="/Shop">Shop</Link>
            </li>
            <li className="text-xs cursor-pointer hover:underline max-sm:px-2 max-sm:py-3">
              Contact Us
            </li>
          </ul>
        </div>
        <div className={clsx(pathname === "/" ? "hidden" : "", "mt-8")}>
          <div className="mb-6">
            <h4 className="font-bold text-[10px] flex flex-col ml-1 w-full mb-1">
              Product Categories
            </h4>
            <ul className="divide-y">
              <li className="text-xs opacity-70  hover:opacity-100 cursor-pointer px-1 p-2">
                Headphones
              </li>
              <li className="text-xs opacity-70  hover:opacity-100 cursor-pointer px-1 p-2">
                Headset
              </li>
              <li className="text-xs opacity-70  hover:opacity-100 cursor-pointer px-1 p-2">
                Laptops
              </li>
              <li className="text-xs opacity-70  hover:opacity-100 cursor-pointer px-1 p-2">
                watches
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold">Filter By Price</h4>
            <input
              className="h-[1px] w-full"
              type="range"
              onChange={handlerange}
              min="0"
              max="1500"
              value={range}
            />
            <p className="text-[10px]">Price: ${range} - $1500</p>
            <button className="text-xs bg-black text-white rounded-md py-[2px] p-[4px] mt-2">
              Fillter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
