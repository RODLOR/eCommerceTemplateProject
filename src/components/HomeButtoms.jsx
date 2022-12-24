import { NavLink } from "react-router-dom";
import LG from "../assets/imgs/lg.svg";
const HomeButtom = ({field}) => {
  return (
    <div className="flex flex-col items-center">
      <img src={LG} alt="LG logo" className="w-12"/>
      <NavLink to="/">
        <span>{field}</span>
      </NavLink>
    </div>
  );
};

export default HomeButtom;
