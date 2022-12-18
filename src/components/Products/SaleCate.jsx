import React from "react";

const saleCate = () => {
  return (
    <div className="bg-[#36B27E] w-full grid grid-cols-2 relative rounded-md">
      <div className="w-fit flex justify-start relative">
        <div className="cursor-pointer hover:opacity-70 w-full z-10 flex">
          <img className="" src="./assets/O6CCQV1.png" alt="" />
        </div>
        <h4 className="text-white max-sm:text-2xl max-md:text-6xl max-md:top-3/4 max-md:left-1/4 lg:text-9xl font-semibold absolute top-2/4 left-0">
          SALE!
        </h4>
      </div>
      <div className="flex flex-col self-center w-fit">
        <h5 className="text-white font-bold md:text-4xl">Products</h5>
        <h5 className="text-white font-bold md:text-4xl">on sale now!</h5>
        <p className="text-white font-light text-sm max-md:my-3 my-6">
          check out our shop for a lot of products on sale now!
        </p>
        <button className="text-[#36B27E] bg-white w-fit py-2 px-4 max-sm:py-1 max-sm:px-2 rounded-lg hover:bg-black max-sm:self-end max-sm:mr-2">
          Button
        </button>
      </div>
    </div>
  );
};

export default saleCate;
