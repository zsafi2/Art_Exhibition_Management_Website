import React from "react";
import LoginForm from "../../components/LoginForm";

const Login = () => {
  return (
    // <div className="bg-white text-black min-h-screen">
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <LoginForm />
      </div>
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
        <div className="w-60 h-60 bg-gradient-to-tr from-[#2E3192] to-[#1BFFFF] rounded-full animate-bounce"></div>
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg"></div>
      </div>
    </div>
    // </div>
  );
};

export default Login;
