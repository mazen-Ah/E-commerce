import React from "react";
import clsx from "clsx";
import { useLocation } from "react-router";
import Product from "../Products/Product";
import { useSelector } from "react-redux";
import { useGetProductsQuery } from "../../store/Api/apiSlice";
const AllProducts = ({ tag, price }) => {
  const { data } = useGetProductsQuery();
  const { match, check, result } = useSelector((state) => state.Search);
  return (
    <>
      <h2 className="text-4xl font-bold mb-10">
        {check ? `Search: ${result}` : `Shop`}
      </h2>
      <div className="grid md:grid-cols-3 gap-x-6 gap-y-10 my-2 max-md:grid-cols-2">
        {tag.length
          ? check
            ? match?.map((prod, i) => {
                if (prod.tag === tag)
                  if (prod.price > price)
                    return (
                      <Product
                        id={prod.id}
                        key={i}
                        price={prod.price}
                        tag={prod.tag}
                        title={prod.title}
                        url={prod.url}
                      />
                    );
              })
            : data?.map((prod, i) => {
                if (prod.tag === tag)
                  if (prod.price > price)
                    return (
                      <Product
                        id={prod.id}
                        key={i}
                        price={prod.price}
                        tag={prod.tag}
                        title={prod.title}
                        url={prod.url}
                      />
                    );
              })
          : check
          ? match?.map((prod, i) => {
              if (prod.price > price)
                return (
                  <Product
                    id={prod.id}
                    key={i}
                    price={prod.price}
                    tag={prod.tag}
                    title={prod.title}
                    url={prod.url}
                  />
                );
            })
          : data?.map((prod, i) => {
              if (prod.price > price)
                return (
                  <Product
                    id={prod.id}
                    key={i}
                    price={prod.price}
                    tag={prod.tag}
                    title={prod.title}
                    url={prod.url}
                  />
                );
            })}
      </div>
    </>
  );
};

export default AllProducts;
