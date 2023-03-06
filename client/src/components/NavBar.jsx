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
        <div className="flex items-center">
          <NavLink
            to="/shopping-car"
            className="flex items-center"
          >
            <span className="font-medium text-md pr-1 text-gray-500 ">2560$</span>
            <svg
              width="32px"
              height="32px"
              viewBox="-6 -6 36.00 36.00"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
              strokeWidth="0.00024000000000000003"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0">
                <rect
                  x="-6"
                  y="-6"
                  width="36.00"
                  height="36.00"
                  rx="18"
                  fill="#ebebeb"
                  strokeWidth="0"
                ></rect>
              </g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M4.46785 10.2658C4.47574 10.3372 4.48376 10.4094 4.49187 10.4823L4.61751 11.6131C4.7057 12.4072 4.78218 13.0959 4.91562 13.6455C5.05917 14.2367 5.29582 14.7937 5.78931 15.2354C6.28281 15.6771 6.86251 15.8508 7.46598 15.9281C8.02694 16.0001 8.71985 16 9.51887 16H14.8723C15.4201 16 15.9036 16 16.3073 15.959C16.7448 15.9146 17.1698 15.8162 17.5785 15.5701C17.9872 15.324 18.2731 14.9944 18.5171 14.6286C18.7422 14.291 18.9684 13.8637 19.2246 13.3797L21.7141 8.67734C22.5974 7.00887 21.3879 4.99998 19.5 4.99998L9.39884 4.99998C8.41604 4.99993 7.57525 4.99988 6.90973 5.09287C6.5729 5.13994 6.24284 5.21529 5.93326 5.34375L5.78941 4.04912C5.65979 2.88255 4.67375 2 3.5 2H3C2.44772 2 2 2.44771 2 3C2 3.55228 2.44772 4 3 4H3.5C3.65465 4 3.78456 4.11628 3.80164 4.26998L4.46785 10.2658Z"
                  fill="#323232"
                ></path>{" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14 19.5C14 18.1193 15.1193 17 16.5 17C17.8807 17 19 18.1193 19 19.5C19 20.8807 17.8807 22 16.5 22C15.1193 22 14 20.8807 14 19.5Z"
                  fill="#323232"
                ></path>{" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5 19.5C5 18.1193 6.11929 17 7.5 17C8.88071 17 10 18.1193 10 19.5C10 20.8807 8.88071 22 7.5 22C6.11929 22 5 20.8807 5 19.5Z"
                  fill="#323232"
                ></path>{" "}
              </g>
            </svg>
          </NavLink>
          <LoginModal />
        </div>
      </div>
      <div className="flex justify-center md:justify-start shadow-sm bg-white md:flex-nowrap flex-wrap-reverse md:px-4">
        <div className="flex flex-col justify-center">
          <button
            onClick={handleScrollLeft}
            className="hidden md:block mb-2 hover:bg-gray-100 rounded-sm h-8"
          >
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
        <div
          ref={listaRef}
          className="w-full flex overflow-hidden flex-nowrap pb-2 justify-between md:pr-2"
        >
          <div className="flex flex-nowrap gap-x-2 md:gap-x-5">
            <NavLink
              to={`/deals`}
              className=" text-gray-700 hover:text-gray-900 p-2 text-md font-medium"
            >
              <span className="w-full inset-0 whitespace-nowrap">Deals</span>
            </NavLink>
            {categories.map((e) => {
              return (
                <NavLink
                  key={e.id}
                  to={`/categories/${e.name}`}
                  className=" text-gray-700 hover:text-gray-900 p-2 text-md font-medium"
                >
                  <span className="w-full inset-0 whitespace-nowrap">
                    {e.name}
                  </span>
                </NavLink>
              );
            })}
            <NavLink
              to={`/categories`}
              className=" text-gray-700 hover:text-gray-900 p-2 text-md font-medium"
            >
              <span className="w-full inset-0 whitespace-nowrap">More</span>
            </NavLink>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <button
            onClick={handleScrollRight}
            className="hidden md:block mb-2 hover:bg-gray-100 mr-2 rounded-sm h-8"
          >
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
