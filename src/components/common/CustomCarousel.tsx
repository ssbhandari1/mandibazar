'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import caoliflower1 from "../../components/assets/caoliflower1.jpg";

const products = [
  { id: 1, name: "Product 1", description: "Description of Product 1" },
  { id: 2, name: "Product 2", description: "Description of Product 2" },
  { id: 3, name: "Product 3", description: "Description of Product 3" },
  { id: 4, name: "Product 4", description: "Description of Product 4" },
  { id: 5, name: "Product 5", description: "Description of Product 5" },
  { id: 6, name: "Product 6", description: "Description of Product 6" },
  { id: 1, name: "Product 7", description: "Description of Product 1" },
  { id: 2, name: "Product 8", description: "Description of Product 2" },
  { id: 3, name: "Product 9", description: "Description of Product 3" },
  { id: 4, name: "Product 10", description: "Description of Product 4" },
  { id: 5, name: "Product 11", description: "Description of Product 5" },
  { id: 6, name: "Product 12", description: "Description of Product 6" },
  { id: 3, name: "Product 13", description: "Description of Product 3" },
  { id: 4, name: "Product 14", description: "Description of Product 4" },
  { id: 5, name: "Product 15", description: "Description of Product 5" },
  { id: 6, name: "Product 16", description: "Description of Product 6" },
  { id: 1, name: "Product 17", description: "Description of Product 1" },
  { id: 2, name: "Product 18", description: "Description of Product 2" },
  { id: 3, name: "Product 19", description: "Description of Product 3" },

];



const CustomCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideWidth = 10; // width of each slide in vw
  const visibleItems = Math.floor(100 / slideWidth); // Calculate visible items based on 100vw

  const totalSlides = products.length;

  // Check if Next should be disabled based on remaining items
  const canSlideNext = currentSlide < totalSlides - visibleItems;

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (canSlideNext) {
      setCurrentSlide((prev) => prev + 1);
    }
  };
  return (
    <div className='w-full h-full  flex items-center justify-between'>
      <button
        className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-l ${currentSlide === 0 && 'opacity-50 cursor-not-allowed'}`}
        onClick={handlePrev}
        disabled={currentSlide === 0}
      >
        Prev
      </button>

      <div className='relative w-full h-full overflow-hidden'>
        <div
          className='flex h-full transition-transform duration-300 ease-in-out gap-2'
          style={{ transform: `translateX(-${currentSlide * slideWidth}vw)`, width: `${products.length * slideWidth}vw` }}
        >
          {products.map((product: any, index) => (
            <div key={index} className='w-[9vw] h-full bg-gray-100 rounded flex flex-col gap-1 items-center justify-center'>
              <div className='w-full h-[90%] box-border flex items-center justify-center p-1'>
              <Image
            alt="product"
            loading="lazy"
            className="w-[50px] h-[50px] cursor-pointer object-cover rounded-full transition-transform duration-300 ease-in-out hover:scale-105"
            src={caoliflower1}
          />
              </div>
              <span className='text-[0.8rem]'>{product.name}</span>
            </div>
          ))}
        </div>
      </div>

      <button
        className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r ${!canSlideNext && 'opacity-50 cursor-not-allowed'}`}
        onClick={handleNext}
        disabled={!canSlideNext}
      >
        Next
      </button>
    </div>
  );
};

export default CustomCarousel;
