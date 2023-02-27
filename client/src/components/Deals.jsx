import Product from "./Product.jsx";
import ejeImg from "../assets/imgs/ejeImg.png";
import { useEffect, useState } from "react";
import productData from "./productData.json";
import {currency} from "../globalDataHandler.js";

const Deals = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      const data = productData;
      setProducts(data);
    };
    fetchData();
  }, []);
  return (
    <section className="flex flex-col py-4 w-full bg-white">
      <div className="flex pl-4">
        <h1 className="font-medium text-red-700 text-2xl">Today's Deals</h1>
      </div>
      <div className="flex flex-wrap pt-4 px-1 md:px-6 justify-center">
        {products.map((product) =>
          product.discount != 0 ? (
            <Product
              key={product.id}
              to={`products/${product.id}`}
              img={ejeImg}
              name={product.name}
              regular_price={product.regular_price}
              discount={product.discount}
              currency={currency}
            />
          ) : null
        )}
      </div>
    </section>
  );
};

export default Deals;
