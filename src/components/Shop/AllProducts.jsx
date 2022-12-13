import React from "react";
import { useLocation } from "react-router";
import Product from "../Products/Product";
import { useSelector } from "react-redux";
import { useGetProductsQuery } from "../../store/Api/apiSlice";
const AllProducts = () => {
  const { data } = useGetProductsQuery();
  const { match, check } = useSelector((state) => state.Search);
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4 my-2 max-md:grid-cols-2">
      {check
        ? match?.map((prod, i) => {
            return (
              <Product
                key={i}
                price={prod.price}
                tag={prod.tag}
                title={prod.title}
                url={prod.url}
              />
            );
          })
        : data?.map((prod, i) => {
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
  );
};

export default AllProducts;
