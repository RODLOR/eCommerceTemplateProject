import logo from "../assets/imgs/logo.svg";
import { NavLink } from "react-router-dom";
import SearchField from "./SearchField";
// import { useState } from "react";

const NavBar = () => {
  // let [menu, setMenu] = useState("md:hidden hidden");

  // const toggleMenu = () => {
  //   setMenu(() => {
  //     return menu == "md:hidden hidden" ? "flex flex-col" : "md:hidden hidden";
  //   });
  // };
  return (
    <nav className="bg-gray-100 flex flex-col w-full px-4 mx-auto">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div id="logoContainer">
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
          <NavLink
            to="/login"
            className="self-center py-2 px-3 bg-red-400 hover:bg-red-300 text-red-900 hover:text-red-800 rounded transition duration-300"
          >
            Login
          </NavLink>
        </div>

          <SearchField></SearchField>
    </nav>
  );
};

export default NavBar;
