import React from "react";
import Layout from "./Layout";
import LayoutTwo from "./LayoutTwo";

const Category = () => {
  return (
    <div className="my-20 mt-10  grid-flow-row-dense">
      <h2 className="w-full text-5xl font-semibold text-center mb-10">
        Our Categories
      </h2>
      <Layout />
      <LayoutTwo />
    </div>
  );
};

export default Category;
