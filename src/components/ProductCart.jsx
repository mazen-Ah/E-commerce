import React from "react";
import { TiDelete } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../store/ProductsInCart";
const ProductCart = ({ i, id, price, title, url, item }) => {
  const dispatch = useDispatch();
  const outCart = () => {
    dispatch(deleteFromCart(i));
  };
  return (
    <div className="grid grid-cols-4 py-4 text-center items-center relative">
      <div className="text-center items-center flex justify-evenly">
        <div className="bg-gradient-to-br from-black/40 to-black/10 rounded-lg text-center items-center">
          <img className="w-14" src={url} alt="" />
        </div>
        <div className="truncate">{title}</div>
      </div>
      <div className="">${price}</div>
      <div className="">
        <span className="w-fit border-2 px-4 py-2">1</span>
      </div>
      <div className="">{price}</div>
      <button
        onClick={() => outCart()}
        className="text-center items-center absolute right-0"
      >
        <TiDelete />
      </button>
    </div>
  );
};

export default ProductCart;
