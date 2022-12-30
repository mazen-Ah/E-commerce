import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
const Categorys = ({ item, title, setTag }) => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  const handleList = (e) => {
    setData((prev) => new Set([...prev, e.target.outerText]));
  };
  console.log(data);
  function handleReview(e) {
    e.preventDefault();
    const formData = Object.fromEntries([...new FormData(e.currentTarget)]);
    console.log(formData);
  }
  return (
    <div className="grid">
      <div className="py-4 border-b">
        <h3 className="">
          <button
            onClick={() => {
              setShow((prev) => !prev);
            }}
            className="flex justify-between w-full items-center py-2"
          >
            <span className="text-sm tracking-wide font-bold text-gray-800 hover:text-gray-900">
              {title}
            </span>
            <span className="text-sm">
              {show ? (
                <AiOutlineMinus className="text-[#9CA3AF]" />
              ) : (
                <BsPlusLg className="text-[#9CA3AF]" />
              )}
            </span>
          </button>
        </h3>
        {show && (
          <form>
            <ul className="my-3">
              {item.Category.map((item, i) => {
                return (
                  <li key={i} className="flex mb-4">
                    <input
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 text-sm border-gray-300 rounded-md"
                      id={item}
                      type="checkbox"
                      name={item}
                    />
                    <label
                      className="ml-2 text-gray-600 text-sm"
                      htmlFor={item}
                      onClick={(e) => handleList(e)}
                    >
                      {item}
                    </label>
                  </li>
                );
              })}
            </ul>
            <button>Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Categorys;
