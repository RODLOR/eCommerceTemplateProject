import Deals from "../components/Deals";

const DealsPage = () => {
  return (
    <div id="homePage" className="flex flex-col items-center">
      <div className="bg-white">
        <Deals />
      </div>
    </div>
  );
};

export default DealsPage;