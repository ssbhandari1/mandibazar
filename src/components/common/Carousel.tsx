"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import caoliflower1 from "../../components/assets/caoliflower1.jpg";

const NextJsCarousel = () => {
  return (
    <div className="w-full h-full selection: flex bg-green-700">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showArrows={false} 
      >
        <div className="h-[50vh] flex items-center justify-center">
          <Image
            alt="product"
            loading="lazy"
            className="w-[100%] h-[100%] cursor-pointer object-cover rounded transition-transform duration-300 ease-in-out hover:scale-105"
            src={caoliflower1}
          />
        </div>
        <div className="h-[50vh] flex items-center justify-center">
          <Image
            alt="product"
            loading="lazy"
            className="w-[100%] h-[100%] cursor-pointer object-cover rounded transition-transform duration-300 ease-in-out hover:scale-105"
            src={caoliflower1}
          />
        </div>
        <div className="h-[50vh] flex items-center justify-center">
          <Image
            alt="product"
            loading="lazy"
            className="w-[100%] h-[100%] cursor-pointer object-cover rounded transition-transform duration-300 ease-in-out hover:scale-105"
            src={caoliflower1}
          />
        </div>
        <div className="h-[50vh] flex items-center justify-center">
          <Image
            alt="product"
            loading="lazy"
            className="w-[100%] h-[100%] cursor-pointer object-cover rounded transition-transform duration-300 ease-in-out hover:scale-105"
            src={caoliflower1}
          />
        </div>
        <div className="h-[50vh] flex items-center justify-center">
          <Image
            alt="product"
            loading="lazy"
            className="w-[100%] h-[100%] cursor-pointer object-cover rounded transition-transform duration-300 ease-in-out hover:scale-105"
            src={caoliflower1}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default NextJsCarousel;
