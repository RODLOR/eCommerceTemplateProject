import categoriesData from "./categoriesDataEx.json";
import logo from "../assets/imgs/logo.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CategoriesGrid = ({ limit }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      const data = categoriesData;
      setCategories(data);
    };
    fetchData();
  }, []);

  let index = -1;

  return (
    <section className="flex flex-col p-4 w-full md:bg-white">
      <div className="md:flex hidden pb-2">
        <h1 className="font-medium text-gray-800 text-2xl">Categories</h1>
      </div>
      <div className="flex flex-wrap md:justify-start">
        {categories.map((e) => {
          limit != null ? index++ : null;
          return index < limit || index == -1 ? (
            <div className="flex flex-col w-1/4 md:flex-row md:p-2"
            key={e.id}>
              <Link
                to={`/categories/${e.name}`}
                className="flex flex-col md:flex-row md:p-7 md:flex-nowrap md:bg-gray-200 w-full md:justify-start justify-center text-center"
              >
                <img
                  src={logo}
                  alt=""
                  className="w-14 self-center m-0 md:mr-4"
                />
                <span className="py-4">{e.name}</span>
              </Link>
            </div>
          ) : null;
        })}
        {limit >= 7 ? (
          <div className="flex flex-col w-1/4 md:flex-row md:p-2">
            <Link
              to={`/categories`}
              className="flex flex-col md:flex-row md:p-7 md:flex-nowrap md:bg-gray-200 w-full md:justify-start justify-center text-center"
            >
              <img src={logo} alt="" className="w-14 self-center m-0 md:mr-4" />
              <span className="py-4">More</span>
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default CategoriesGrid;
