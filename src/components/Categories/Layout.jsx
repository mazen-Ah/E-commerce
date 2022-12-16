import React from "react";
import Button from "./Button";

const Layout = () => {
  return (
    <div className="grid max-sm:grid-cols-2 grid-cols-4 justify-between items-center gap-4 mb-4  ">
      <div className="bg-gradient-to-br from-slate-300 to-slate-800 w-full h-64 relative rounded-lg">
        {/* <img
          className="absolute right-0"
          src="./assets/Layout/Mask-Group-5-1.png"
          alt=""
        /> */}
        <Button />
      </div>
      <div className="bg-gradient-to-br from-slate-300 to-slate-800 w-full h-full relative rounded-lg">
        {/* <img src="./assets/Layout/clay-apple-watch-mockup-07.png" alt="" /> */}
        <Button />
      </div>
      <div className="bg-gradient-to-br from-slate-300 to-slate-800 w-full h-full relative rounded-lg col-span-2">
        {/* <img
          className="translate-x-1/4"
          src="./assets/Layout/Laptop.png"
          alt=""
        /> */}

        <Button />
      </div>
    </div>
  );
};

export default Layout;
