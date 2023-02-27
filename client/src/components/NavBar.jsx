import logo from "../assets/imgs/logo.svg";
import { NavLink } from "react-router-dom";
import SearchField from "./SearchField";
import LoginModal from "./LoginModal";
import React, { useState, useEffect } from "react";
import { bannerText } from "../globalDataHandler";

const NavBar = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed z-50 inset-x-0 top-0 flex flex-col w-full mx-auto">
      <div className="flex justify-between text-center py-2 px-4 bg-white">
        <div id="logoContainer" className="flex">
          <NavLink
            to="/"
            className="flex items-center text-gray-700 hover:text-gray-900"
          >
            <img className="h-6 w-6 mr-1" src={logo} alt="" />
            <span className="font-bold">Template</span>
          </NavLink>
        </div>
        <LoginModal />
      </div>
      <div className="flex md:justify-between justify-center pb-2 px-4 shadow-sm bg-white">
        <div className="hidden md:flex gap-2 flex-nowrap">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <div className="flex gap-x-4">
            {" "}
            <NavLink
              to="/deals"
              className=" text-gray-700 hover:text-gray-900 p-2"
            >
              <span>Deals</span>
            </NavLink>
            <NavLink
              to="/deals"
              className=" text-gray-700 hover:text-gray-900 p-2"
            >
              <span>Deals</span>
            </NavLink>
            <NavLink
              to="/deals"
              className=" text-gray-700 hover:text-gray-900 p-2"
            >
              <span>Deals</span>
            </NavLink>
            <NavLink
              to="/deals"
              className=" text-gray-700 hover:text-gray-900 p-2"
            >
              <span>Deals</span>
            </NavLink>
            <NavLink
              to="/deals"
              className=" text-gray-700 hover:text-gray-900 p-2"
            >
              <span>Deals</span>
            </NavLink>
            <NavLink
              to="/more"
              className=" text-gray-700 hover:text-gray-900 p-2"
            >
              <span>More...</span>
            </NavLink>
          </div>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
        <SearchField />
      </div>
      {bannerText != ""? <div
        className={`shadow-sm transition-all duration-300 ease-in-out -z-10 ${
          scrollY > 0 ? "-translate-y-60" : "-translate-y-0 "
        } text-center px-12 py-1 bg-red-400`}
      >
        <span className="text-lg font-medium text-white ">{bannerText}</span>
      </div>: null}
    </nav>
  );
};

export default NavBar;
