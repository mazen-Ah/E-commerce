import React from "react";
import Credits from "./Credits";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center p-10 pt-0">
        <div className="flex p-8 gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
          </svg>
          <h2 className="text-xs">Logo</h2>
        </div>

        <div className="flex gap-x-10">
          <h4 className="font-medium text-xs">
            <a href="#">Home</a>
          </h4>
          <h4 className="font-medium text-xs">
            <a href="#">Shop</a>
          </h4>
          <h4 className="font-medium text-xs">
            <a href="#">Contact Us</a>
          </h4>
        </div>
      </div>
      <p className="h-[1px] w-full bg-black"></p>
      <Credits />
    </>
  );
};

export default Footer;
