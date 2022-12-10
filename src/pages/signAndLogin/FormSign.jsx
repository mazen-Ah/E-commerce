import React from "react";
import InputForm from "./InputForm";
import { Link, useNavigate, useLocation } from "react-router-dom";

const FormSign = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries([...new FormData(e.currentTarget)]);
    console.log(formData);
  };
  const { pathname, search, key, state, hash } = useLocation();
  console.log(pathname);
  console.log(hash);
  console.log(state);
  console.log(key);
  return (
    <div className="flex justify-center flex-col items-center">
      <h3 className="text-2xl font-bold my-3">Sign Up</h3>
      <form onSubmit={handleSubmit} className="w-1/4" action="">
        <InputForm placeholder="Username" name="username" />
        <InputForm placeholder="Email" name="email" />
        <InputForm placeholder="Password" name="password" />
        <button
          className="w-full bg-[#000000] text-white text-[9px] py-2 rounded-md"
          type="submit"
          onClick={() => navigate("../login")}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default FormSign;
