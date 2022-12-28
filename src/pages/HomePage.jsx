import HomeButtom from "../components/HomeButtoms";
import SearchField from "../components/SearchField";
import Deals from "../components/Deals";
import LG from "../assets/imgs/lg.svg";
const HomePage = () => {
  return (
    <div id="homePage" className="flex flex-col">
      <section className="
      flex flex-col max-w-full mx-4 items-center bg-gray-100 rounded-3xl mt-5 mb-5 
      max-sm:mx-0 max-sm:rounded-none max-sm:mt-0">
        <SearchField />
        <div className="flex gap-10 mb-6 flex-wrap justify-center">
          <HomeButtom img={LG} to={"/apple"} field={"Apple"} />
          <HomeButtom img={LG} to={"/samsung"} field={"Samsung"} />
          <HomeButtom img={LG} to={"/lg"} field={"LG"} />
          <HomeButtom img={LG} field={"hp"} />
          <HomeButtom img={LG} field={"Sony"} />
          <HomeButtom img={LG} field={"Dell"} />
          <HomeButtom img={LG} field={"More"} />
        </div>
      </section>
      <div className="bg-white rounded-t-3xl">
        <Deals  />
      </div>
    </div>
  );
};

export default HomePage;
