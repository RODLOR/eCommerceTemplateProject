import HomeButtom from "../components/HomeButtoms";
import SearchField from "../components/SearchField";
const HomePage = () => {
  return (
    <div id="homePage">
      <section className="flex flex-col max-w-screen-xl mx-4 items-center place-self-center bg-gray-100 rounded-3xl mt-5">
        <SearchField />
        <div className="flex gap-10 mb-6">
          <HomeButtom/>
          <HomeButtom/>
          <HomeButtom/>
          <HomeButtom/>
          <HomeButtom/>
          <HomeButtom/>
          <HomeButtom/>
          <HomeButtom/>
          <HomeButtom/>
        </div>
      </section>
      <div>
        <div id="deals">
          
        </div>
      </div>
    </div>
  );
};

export default HomePage;
