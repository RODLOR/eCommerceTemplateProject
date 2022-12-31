import HomeButtom from "../components/HomeButtoms";
import SearchField from "../components/SearchField";
import LG from "../assets/imgs/lg.svg";
const HeaderNav = () => {
  return (
      <section className="
      flex flex-col w-11/12 mx-4 items-center bg-gray-100 rounded-3xl my-5 
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
  );
};

export default HeaderNav;
