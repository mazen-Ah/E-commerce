import React from "react";

const Coupon = () => {
  return (
    <form className="flex justify-end items-center gap-6 py-6">
      <input
        type="text"
        name="coupon"
        placeholder="Coupon code"
        className="border-[1px] border-black px-4 py-1 rounded border-opacity-30 outline-none"
      />
      <button className="bg-white border-[1px] rounded border-black px-2 py-1">
        Apply coupon
      </button>
    </form>
  );
};

export default Coupon;
