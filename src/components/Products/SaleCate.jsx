import React from "react";

const saleCate = () => {
  return (
    <div className="bg-[#36B27E] w-full h-1/2 grid grid-cols-2 relative">
      <div className="w-fit flex justify-center items-end">
        <h4 className="absolute text-white font-semibold">SALE</h4>
        <div>
          <img
            className="cursor-pointer hover:opacity-70 w-full z-10"
            src="./assets/O6CCQV1.png"
            alt=""
          />
        </div>
      </div>
      <div className="h-fit">
        <h5 className="text-white font-bold">Products</h5>
        <h5 className="text-white font-bold">on sale now!</h5>
        <p className="text-white ">
          check out our shop for a lot of products on sale now!
        </p>
        <button className="text-[#36B27E] bg-white">Button</button>
      </div>
    </div>
  );
};

export default saleCate;
