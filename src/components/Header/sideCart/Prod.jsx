import React from "react";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../../../store/ProductsInCart";
const Prod = ({ i, url, price, title }) => {
  const dispatch = useDispatch();

  return (
    <div className="grid w-full">
      <div className="flex">
        <div className="border-2 w-24 flex-shrink-0 overflow-hidden rounded-md border-gray-200 items-center">
          <img className="w-full" src={url} alt="" />
        </div>
        <div className="w-3/4 grid ml-4">
          <div className="flex justify-between">
            <h6 className="text-sm font-medium">{title}</h6>
            <p className="font-semibold">${price}</p>
          </div>
          <div className="flex justify-between">
            <p className="opacity-70 text-base">Qty 1</p>
            <div className="opacity-70 font-medium text-base">
              <button
                onClick={() => dispatch(deleteFromCart(i))}
                className="underline"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prod;
