import React from "react";
import Container from "../components/Container";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className=" h-screen bg-gray-100 font-work">
      <div className="flex h-screen flex-col justify-center sm:flex-row sm:items-center">
        <div className="h-1/2 sm:flex sm:h-full sm:w-1/2 sm:items-center">
          <img src="images/login.svg" alt="login" />
        </div>
        <div className=" flex h-1/2 flex-col items-center justify-center bg-white sm:h-full sm:w-1/2">
          <h1 className="text-6xl font-bold text-slate-700 sm:text-4xl md:text-6xl">
            <span className=" text-primary">Chat</span>Zone
          </h1>
          <div className="mt-5 flex cursor-pointer items-center gap-x-3 rounded-full border border-primary py-3 px-8 text-lg font-semibold shadow-lg">
            <FcGoogle />
            <p className="text-slate-600">Login with google</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

{
  /* <div className=" h-screen bg-gray-100 font-work">
<div className="flex h-screen flex-col justify-center bg-gray-100 md:flex md:flex-row">
  <div className=" w-full md:w-1/2">
    <img src="images/login.svg" alt="Login" />
  </div>
  <div className=" flex h-full w-full flex-col items-center bg-white md:h-screen md:w-1/2 md:justify-center">
    <h1 className="text-6xl font-bold text-slate-700">
      <span className=" text-primary">C</span>hatly
    </h1>
    <div className="mt-5 flex cursor-pointer items-center gap-x-3 rounded-full border border-primary py-3 px-8 text-lg font-semibold shadow-lg">
      <FcGoogle />
      <p className="text-slate-600">Login with google</p>
    </div>
  </div>
</div>
</div> */
}
