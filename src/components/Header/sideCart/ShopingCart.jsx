import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import Prod from "./Prod";

const ShopingCart = ({ setCart }) => {
  const { inCart } = useSelector((state) => state.Cart);
  const [total, setTotal] = useState();
  console.log(inCart);
  useEffect(() => {
    if (inCart?.length)
      inCart.reduce((a, c) => {
        setTotal(a.price + c.price);
      });
  }, [inCart]);
  return createPortal(
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity z-50">
      <div className="fixed inset-y-0 right-0 z-[3] flex flex-col justify-between max-w-sm bg-white w-3/6 py-6 px-6">
        <div className="">
          <div className="flex justify-between">
            <h6 className="font-bold text-xl">Shopping cart</h6>
            <div className="cursor-pointer" onClick={() => setCart(false)}>
              <AiOutlineClose className="text-2xl opacity-40 font-bold" />
            </div>
          </div>
          <div>
            <ul>
              {inCart?.map((item, i) => {
                return (
                  <li className="py-6">
                    <Prod
                      title={item.title}
                      url={item.url}
                      price={item.price}
                      i={i}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="py-4 w-full">
              <div className="flex justify-between">
                <h6 className="font-medium">Subtotal</h6>
                <h6 className="font-semibold h-fit">${total}</h6>
              </div>

              <p className="text-[#6B7280] text-sm font-medium whitespace-nowrap py-2">
                Shipping and taxes calculated at checkout.
              </p>
            </div>
          </div>
          <div>
            <button className="bg-black text-white w-full py-3 rounded font-bold">
              Checkout
            </button>
          </div>
          <div className="text-center p-4 pb-0">
            <span>or </span>
            <button className="underline text-sm font-semibold">
              Cancel order
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal-ShoppingCart")
  );
};

export default ShopingCart;
