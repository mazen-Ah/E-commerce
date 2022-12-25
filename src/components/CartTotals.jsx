import React from "react";

const CartTotals = ({ total }) => {
  return (
    <div>
      <h6 className="font-bold text-2xl py-2">Cart Totals</h6>
      <div className="divide-y border-b-[1px] border-black border-opacity-60">
        <div className="flex justify-between py-3 ">
          <span className="opacity-70">Subtotal</span>
          <span>${total}</span>
        </div>
        <div className="flex justify-between py-3">
          <span className="opacity-70">Shipping Free</span>
          <span className="opacity-70">FREE!</span>
        </div>
        <div className="flex justify-between py-3">
          <span className="opacity-70">Dsicount</span>
          <span className="opacity-70">0</span>
        </div>
      </div>
      <div>
        <div className="flex justify-between py-4">
          <span className="font-bold">Total</span>
          <span>${total}</span>
        </div>
      </div>
      <div>
        <button className="bg-black px-6 rounded-lg font-light text-white py-3">
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartTotals;
