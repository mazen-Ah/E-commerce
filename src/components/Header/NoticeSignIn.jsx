import React from "react";
import { Link } from "react-router-dom";
const NoticeSignIn = () => {
  return (
    <div className="absolute top-full right-1/3 bg-white p-2 rounded border-2 w-full z-10">
      <div className="hover:underline text-[8px] mb-2 cursor-pointer">
        <Link to="/login">Sign In</Link>
      </div>
      <div className="hover:underline text-[8px] -mb-1 cursor-pointer">
        <Link to="Sign">Create An Account</Link>
      </div>
    </div>
  );
};

export default NoticeSignIn;
