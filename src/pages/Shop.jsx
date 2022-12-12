import React from "react";

import Layout from "../components/Layout";
import Products from "../components/Products/Products";
import Sidebar from "../components/Shop/Sidebar";
const Shop = () => {
  return (
    <div className="px-4">
      <div className="flex">
        <Sidebar />
        <div className="pr-10 mb-5"></div>
      </div>
    </div>
  );
};

export default Shop;
