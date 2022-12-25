import React from "react";
import { Link } from "react-router-dom";

const NoticeOrders = () => {
  return (
    <div className="absolute top-full right-1/3 bg-white p-2 rounded border-2 w-28 z-10">
      <Link to="/cart">
        <div className="hover:underline text-xs mb-2 cursor-pointer">
          Manage orders
        </div>
      </Link>
      <div className="hover:underline text-xs -mb-1 cursor-pointer">
        Log Out
      </div>
    </div>
  );
};

export default NoticeOrders;
