import React, { useEffect, useState } from 'react';
import { ReactComponent as PreviousIcon } from '../assets/images/icon-previous.svg';
import { ReactComponent as NextIcon } from '../assets/images/icon-next.svg';
import firstImage from '../assets/images/image-product-1.jpg';
import secondImage from '../assets/images/image-product-2.jpg';
import thirdImage from '../assets/images/image-product-3.jpg';
import fourthImage from '../assets/images/image-product-4.jpg';

const IMAGE_LINKS = [firstImage, secondImage, thirdImage, fourthImage];
const IMAGE_LINKS_BOUNDARY = IMAGE_LINKS.length - 1;
function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(firstImage);

  useEffect(() => {
    setCurrentImage(IMAGE_LINKS[currentImageIndex]);
  }, [currentImageIndex]);

  const handleImageChange = (variation) => {
    variation === 1 &&
      setCurrentImageIndex((current) =>
        current === IMAGE_LINKS_BOUNDARY ? 0 : current + 1
      );
    variation === -1 &&
      setCurrentImageIndex((current) =>
        current === 0 ? IMAGE_LINKS_BOUNDARY : current - 1
      );
  };

  return (
    <div className="relative">
      <button
        onClick={() => handleImageChange(-1)}
        className="absolute left-4 top-1/3 bg-neutral-white rounded-full p-1 w-8 h-8 flex items-center justify-center"
      >
        <span className="sr-only">Previous</span>
        <PreviousIcon className="scale-75" />
      </button>
      <img alt="Sneaker" src={currentImage} className="object-cover" />
      <button
        onClick={() => handleImageChange(1)}
        className="absolute right-4 top-1/3 bg-neutral-white rounded-full p-1 w-8 h-8 flex items-center justify-center"
      >
        <span className="sr-only">Next</span>
        <NextIcon className="scale-75" />
      </button>
    </div>
  );
}

export default Carousel;
