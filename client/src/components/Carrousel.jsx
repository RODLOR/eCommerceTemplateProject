import React, { useState, useEffect } from "react";
import banner1 from "../assets/imgs/Banner(1).png";
import banner2 from "../assets/imgs/Banner(2).png";
import banner3 from "../assets/imgs/Banner(3).png";
import banner4 from "../assets/imgs/Banner(4).png";

const images = [banner1, banner2, banner3, banner4];

const Carrousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  const nextImage = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      nextImage()
    }, 5000);
  
    return () => {
      clearTimeout(interval)
    }
  }, [nextImage])
  

  return (
    <div className="w-full md:h-96 h-32 md:px-12 md:py-0 px-0">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className={`w-full md:h-96 h-32 transition-all duration-500 ease-in-out object-center object-cover ${
            currentImage === index
              ? "opacity-100 translate-x-0"
              : "opacity-60 absolute inset-0 -z-50 -translate-x-16"
          }`}
        />
      ))}
      <div className="relative w-full md:h-96 h-32 flex justify-between  -inset-y-full">
        <div className="flex flex-col justify-center align-middle">
          <button onClick={prevImage} className=" text-white p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 02 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="50%"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
        </div>
        <div id="dots" className="flex flex-col-reverse py-4">
          <div className="flex gap-2">
            {images.map((image, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill={currentImage === index ? "#fff" : "none"}
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center align-middle">
          <button onClick={nextImage} className=" text-white p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="50%"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carrousel;
