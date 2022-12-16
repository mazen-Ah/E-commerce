import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Link to="/Shop">
      <div className="w-[100%] rounded-lg bg-gradient-to-br from-[#818181] to-[#E6E6E6] relative hover:opacity-75">
        <img className="w-full" src="./assets/HeadPhone.png" alt="" />
        <div className="absolute z-10 top-1/4 px-14 max-sm:hidden">
          <h5 className=" font-semibold">Beast Solo</h5>
          <h2 className="max-w-xs font-bold">
            Wireless <span className="text-white">Headphones</span>
          </h2>
          <button className="mt-4 bg-black  text-white px-3 py-1 rounded font-extralight">
            Visit Our Shop
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Header;
