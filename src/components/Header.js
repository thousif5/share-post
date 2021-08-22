import React, { useState, useEffect } from "react";
import "../style/main.css";

function Header() {
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <div
      className={`fixed w-full bg-red-100 z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-white blur shadow-lg"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="p-4 flex justify-between items-center">
          <div className="logo-images flex">
            <h1 className="text-2xl font-bold">SharePost</h1>
          </div>
          <div className="menu flex px-2">
            {/* eslint-disable-next-line*/}
            <a
              href="#"
              className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
            >
              Sign in
            </a>
            {/* eslint-disable-next-line*/}
            <a
              href="#"
              className="rounded my-4 px-4 py-3 text-gray-200 bg-red-400 hover:bg-red-600 transition duration-300"
            >
              <span className="p-2">Sign up</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
