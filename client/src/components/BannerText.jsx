// import { useState, useEffect } from "react";
import { bannerText } from "../globalDataHandler";

const BannerText = () => {
    //   const [scrollY, setScrollY] = useState(0);

    //   useEffect(() => {
    //     const handleScroll = () => {
    //       setScrollY(window.scrollY);
    //     };

    //     window.addEventListener("scroll", handleScroll);
    //     return () => {
    //       window.removeEventListener("scroll", handleScroll);
    //     };
    //   }, []);
  return bannerText != "" ? (
    <div
      className={`w-full shadow-sm transition-all duration-300 ease-in-out${
        scrollY > 0 ? "-translate-y-96" : "-translate-y-0"
      } text-center md:px-12 pt-1 md:pt-3 pb-1 bg-red-400`}
    >
      <span className="text-lg font-medium text-white ">{bannerText}</span>
    </div>
  ) : null;
};

export default BannerText;
