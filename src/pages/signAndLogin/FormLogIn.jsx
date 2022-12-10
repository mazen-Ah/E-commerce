import React from "react";
import InputForm from "./InputForm";
import { Link, useNavigate } from "react-router-dom";

const FormLogIn = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries([...new FormData(e.currentTarget)]);
    console.log(formData);
  };
  return (
    <div className="flex justify-center flex-col items-center">
      <h3 className="text-2xl font-bold my-3">Log In</h3>
      <form onSubmit={handleSubmit} className="w-1/3" action="">
        <InputForm placeholder="Username" name="username" />
        <InputForm placeholder="Password" name="password" />
        <button
          className="w-full bg-[#000000] text-white text-[9px] py-2 rounded-md"
          type="submit"
          onClick={() => navigate("../")}
        >
          Sign Up
        </button>
      </form>
      <h6 className="underline">Forgot your password?</h6>
    </div>
  );
};

export default FormLogIn;
