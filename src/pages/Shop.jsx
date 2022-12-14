import React, { useState } from "react";
import { useSelector } from "react-redux";
import AllProducts from "../components/Shop/AllProducts";
import Sidebar from "../components/Shop/Sidebar";
const Shop = () => {
  const [tag, setTag] = useState("");
  const [price, setPrice] = useState(0);
  return (
    <div className="px-4">
      <div className="flex">
        <Sidebar setTag={setTag} price={price} setPrice={setPrice} />
        <div className="mb-5">
          <AllProducts tag={tag} price={price} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
