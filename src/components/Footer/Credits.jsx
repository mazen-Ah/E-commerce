import React from "react";

const Credits = () => {
  return (
    <div className="flex justify-between pt-5 pb-10 w-full">
      <h6 className="text-xs">All right reserved.</h6>

      <div className="flex sm:gap-x-4 underline max-sm:flex-col">
        <a className="text-xs" href="#">
          Privacy Policy
        </a>
        <a className="text-xs" href="#">
          Terms of Service
        </a>
        <a className="text-xs" href="#">
          Cookies Settings
        </a>
      </div>
    </div>
  );
};

export default Credits;
