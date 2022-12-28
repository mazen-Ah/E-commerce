import React from "react";

const saleCate = () => {
  return (
    <div className="bg-[#36B27E] max-w-2xl px-6 md:max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 relative rounded-xl">
      <div className="w-fit flex justify-center relative">
        <h4 className="text-white text-7xl lg:text-9xl bottom-20 font-semibold absolute">
          SALE!
        </h4>
        <div className="cursor-pointer hover:opacity-70 w-full z-10 flex">
          <img className="" src="./assets/O6CCQV1.png" alt="" />
        </div>
      </div>
      <div className="flex flex-col  max-sm:text-center sm:self-center  max-sm:items-center max-sm:w-full">
        <h5 className="text-white font-bold md:text-4xl">Products</h5>
        <h5 className="text-white font-bold md:text-4xl">on sale now!</h5>
        <p className="text-white font-light text-sm max-md:my-3 my-6">
          check out our shop for a lot of products on sale now!
        </p>
        <button className="text-[#36B27E] bg-white w-fit py-2 px-4 max-sm:py-1 max-sm:px-2 rounded-lg hover:bg-black max-sm:self-center max-sm:m-2 max-sm:mr-2">
          Button
        </button>
      </div>
    </div>
  );
};

export default saleCate;
