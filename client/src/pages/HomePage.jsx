import Deals from "../components/Deals";
import HeaderNav from "../components/HeaderNav";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div id="homePage" className="flex flex-col items-center">
      <HeaderNav />
      <div className="bg-white rounded-t-3xl text-center">
        <Deals />
        <Link to="/deals" className="font-bold">More...</Link>
      </div>
    </div>
  );
};

export default HomePage;
