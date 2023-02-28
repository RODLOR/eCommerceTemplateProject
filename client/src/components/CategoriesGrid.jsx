import categoriesData from "./categoriesDataEx.json";
import logo from "../assets/imgs/logo.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CategoriesGrid = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      const data = categoriesData;
      setCategories(data);
    };
    fetchData();
  }, []);

  return (
    <section className="flex flex-col py-4 w-full bg-white">
      <div className="flex pl-4">
        <h1 className="font-medium text-gray-800 text-2xl">Categories</h1>
      </div>
      <div className="flex flex-wrap pt-4 px-1 md:px-6 justify-center gap-4">
        {categories.map((e) => {
          return (
            <Link
              key={e.id}
              to={`/categories/${e.name}`}
              className="flex gap-x-2 text-gray-700 hover:text-gray-900 p-2 text-md font-medium w-72 bg-gray-200 hover:bg-gray-300 transition-all duration-300"
            >
              <img src={logo} alt="" />
              <span className="py-4" >{e.name}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default CategoriesGrid;
