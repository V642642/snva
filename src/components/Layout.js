import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="w-full">
      <Header />
    
      <div className="flex items-center justify-between">
      <div className=" w-full flex flex-col items-start justify-start top-[80px] left-0 h-[calc(100vh-80px)] border-r-2 border-blue-500  sm:w-[420px]">
        <Link to={'/'} className="px-10 py-2 text-left transition-all  duration-500 cursor-pointer hover:text-white hover:bg-blue-700 w-full">
          Contact
        </Link>
        <Link to={'/chart'} className="px-10 py-2 text-left transition-all  duration-500 cursor-pointer hover:text-white hover:bg-blue-700 w-full">
          Charts and Maps
        </Link>
      </div>
      {children}
      </div>
      
    </div>
  );
}
