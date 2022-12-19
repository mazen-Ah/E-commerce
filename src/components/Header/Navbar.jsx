import React, { useState } from "react";
import NoticeSignIn from "./NoticeSignIn";
import NoticeOrders from "./NoticeOrders";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { rematch, recheck } from "../../store/ProductsSearchSlice";
import { Sign, order } from "../../store/Notice";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { useGetProductsQuery } from "../../store/Api/apiSlice";
import { clsx } from "clsx";

import Menu from "./Menu";

const Navbar = () => {
  const { pathname } = useLocation();
  const { data } = useGetProductsQuery();
  const { toggleSign, toggleOrder } = useSelector((state) => state.Notice);
  const { match, check } = useSelector((state) => state.Search);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function findProduct(wordToSearch, ps) {
    return ps.filter((prod) => {
      const regex = new RegExp(wordToSearch, "gi");
      return prod.title.match(regex);
    });
  }
  function log(e) {
    const matchArray = findProduct(e.target.value, data);
    dispatch(rematch(matchArray));
  }
  const [menu, setMenu] = useState(false);
  return (
    <>
      {pathname === "/login" || pathname === "/Sign" ? (
        <div className="py-5 flex justify-between">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            <AiOutlineShoppingCart className="mx-1 text-sm" />
            <h1 className="text-xs font-bold">Logo</h1>
          </div>
          <div>
            <p className="text-[8px] font-semibold">
              Already have an account?
              <span className="underline cursor-pointer ml-[1px]">
                {pathname === "/login" ? "Sign Up" : "Login in"}
              </span>
            </p>
          </div>
        </div>
      ) : (
        <div className="py-5 flex justify-between relative items-center">
          <Menu menu={menu} setMenu={setMenu} />
          <Link to="/">
            <div className="flex items-center cursor-pointer ">
              <AiOutlineShoppingCart className="mx-1 text-lg" />
              <h1 className="text-lg font-bold">Logo</h1>
            </div>
          </Link>
          <div className="flex ">
            <ul className="flex max-sm:hidden justify-between gap-x-4 items-center mx-4">
              <li className="text-base px-2 cursor-pointer rounded-md">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="text-base px-2 cursor-pointer">
                <NavLink to="/Shop">Shop</NavLink>
              </li>
              <li className="text-base px-2 py-2 cursor-pointer">Contact Us</li>
            </ul>
            <label
              className="border-2 rounded flex items-center mx-2 relative"
              htmlFor="search"
            >
              <AiOutlineSearch className="opacity-50 mx-1 cursor-pointer " />
              <input
                id="search"
                className="outline-none max-sm:w-3"
                type="search"
                placeholder="Search..."
                onKeyUp={(e) => log(e)}
                onChange={(e) => dispatch(recheck(e.target.value))}
              />
              <ul
                id="List"
                className={clsx(
                  check ? "" : "hidden",
                  "absolute top-full w-full mt-[1.5px] divide-y z-50"
                )}
              >
                {match?.map(({ url, title, tag }) => {
                  return (
                    <li className="p-2 bg-[#F2F2F2] flex cursor-pointer hover:opacity-90">
                      <div className="">
                        <img className="h-8" src={url} alt="" />
                      </div>
                      <div className="text-xs ml-3 ">
                        <h3 className="font-semibold text-xs hover:underline">
                          {title}
                        </h3>
                        <h6 className="text-[7px] font-bold">{tag}</h6>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </label>
            <div className="flex items-center ml-2 relative">
              <div
                className="flex items-center cursor-pointer"
                onClick={() => dispatch(Sign())}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                <span className="text-xs">(1)</span>
              </div>
              {toggleSign && <NoticeSignIn />}
              {toggleOrder && <NoticeOrders />}
              <div
                className="flex items-center mx-4 cursor-pointer"
                onClick={() => dispatch(order())}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
