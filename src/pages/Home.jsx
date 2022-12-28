import React from "react";
import Category from "../components/Categories/Category";
import Header from "../components/Header/Header";
import SideNav from "../components/Header/sideNav/SideNav";
import Products from "../components/Products/Products";
import SaleCate from "../components/Products/SaleCate";
const Home = () => {
  return (
    <div className="">
      <Header />
      <Category />
      <h2 className="text-center p-6 font-semibold text-5xl">
        Best Seller Products
      </h2>
      <Products />
      <SaleCate />
    </div>
  );
};

export default Home;
