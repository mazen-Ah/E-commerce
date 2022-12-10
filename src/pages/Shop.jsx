import React from "react";
import Navbar from "../components/Header/Navbar";
import Products from "../components/Products/Products";
const Shop = () => {
  return (
    <div className="px-4">
      <Navbar />
      <h2>Shop</h2>
      <Products />
    </div>
  );
};

export default Shop;
