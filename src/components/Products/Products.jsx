import React from "react";
import Product from "./Product";
import { useGetProductsQuery } from "../../store/Api/apiSlice";
const Products = () => {
  const { data } = useGetProductsQuery();
  return (
    <div className="">
      <div className="mb-12">
        <div className="grid md:grid-cols-3 gap-4 my-2 max-md:grid-cols-1">
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
