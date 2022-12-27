import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const ShopingCart = () => {
  return createPortal(
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity z-[4]">
      <div className="fixed inset-y-0 right-0 z-[3] max-w-full pl-10 bg-white w-3/6 ">
        <div className="">
          <div>
            <h6>Shopping cart</h6>
            <div>
              <AiOutlineClose className="text-2xl opacity-40 font-bold" />
            </div>
            <div></div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <h6></h6>
              <p></p>
            </div>
            <h6></h6>
          </div>
          <div>
            <button>Checkout</button>
          </div>
          <div>
            <span>or</span>
            <button> Cancel order</button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal-ShoppingCart")
  );
};

export default ShopingCart;
