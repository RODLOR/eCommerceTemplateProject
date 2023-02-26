import { NavLink } from "react-router-dom";

const Product = ({ to, img, off, title }) => {
  return (
    <div className="flex flex-col pr-5 mb-12 text-start">
      <NavLink to={`/products/${to}`} className="flex flex-col w-60">
        <img src={img} alt={title} className="w-full" />
        <div className="absolute w-60 text-right">
        <span className="font-bold text-white text-md bg-red-400 p-1">
          -{off}%
        </span>
        </div>
        <div id="productInfo">
          <span>{title}</span>
          <div className="flex gap-1">
            <span id="discontPrice" className="font-bold text-xl">
              350$
            </span>
            <span
              id="originalPrice"
              className="text-md line-through text-gray-500 p-1"
            >
              400$
            </span>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Product;
