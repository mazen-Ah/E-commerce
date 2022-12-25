import React from "react";

const BillingDetails = ({ address, setAddress }) => {
  return (
    <div className="">
      <h6 className="font-bold text-2xl py-2">Billing details</h6>
      <div className="flex justify-between items-center py-6">
        <h6 className="font-bold">Current Address</h6>
        <button className="bg-black text-white white py-3 px-6 rounded-lg">
          Add new
        </button>
      </div>
      {/* <form className="grid">
        <input className="border-2" type="text" />
        <input className="border-2" type="text" />
        <input className="border-2" type="text" />
      </form> */}
      <div className="bg-[#ECECEC] py-3 px-6 rounded-lg">
        <div className="py-2 text-xs font-medium">
          Name :<span> Annette Black</span>
        </div>
        <div className="py-2 text-xs font-medium">
          Address:<span> 3891 Ranchview Dr. Richardson, California 62639</span>
        </div>
        <div className="py-2 text-xs font-medium">
          Phone:<span> (307) 555-0133</span>
        </div>
      </div>
    </div>
  );
};

export default BillingDetails;
