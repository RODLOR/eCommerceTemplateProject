import fire from "../assets/imgs/fire.svg";
import Product from "./Product.jsx";
import ejeImg from "../assets/imgs/ejeImg.webp";

const Deals = () => {
  return (
    <section className="mx-4 bg-white w-auto flex flex-col items-center">
      <div className="flex items-center py-5 px-2 self-start">
        <img className="h-6 w-6 mr-1" src={fire} alt="" />
        <h2 className="font-bold text-red-700">Today Deals</h2>
      </div>
      <div className="flex flex-wrap gap-2 w-11/12 max-md:justify-center">
        <Product to={"35324657#565"} img={ejeImg} off={30}/>
        <Product to={"35324657#565"} img={ejeImg} off={30}/>
        <Product to={"35324657#565"} img={ejeImg} off={30}/>
        <Product to={"35324657#565"} img={ejeImg} off={30}/>
      </div>
    </section>
  );
};

export default Deals;
