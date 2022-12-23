import React from "react";
import { TiDelete } from "react-icons/ti";
const ProductCart = () => {
  return (
    <div className="grid grid-cols-4 py-4 text-center items-center relative">
      <div className="text-center items-center flex justify-evenly">
        <div className="bg-gradient-to-br from-black/40 to-black/10 rounded-lg text-center items-center">
          <img className="w-14" src="./assets/5.png" alt="" />
        </div>
        <div className="">Apple watch</div>
      </div>
      <div className="">$59.00</div>
      <div className="">
        <span className="w-fit border-2 px-4 py-2">1</span>
      </div>
      <div className="">$59.00</div>
      <button className="text-center items-center absolute right-0">
        <TiDelete />
      </button>
    </div>
  );
};

export default ProductCart;
