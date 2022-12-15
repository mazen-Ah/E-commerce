import React, { useState } from "react";
import { useParams } from "react-router";
import { useGetProductsQuery } from "../store/Api/apiSlice";
const ProducePage = () => {
  const [taps, setTaps] = useState(false);
  const { data } = useGetProductsQuery();
  const { productId } = useParams();
  return (
    <div className="my-10">
      <div className="max-sm:grid-cols-1 grid grid-cols-2 items-center gap-10">
        <div className=" items-center">
          <div className="flex justify-center items-center">
            <img className="w-full" src={data[productId].url} alt="" />
          </div>
          <div className="my-4">
            <div className="grid grid-cols-4 gap-6 ">
              <div className="hover:opacity-70 cursor-pointer border-[1px] border-white hover:border-[1px] hover:border-black rounded-md">
                <img className="" src={data[productId].url} alt="" />
              </div>
              <div className="hover:opacity-70 cursor-pointer border-[1px] border-white hover:border-[1px] hover:border-black rounded-md">
                <img className="" src={data[productId].url} alt="" />
              </div>
              <div className="hover:opacity-70 cursor-pointer border-[1px] border-white hover:border-[1px] hover:border-black rounded-md">
                <img className="" src={data[productId].url} alt="" />
              </div>
              <div className="hover:opacity-70 cursor-pointer border-[1px] border-white hover:border-[1px] hover:border-black rounded-md">
                <img className="" src={data[productId].url} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="grid px-4 ">
          <h2 className="text-2xl font-bold my-4">{data[productId].title}</h2>
          <h4 className="text-xl font-medium my-4">{data[productId].price}$</h4>
          <div className="flex">
            <div>
              <img src="./assets/vector.png" alt="" />
            </div>
            <div>
              <img src="./assets/vector.png" alt="" />
            </div>
            <div>
              <img src="./assets/vector.png" alt="" />
            </div>
            <div>
              <img src="./assets/vector.png" alt="" />
            </div>
            <div>
              <img src="./assets/vector (1).png" alt="" />
            </div>
          </div>
          <p className="my-4 font-light">{data[productId].Description}</p>
          <h6 className="font-semibold my-4">{`In stock : ${data[productId].stock} `}</h6>
          <h6 className="opacity-40 my-4 font-semibold">out of stock </h6>
          <div
            className="grid grid-cols-2 gap-4
            "
          >
            <button className="bg-black text-white px-4 py-2 rounded-lg">
              Add to cart
            </button>
            <button className="border rounded-lg">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="mt-20 grid items-center">
        <div className="flex justify-center">
          <button className="bg-black text-white px-6 py-2 rounded-tl-md rounded-bl-md border-l-0 border-2 border-black">
            Description
          </button>
          <button className="px-6 py-2 border-l-0 border-2 border-black rounded-tr-md rounded-br-md">
            Reviews (1)
          </button>
        </div>
        <div className="mt-20">
          <h4 className="my-6 ">Description</h4>
          <div className="w-full bg-black h-[1px] my-6"></div>
          <p className="font-light mb-20">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProducePage;
