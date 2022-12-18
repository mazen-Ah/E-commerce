import React, { useState } from "react";
import { clsx } from "clsx";
import { useParams } from "react-router";
import { useGetProductsQuery } from "../store/Api/apiSlice";
import { useGetOneProductQuery } from "../store/Api/apiSlice";
import { RxAvatar } from "react-icons/rx";
const ProducePage = () => {
  const [taps, setTaps] = useState(false);
  const { productId } = useParams();
  const { data } = useGetOneProductQuery(productId);
  // const [stars, setStars] = useState(data?.rate);
  // console.log(stars);
  return (
    <div className="my-10">
      <div className="max-sm:grid-cols-1 grid grid-cols-2 items-center gap-10">
        <div className=" items-center">
          <div className="flex justify-center items-center bg-gradient-to-br from-black/40 to-black/10">
            <img className="w-full" src={data?.url} alt="" />
          </div>
          <div className="my-4">
            <div className="grid grid-cols-4 gap-6 ">
              <div className="hover:opacity-70 cursor-pointer bg-gradient-to-br from-black/40 to-black/10 border-[1px] border-white hover:border-[1px] hover:border-black rounded-md">
                <img className="" src={data?.url} alt="" />
              </div>
              <div className="hover:opacity-70 cursor-pointer bg-gradient-to-br from-black/40 to-black/10 border-[1px] border-white hover:border-[1px] hover:border-black rounded-md">
                <img className="" src={data?.url} alt="" />
              </div>
              <div className="hover:opacity-70 cursor-pointer bg-gradient-to-br from-black/40 to-black/10 border-[1px] border-white hover:border-[1px] hover:border-black rounded-md">
                <img className="" src={data?.url} alt="" />
              </div>
              <div className="hover:opacity-70 cursor-pointer bg-gradient-to-br from-black/40 to-black/10 border-[1px] border-white hover:border-[1px] hover:border-black rounded-md">
                <img className="" src={data?.url} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="grid px-4 ">
          <h2 className="text-2xl font-bold my-4">{data?.title}</h2>
          <h4 className="text-xl font-medium my-4">{data?.price}$</h4>
          <div className="flex">
            {/* {star()} */}
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
          <p className="my-4 font-light">{data?.Description}</p>
          <div className="font-semibold my-4">
            {data?.stock > 0 ? (
              <h6>{`In stock : ${data?.stock}`}</h6>
            ) : (
              <h6 className="opacity-40 my-4 font-semibold">out of stock </h6>
            )}
          </div>

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
          <button
            className={clsx(
              taps ? "" : "text-white bg-black",
              "  px-6 py-2 rounded-tl-md rounded-bl-md border-2 border-black"
            )}
            onClick={() => setTaps(false)}
          >
            Description
          </button>
          <button
            className={clsx(
              taps ? "bg-black text-white" : "",
              "px-6 py-2 border-l-0 border-2 border-black rounded-tr-md rounded-br-md"
            )}
            onClick={() => setTaps(true)}
          >
            Reviews (1)
          </button>
        </div>
        {taps ? (
          <div className="my-12 grid gap-y-16">
            <div className="flex flex-wrap justify-between items-center bg-[#ECECEC] p-5 rounded">
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-x-4">
                  <RxAvatar className="text-2xl" />
                  <div className="grid">
                    <h5 className="text-sm font-semibold">Wade Warren</h5>
                    <p className="text-xs">added at : 10 march 2022</p>
                  </div>
                </div>
                <div>stars</div>
              </div>
              <div className="h-[1px] bg-black w-full my-5"></div>
              <div>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>

            <div className="my-16">
              <div>
                <h5 className="text-4xl font-bold">Add a review</h5>
                <h6 className="text-base font-semibold my-4">
                  Your rating <span>stars</span>
                </h6>
              </div>
              <div className="">
                <form className="grid mt-10 items-center">
                  <label htmlFor="review">Your review</label>
                  <textarea
                    name="review"
                    id="review"
                    className="border-[2px] border-black w-2/3 h-48 rounded-md border-opacity-20 shadow-md mt-2"
                    placeholder="Type your review..."
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-black text-white w-fit text-sm my-6 py-2 px-5 font-normal rounded"
                  >
                    submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-20">
            <h4 className="my-6">Description</h4>
            <div className="w-full bg-black h-[1px] my-6"></div>
            <p className="font-light mb-20">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages,
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProducePage;
