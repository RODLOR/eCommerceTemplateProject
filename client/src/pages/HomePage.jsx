import { Link } from "react-router-dom";
import Deals from "../components/Deals.jsx";
import Carrousel from "../components/Carrousel.jsx";
const HomePage = () => {
  return (
    <div id="homePage" className="flex flex-col justify-center items-center">
      <Carrousel />
      <div className="flex flex-col justify-center items-center bg-white w-full">
        <Deals />
        <Link to="/deals" className="font-medium">
          <span className="text-lg p-4">View More</span>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
