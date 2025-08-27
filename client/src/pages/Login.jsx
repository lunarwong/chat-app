import React from "react";
import SignInPanel from "../components/SignInPanel";

const Login = () => {
  return (
    <div className="w-full h-screen sm:px-[15%] sm:py-[5%]">
      
      <div className="h-[100%] overflow-hidden 
        grid grid-cols-1 relative
        md:grid-cols-2
        items-center
        justify-center
      ">

        {/* logo */}
        <div className="flex flex-col items-center gap-2">
          <img src="./src/assets/icons/catChatIcon.PNG" alt="logo" className="max-w-50" />
          <h1 className="text-white text-2xl">Let's have a C(h)at !</h1>
        </div>

        <SignInPanel />

      </div>
      
    </div>
  )
} 
export default Login;