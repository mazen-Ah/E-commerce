import React from "react";
import Product from "../Products/Product";
import { useLocation } from "react-router";
import { useGetProductsQuery } from "../../store/Api/apiSlice";
const Products = () => {
  const { data } = useGetProductsQuery();
  const { pathname } = useLocation();
  return (
    <div className="">
      <div className="mb-12">
        <h2 className="text-xl font-bold ">
          {pathname === "/Shop" ? "Shop" : "Best Seller Products"}
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4 my-2 max-md:grid-cols-2">
          {data?.map((prod, i) => {
            return (
              <Product
                key={i}
                price={prod.price}
                tag={prod.tag}
                title={prod.title}
                url={prod.url}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
