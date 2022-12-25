import { NavLink } from "react-router-dom";
const HomeButtom = ({ field, img, to }) => {
  return (
    <div className="flex flex-col items-center">
      <NavLink to={to} className="flex flex-col items-center text-center">
        <img src={img} alt="LG logo" className="w-12" />
        <span>{field}</span>
      </NavLink>
    </div>
  );
};

export default HomeButtom;
