import React from "react";
import AllProducts from "../components/Shop/AllProducts";
import Sidebar from "../components/Shop/Sidebar";
const Shop = () => {
  return (
    <div className="px-4">
      <div className="flex">
        <Sidebar />
        <div className="pr-10 mb-5">
          <AllProducts />
        </div>
      </div>
    </div>
  );
};

export default Shop;
