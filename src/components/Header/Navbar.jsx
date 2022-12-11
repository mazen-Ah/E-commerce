import React, { useState } from "react";
import NoticeSignIn from "./NoticeSignIn";
import NoticeOrders from "./NoticeOrders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Sign, order } from "../../store/Notice";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  const { pathname } = useLocation();
  const { toggleSign, toggleOrder } = useSelector((state) => state.Notice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(pathname);
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
        <div className="py-5 flex justify-between">
          <div className="flex items-center cursor-pointer">
            <AiOutlineShoppingCart className="mx-1 text-sm" />
            <h1 className="text-sm font-bold">Logo</h1>
          </div>
          <div className="flex ">
            <ul className="flex justify-between gap-x-4 items-center mx-4">
              <li className="text-xs cursor-pointer hover:underline">
                <Link to="/">Home</Link>
              </li>
              <li className="text-xs cursor-pointer hover:underline">
                <Link to="/Shop">Shop</Link>
              </li>
              <li className="text-xs cursor-pointer hover:underline">
                Contact Us
              </li>
            </ul>
            <label
              className="border-2 rounded flex items-center mx-2"
              htmlFor="search"
            >
              <AiOutlineSearch className="opacity-50 mx-1 cursor-pointer" />
              <input
                id="search"
                className="outline-none"
                type="search"
                placeholder="Search..."
              />
            </label>
            <div className="flex items-center ml-2 relative">
              <div
                className="flex items-center mx-4 cursor-pointer"
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
