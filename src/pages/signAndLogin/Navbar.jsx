import React from "react";
import { useNavigate, useLocation } from "react-router";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  const { pathname, search, key, state, hash } = useLocation();
  console.log(pathname);
  const navigate = useNavigate();
  return (
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
  );
};

export default Navbar;
