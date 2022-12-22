import logo from "../assets/imgs/logo.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  let [menu, setMenu] = useState("md:hidden hidden");

  const toggleMenu = () => {
    setMenu(() => {
      return menu == "md:hidden hidden" ? "flex flex-col" : "md:hidden hidden";
    });
  };
  return (
    <nav className="bg-gray-100 w-screen">
      <div className="max-w-full mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <NavLink
                to="/"
                className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
              >
                <img className="h-6 w-6 mr-1" src={logo} alt="" />
                <span className="font-bold">Tech Commerce</span>
              </NavLink>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <NavLink
                to="/smartphones"
                className="py-5 px-3 text-gray-700 hover:text-gray-900"
              >
                Smartphones
              </NavLink>
              <NavLink
                to="/tablets"
                className="py-5 px-3 text-gray-700 hover:text-gray-900"
              >
                Tablets
              </NavLink>
              <NavLink
                to="/laptops"
                className="py-5 px-3 text-gray-700 hover:text-gray-900"
              >
                Laptops
              </NavLink>
              <NavLink
                to="/videogames"
                className="py-5 px-3 text-gray-700 hover:text-gray-900"
              >
                Video Games
              </NavLink>
              <NavLink
                to="/deals"
                className="py-5 px-3 text-gray-700 hover:text-gray-900"
              >
                Deals
              </NavLink>
              <NavLink
                to="/more"
                className={"py-5 px-3 text-gray-700 hover:text-gray-900"}
              >
                More...
              </NavLink>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <NavLink
              to="/login"
              className="py-2 px-3 bg-red-400 hover:bg-red-300 text-red-900 hover:text-red-800 rounded transition duration-300"
            >
              Login
            </NavLink>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="mobile-menu-button">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          "mobile-menu bg-gray-200 border-gray-400 border-t pt-1 pb-1 " + menu
        }
      >
        <NavLink
          to="/smartphones"
          className="py-3 px-3 text-gray-700 hover:text-gray-900"
          onClick={toggleMenu}
        >
          Smartphones
        </NavLink>
        <NavLink
          to="/tablets"
          className="py-3 px-3 text-gray-700 hover:text-gray-900"
          onClick={toggleMenu}
        >
          Tablets
        </NavLink>
        <NavLink
          to="/laptops"
          className="py-3 px-3 text-gray-700 hover:text-gray-900"
          onClick={toggleMenu}
        >
          Laptops
        </NavLink>
        <NavLink
          to="/videogames"
          className="py-3 px-3 text-gray-700 hover:text-gray-900"
          onClick={toggleMenu}
        >
          Video Games
        </NavLink>
        <NavLink
          to="/deals"
          className="py-3 px-3 text-gray-700 hover:text-gray-900"
          onClick={toggleMenu}
        >
          Deals
        </NavLink>
        <NavLink
          to="/more"
          className="py-3 px-3 text-gray-700 hover:text-gray-900"
          onClick={toggleMenu}
        >
          More...
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
