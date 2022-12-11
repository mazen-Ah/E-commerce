import React from "react";
import Category from "../components/Categories/Category";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navbar from "../components/Header/Navbar";
import Layout from "../components/Layout";
import Products from "../components/Products/Products";
import SaleCate from "../components/Products/SaleCate";

const Home = () => {
  return (
    <div className="px-8">
      <Header />
      <Category />
      <h2 className="text-center p-6 font-semibold text-xl">
        Best Seller Products
      </h2>
      <Products />
      <SaleCate />
    </div>
  );
};

export default Home;
