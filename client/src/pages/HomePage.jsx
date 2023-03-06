import { Link } from "react-router-dom";
import Deals from "../components/Deals.jsx";
import Carrousel from "../components/Carrousel.jsx";
import BannerText from "../components/BannerText.jsx";
import CategoriesGrid from "../components/CategoriesGrid.jsx";

const HomePage = () => {
  return (
    <div id="homePage" className="flex flex-col justify-center items-center">
      <BannerText />
      <Carrousel />
      <div className="flex flex-col justify-center items-center md:bg-white w-full">
        <CategoriesGrid limit={7} />
        <Deals limit={5} />
        <Link to="/deals" className="font-medium p-4 border-1">
          <span className="text-lg p-4">View More</span>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
