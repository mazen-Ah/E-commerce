import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
const SideNav = ({ menu, setMenu }) => {
  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-20 z-40 ">
      <div className="bg-white w-4/6 max-w-sm h-full">
        <div className="grid divide-y">
          <div
            onClick={() => setMenu(false)}
            className="px-4 pt-6 pb-3 cursor-pointer"
          >
            <AiOutlineClose className="text-2xl opacity-40 font-bold" />
          </div>
          <div className="p-4">
            <ul>
              <Link to="/" className="text-gray-900 font-medium">
                <li className="p-2">Home</li>
              </Link>
              <Link to="/Shop" className="text-gray-900 font-medium">
                <li className="p-2">Shop</li>
              </Link>
              <Link className="text-gray-900 font-medium">
                <li className="p-2">Contact Us</li>
              </Link>
            </ul>
          </div>
          <div className="p-4">
            <ul>
              <Link className="text-gray-900 font-medium">
                <li className="p-2">Sign in</li>
              </Link>
              <Link className="text-gray-900 font-medium">
                <li className="p-2">Create account</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal-leftSide")
  );
};

export default SideNav;
