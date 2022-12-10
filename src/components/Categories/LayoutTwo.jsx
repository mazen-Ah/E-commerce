import React from "react";

const LayoutTwo = () => {
  return (
    <div className="flex justify-between items-center gap-4 my-6">
      <div className="cursor-pointer hover:opacity-70">
        <img src="./assets/Layout/Column.png" alt="" />
      </div>
      <div className="cursor-pointer hover:opacity-70">
        <img className="h-[88%]" src="./assets/Layout/Laptop.png" alt="" />
      </div>
      <div className="cursor-pointer hover:opacity-70">
        <img src="./assets/Layout/Witch.png" alt="" />
      </div>
    </div>
  );
};

export default LayoutTwo;
