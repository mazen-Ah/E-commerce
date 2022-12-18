import React from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
const Header = () => {
  return (
    <div className="w-full rounded-2xl object-cover bg-gradient-to-br from-black/50 to-black/20 relative">
      <div className="">
        <img className="" src="./assets/HeadPhone.png" alt="" />
      </div>
      <div className="absolute z-10 top-1/4 left-4">
        <h5 className="font-semibold max-sm:text-sm">Beast Solo</h5>
        <h2 className="max-w-xs font-bold max-sm:text-xl">Wireless</h2>
        <h2 className="text-white font-bold max-sm:text-xl">Headphones</h2>
        <Button
          text="Visit Our Shop"
          className="bg-black max-md:my-4 my-10 max-sm:py-1 max-sm:px-2 text-white hover:bg-white hover:text-black "
          to="/Shop"
        />
      </div>
    </div>
  );
};

export default Header;
