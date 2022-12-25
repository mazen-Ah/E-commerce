import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BillingDetails from "../components/BillingDetails";
import CartTotals from "../components/CartTotals";
import Coupon from "../components/Coupon";
import ProductCart from "../components/ProductCart";

const Cart = () => {
  const { inCart } = useSelector((state) => state.Cart);
  console.log(inCart);
  const [total, setTotal] = useState();
  const [address, setAddress] = useState();

  useEffect(() => {
    if (inCart?.length)
      inCart.reduce((a, c) => {
        setTotal(a.price + c.price);
      });
  }, [inCart]);

  return (
    <div className="w-full grid">
      <ul className="grid grid-cols-4 items-end text-center">
        <li className="">Product</li>
        <li className="">Price</li>
        <li className="">Quantity</li>
        <li className="">Total</li>
      </ul>
      <div className="divide-y py-6">
        {inCart.map((item, i) => {
          return (
            <ProductCart
              id={item.id}
              price={item.price}
              title={item.title}
              url={item.url}
              item={item}
              i={i}
              Quantity={1}
            />
          );
        })}
        <Coupon />
      </div>
      <div className="grid grid-cols-2 gap-x-40 my-24">
        <BillingDetails address={address} setAddress={setAddress} />
        <CartTotals total={total} />
      </div>
    </div>
  );
};

export default Cart;
