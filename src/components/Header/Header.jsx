import React from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
const Header = () => {
  return (
    <div className="relative my-16 flex max-sm:h-0 max-sm:min-h-[250px] min-h-[350px] w-full items-center justify-center rounded-2xl bg-gradient-to-br from-black/50 to-black/20 sm:my-16">
      <div className="w-full">
        <img className="" src="./assets/HeadPhone.png" alt="" />
      </div>
      <div className="absolute left-1 space-y-1 rounded-3xl p-5 sm:left-8 sm:space-y-3 sm:text-left">
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
