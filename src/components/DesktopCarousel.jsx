import React, { useState } from 'react';
import firstImage from '../assets/images/image-product-1.jpg';
import secondImage from '../assets/images/image-product-2.jpg';
import thirdImage from '../assets/images/image-product-3.jpg';
import fourthImage from '../assets/images/image-product-4.jpg';
import firstImageThumbnail from '../assets/images/image-product-1-thumbnail.jpg';
import secondImageThumbnail from '../assets/images/image-product-2-thumbnail.jpg';
import thirdImageThumbnail from '../assets/images/image-product-3-thumbnail.jpg';
import fourthImageThumbnail from '../assets/images/image-product-4-thumbnail.jpg';

const IMAGE_LINKS = [firstImage, secondImage, thirdImage, fourthImage];
const IMAGE_THUMBNAILS = [
  firstImageThumbnail,
  secondImageThumbnail,
  thirdImageThumbnail,
  fourthImageThumbnail,
];
function DesktopCarousel() {
  const [currentImage, setCurrentImage] = useState(IMAGE_LINKS[0]);
  const [currentThumbnail, setCurrentThumbnail] = useState(IMAGE_THUMBNAILS[0]);

  const inferActiveThumbnail = (thumbnailSource) => {
    return thumbnailSource === currentThumbnail
      ? 'border-2 border-primary-orange bg-neutral-white'
      : '';
  };

  const changeActiveImage = (index) => {
    setCurrentImage(IMAGE_LINKS[index]);
    setCurrentThumbnail(IMAGE_THUMBNAILS[index]);
  };

  return (
    <div className="flex flex-col max-w-[380px] gap-8">
      <div className="">
        <img
          alt="Sneaker"
          src={currentImage}
          className="object-cover rounded-xl"
        />
      </div>
      <div className="flex gap-4 justify-evenly">
        {IMAGE_THUMBNAILS.map((thumb, index) => {
          return (
            <div
              key={index}
              className={`relative rounded-lg w-20 ${inferActiveThumbnail(
                thumb
              )}`}
            >
              <img
                src={thumb}
                className={`object-cover rounded cursor-pointer transition-opacity hover:opacity-50 ${
                  thumb === currentThumbnail && 'opacity-50'
                }`}
                onClick={() => changeActiveImage(index)}
                alt="Sneaker thumbnail"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DesktopCarousel;
