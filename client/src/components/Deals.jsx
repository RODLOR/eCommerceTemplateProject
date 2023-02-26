
import Product from "./Product.jsx";
import ejeImg from "../assets/imgs/ejeImg.png";
import { Link } from "react-router-dom";

const Deals = () => {
  return (
    <section className=" bg-white flex flex-col py-4">
      <div className="flex pl-4">
      <svg width="32px" height="32px" viewBox="-26.6 -26.6 319.20 319.20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#ffffff" stroke="#ffffff" stroke-width="0.00266" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#ffffff" stroke-width="1.5959999999999999"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M84.1099,58.7344 L80.7749,60.9474 C53.2879,78.9254 38.8059,104.5064 38.4739,137.2624 C38.0479,179.1514 67.5649,215.5894 108.3939,224.9634 C161.0989,237.0644 213.2589,198.8574 217.4989,145.0454 C220.8519,102.4824 192.0729,64.2444 151.4659,51.0274 C145.3429,44.2004 139.7829,21.2554 149.4599,10.8044 C189.3669,19.6724 219.2859,40.0494 238.5759,72.8684 C280.7539,144.6274 242.8369,238.1664 162.7199,260.5084 C88.2979,281.2624 12.9969,232.2024 1.8669,155.7104 C-10.4841,84.3884 39.8749,20.9394 110.9259,10.2764 C94.3509,25.2674 85.4819,45.8544 84.1099,58.7344" fill="#b31919"> </path> <path d="M179.5839,119.4594 C185.3219,108.7674 185.0619,97.5844 181.8039,86.2694 C181.0029,83.4864 179.3359,78.7124 178.2109,75.5914 C197.3939,89.7674 213.7759,123.8534 205.4489,157.7274 C197.7349,189.1124 167.6549,214.3914 136.6249,217.3144 C96.6659,221.0774 65.5959,197.1324 53.9009,168.0224 C41.4309,136.9874 51.4169,98.8174 72.8489,79.8144 C62.3619,100.9284 65.6079,117.6894 69.8929,123.9434 C74.6559,130.8964 82.2389,134.5014 89.6399,132.4424 C97.4209,130.2784 103.3889,123.3174 103.2539,114.4424 C103.1639,108.5164 102.1069,101.8334 99.7699,96.4944 C85.9029,64.8174 97.4619,36.2494 119.8289,16.5754 C126.3209,10.8644 133.8699,5.3844 143.4779,0.0004 C132.9199,14.9914 131.1259,33.2564 139.1489,50.2534 C143.8519,59.5154 149.8789,69.1884 155.1959,78.1244 C164.7529,94.1854 170.6139,110.6984 168.0759,129.8564 C168.0479,130.0684 175.6779,126.8994 179.5839,119.4594" fill="#ff4000"> </path> </g> </g></svg>
        <h1 className="font-medium text-red-700 text-xl">Today Deals</h1>
      </div>
      <div className="flex flex-wrap py-5 pl-9">
        <Product to={"35324657#565"} img={ejeImg} off={30} />
        <Product to={"35324657#565"} img={ejeImg} off={30} />
        <Product to={"35324657#565"} img={ejeImg} off={30} />
        <Product to={"35324657#565"} img={ejeImg} off={30} />
        <Product to={"35324657#565"} img={ejeImg} off={30} />
        <Product to={"35324657#565"} img={ejeImg} off={30} />
        <Product to={"35324657#565"} img={ejeImg} off={30} />
        <Product to={"35324657#565"} img={ejeImg} off={30} />
        <Product to={"35324657#565"} img={ejeImg} off={30} />
        <Product to={"35324657#565"} img={ejeImg} off={30} />
      </div>
      <div className="text-center">
      <Link to="/deals" className="font-bold">
          <span>View More</span>
      </Link>
      </div>
    </section>
  );
};

export default Deals;
