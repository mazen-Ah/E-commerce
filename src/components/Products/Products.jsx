import React from "react";
import Product from "./Product";
import SaleCate from "./SaleCate";
import { useGetProductsQuery } from "../../store/Api/apiSlice";
const Products = () => {
  const { data } = useGetProductsQuery();
  return (
    <div className="">
      <div className="mb-12">
        <div className="grid grid-cols-3 gap-4 my-2">
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
