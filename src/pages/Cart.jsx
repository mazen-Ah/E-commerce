import React from "react";
import BillingDetails from "../components/BillingDetails";
import CartTotals from "../components/CartTotals";
import Coupon from "../components/Coupon";
import ProductCart from "../components/ProductCart";

const Cart = () => {
  return (
    <div className="w-full grid">
      <ul className="grid grid-cols-4 items-end text-center">
        <li className="">Product</li>
        <li className="">Price</li>
        <li className="">Quantity</li>
        <li className="">Total</li>
      </ul>
      <div className="divide-y py-6">
        <ProductCart />
        <ProductCart />
        <Coupon />
      </div>
      <div className="grid grid-cols-2 gap-x-40 my-24">
        <BillingDetails />
        <CartTotals />
      </div>
    </div>
  );
};

export default Cart;
