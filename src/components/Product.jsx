import { NavLink } from "react-router-dom";

const Product = ({to, img, off}) => {
  return (
    <div className="flex flex-col items-center bg-red-100 p-3">
      <NavLink to={`/products/${to}`} className="flex flex-col items-center text-center w-60 max-sm:w-1/4">
        <img src={img} alt="LG logo" className="w-full my-3 " />
        <span className="font-bold text-red-900 text-xl">{off}%</span>
      </NavLink>
    </div>
  );
};

export default Product;
