import logo from "../assets/imgs/logo.svg";
import { NavLink } from "react-router-dom";
import SearchField from "./SearchField";
import LoginModal from "./LoginModal";
import { useState, useEffect, useRef } from "react";
import categoriesData from "./categoriesDataEx.json";

const NavBar = () => {

  const listaRef = useRef(null);

  const handleScrollLeft = () => {
    listaRef.current.scrollLeft -= 100;
  };

  const handleScrollRight = () => {
    listaRef.current.scrollLeft += 100;
  };

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const data = categoriesData;
      setCategories(data);
    };
    fetchData();
  }, []);

  return (
    <nav className="fixed z-50 inset-x-0 top-0 flex flex-col w-full mx-auto">
      <div className="flex justify-between text-center px-4 bg-white ">
        <div id="logoContainer" className="flex">
          <NavLink
            to="/"
            className="flex items-center text-gray-700 hover:text-gray-900"
          >
            <img className="h-6 w-6 mr-1" src={logo} alt="" />
            <span className="font-medium text-xl">Template</span>
          </NavLink>
        </div>
        <div className="flex">
          <NavLink
            to="/shopping-car"
            className="self-center p-3 hover:bg-gray-100 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#242424"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="10" cy="20.5" r="1" />
              <circle cx="18" cy="20.5" r="1" />
              <path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1" />
            </svg>
          </NavLink>
          <LoginModal />
        </div>
      </div>
      <div className="flex justify-between md:justify-start shadow-sm bg-white md:flex-nowrap flex-wrap-reverse md:px-4">
      <div className="flex flex-col justify-center">
      <button onClick={handleScrollLeft} className="hidden md:block mb-2 hover:bg-gray-100 rounded-sm h-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
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
          </div>
        <div ref={listaRef} className='w-full flex md:overflow-x-hidden overflow-y-hidden flex-nowrap pb-2 justify-between md:pr-2 scrollbar-hidden'>
          <div className="flex flex-nowrap gap-x-2 md:gap-x-5" >
            {categories.map((e) => {
              return (
                <NavLink
                  key={e.id}
                  to={`/categories/${e.name}`}
                  className=" text-gray-700 hover:text-gray-900 p-2 text-md font-medium"
                >
                  <span className="w-full inset-0 whitespace-nowrap">{e.name}</span>
                </NavLink>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col justify-center">
        <button onClick={handleScrollRight} className="hidden md:block mb-2 hover:bg-gray-100 mr-2 rounded-sm h-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
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
    </nav>
  );
};

export default NavBar;
