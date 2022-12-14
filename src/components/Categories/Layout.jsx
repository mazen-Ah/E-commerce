import React from "react";
import Button from "../ui/Button";

const Layout = () => {
  return (
    <div className="grid max-sm:grid-cols-2 grid-cols-4 gap-4 mb-4 relative">
      <div className="flex bg-[#1D1D1D] w-full h-full rounded-lg relative hover:opacity-90 cursor-pointer">
        <div className="self-end p-3 h-fit z-10">
          <h6 className="text-white font-medium text-lg max-lg:text-xs">
            Enjoy
          </h6>
          <h6 className="text-white font-medium text-lg my-2 max-lg:text-xs">
            With
          </h6>
          <h6 className="text-white font-bold my-4 max-lg:text-base">
            HEADPHONES
          </h6>
          <Button
            text="Browse"
            to="/Shop"
            className="bg-white hover:bg-black hover:text-white "
          />
        </div>
        <div className="absolute bottom-0 right-0">
          <img className="" src="./assets/Layout/Mask-Group-5-1.png" alt="" />
        </div>
      </div>
      <div className=" rounded-lg flex bg-[#FECA3C] relative items-center hover:opacity-90 cursor-pointer">
        <div className="self-end p-3 h-fit z-10">
          <h6 className="text-white font-medium text-lg max-lg:text-xs">New</h6>
          <h6 className="text-white font-medium text-lg max-lg:text-xs my-2">
            Wear
          </h6>
          <h6 className="text-white font-bold text-3xl my-4 max-lg:text-base">
            Gadgets
          </h6>
          <Button
            text="Browse"
            to="/Shop"
            className="bg-white hover:text-[#FECA3C] hover:bg-black"
          />
        </div>
        <div className="absolute w-full right-0">
          <img
            className=""
            src="./assets/Layout/clay-apple-watch-mockup-07.png"
            alt=""
          />
        </div>
      </div>
      <div className="col-span-2 rounded-lg flex bg-[#F53943] relative hover:opacity-90 cursor-pointer">
        <div className="self-end p-3">
          <h6 className="max-lg:text-xs text-white font-medium">Trend</h6>
          <h6 className="max-lg:text-xs text-1xl text-white font-bold my-2">
            Devices
          </h6>
          <h6 className="max-lg:text-2xl text-3xl text-white font-bold my-4">
            LAPTOP
          </h6>
          <Button
            text="Browse"
            to="/Shop"
            className="bg-white hover:text-[#F53943] hover:bg-black"
          />
        </div>
        <div className="">
          <img className="" src="./assets/Layout/Laptop.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Layout;
