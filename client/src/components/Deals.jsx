import Product from "./Product.jsx";
import ejeImg from "../assets/imgs/ejeImg.png";
import { useEffect, useState } from "react";
import productData from "./productData.json";
import { currency } from "../globalDataHandler.js";

const Deals = ({ limit }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const data = productData;
      setProducts(data);
    };
    fetchData();
  }, []);

  let index = -1;
  return (
    <section className="flex flex-col pt-4 w-full md:bg-white">
      <div className="flex pl-4">
        <h1 className="font-medium text-red-700 text-2xl">Today's Deals</h1>
      </div>
      <div className="flex flex-wrap pt-4 md:px-6 justify-start">
        {products.map((product) => {
          if (product.discount != 0) {
            limit != null ? index++ : null;
            return index < limit || index == -1 ? (
              <Product
                key={product.id}
                to={`products/${product.id}`}
                img={ejeImg}
                name={product.name}
                regular_price={product.regular_price}
                discount={product.discount}
                currency={currency}
              />
            ) : null;
          } else {
            return null;
          }
        })}
      </div>
    </section>
  );
};

export default Deals;
