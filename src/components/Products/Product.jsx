import React from "react";

const Product = ({ price, tag, title, url }) => {
  return (
    <div className="my-2 hover:bg-slate-100 hover:rounded-md hover:opacity-70">
      <div className="mb-4   cursor-pointer">
        <img className="" src={url} alt="" />
      </div>
      <div className="flex flex-col justify-between">
        <h6 className="text-[7px] font-bold bg-[#F4F4F4] w-fit p-1 rounded-md -mt-2">
          {tag}
        </h6>
        <h5 className="font-bold text-[14px] cursor-pointer w-fit">{title}</h5>
        <h4 className="font-bold text-[14px] w-fit">{price}</h4>
      </div>
    </div>
  );
};

export default Product;
