import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = ({ price, tag, title, url, id }) => {
  return (
    <Link to={`/${id}`}>
      <div className="my-2 hover:bg-[#EEEEEE] hover:rounded-md hover:opacity-70 cursor-pointer p-2">
        <div className="mb-4 cursor-pointer h-full bg-gradient-to-br from-black/40 to-black/10 rounded-lg">
          <img className="h-full w-full" src={url} alt="" />
        </div>
        <div className="flex flex-col justify-between px-2 py-1">
          <h6 className="text-[12px] lett font-bold tracking-wide bg-[#F4F4F4] w-fit py-1 px-2 rounded-md -mt-2">
            {tag}
          </h6>
          <h5 className="font-semibold text-base cursor-pointer w-fit py-1 px-1">
            {title}
          </h5>
          <h4 className="font-semibold text-base w-fit p-1">${price}</h4>
        </div>
      </div>
    </Link>
  );
};

export default Product;
