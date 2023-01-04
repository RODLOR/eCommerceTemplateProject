import Deals from "../components/Deals";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div id="homePage" className="flex flex-col items-center">
      <div className="bg-white text-center">
        <Deals />
        <Link to="/deals" className="font-bold">More...</Link>
      </div>
    </div>
  );
};

export default HomePage;
