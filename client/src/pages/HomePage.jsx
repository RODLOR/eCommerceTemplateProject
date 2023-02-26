import Deals from "../components/Deals.jsx";
const HomePage = () => {
  return (
    <div id="homePage" className="flex flex-col items-center">
      <div className="bg-orange-400 my-2 p-28 w-11/12 rounded-3xl flex flex-col text-center">
        <p>image space</p>
      </div>
      <div id="HomeMainSection"className="bg-white rounded-t-xl text-center">
        <Deals />
      </div>
    </div>
  );
};

export default HomePage;
