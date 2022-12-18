import React from "react";
import Product from "./Product";
import { useLocation } from "react-router";
import { useGetProductsQuery } from "../../store/Api/apiSlice";
const Products = () => {
  const { data } = useGetProductsQuery();
  const { pathname } = useLocation();
  console.log(data);
  return (
    <div className="">
      <div className="mb-12">
        <div className="grid md:grid-cols-3 gap-4 my-2 max-md:grid-cols-2">
          {data?.map((prod, i) => {
            return (
              <Product
                key={i}
                id={prod.id}
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
