import React from "react";

const NoticeOrders = () => {
  return (
    <div className="absolute top-full right-1/3 bg-white p-2 rounded border-2 w-full z-10">
      <div className="hover:underline text-[8px] mb-2 cursor-pointer">
        Manage orders
      </div>
      <div className="hover:underline text-[8px] -mb-1 cursor-pointer">
        Log Out
      </div>
    </div>
  );
};

export default NoticeOrders;
