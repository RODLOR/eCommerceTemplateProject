import { NavLink } from "react-router-dom";

const Product = ({ to, img, name, regular_price, discount, currency }) => {
  const line =
    discount != 0
      ? "text-md line-through text-gray-500 p-1"
      : "text-xl font-bold";
  let discountNum = regular_price - regular_price * discount;
  const discountNumRound = Math.round(discountNum * 100) / 100;
  discountNum = discountNumRound.toFixed(2);

  return (
    <div className="flex flex-col px-2.5 mb-8 text-start transition-transform duration-300 hover:-translate-y-2">
      <NavLink to={to} className="flex flex-col w-40 md:w-60">
        <img
          src={img}
          alt={name}
          className="w-full object-cover aspect-square"
        />
        {discount != 0 ? (
          <div className="absolute md:w-60 w-40 text-right">
            <span className="font-bold text-white text-md bg-red-400 p-1">
              -{discount * 100}%
            </span>
          </div>
        ) : null}
        <div id="productInfo">
          <span>{name ? name : "Empty"}</span>
          <div className="flex gap-1">
            {discount != 0 ? (
              <span id="discount" className="font-bold text-xl">
                {discount != 0 ? discountNum : null}
                {currency ? currency : "$"}
              </span>
            ) : null}
            <span id="regular_price" className={line}>
              {regular_price != 0 ? regular_price : "000"}
              {currency ? currency : "$"}
            </span>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Product;
