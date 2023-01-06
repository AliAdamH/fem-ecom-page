import React, { useState } from 'react';
import { ReactComponent as PreviousIcon } from '../assets/images/icon-previous.svg';
import { ReactComponent as NextIcon } from '../assets/images/icon-next.svg';
import {
  IMAGE_LINKS,
  IMAGE_THUMBNAILS,
  IMAGE_LINKS_BOUNDARY,
} from '../utils/ImageExports';
function DesktopCarousel({ openLightBox, withToggles = false }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentThumbnail, setCurrentThumbnail] = useState(0);

  const inferActiveThumbnail = (index) => {
    return index === currentThumbnail
      ? 'border-2 border-primary-orange bg-neutral-white'
      : '';
  };

  const changeActiveImage = (index) => {
    setCurrentImage(index);
    setCurrentThumbnail(index);
  };

  const changeWithToggles = (value) => {
    if (currentImage === 0 && value === -1) return;
    if (currentImage === IMAGE_LINKS_BOUNDARY && value === 1) return;
    setCurrentImage((prev) => prev + value);
    setCurrentThumbnail((prev) => prev + value);
  };

  return (
    <div className="flex flex-col max-w-[380px] gap-8">
      <div className="relative">
        {withToggles && (
          <button
            onClick={() => changeWithToggles(-1)}
            className="absolute -left-4 top-[45%] bg-neutral-white rounded-full p-1 w-12 h-12 flex items-center justify-center"
          >
            <span className="sr-only">Previous</span>
            <PreviousIcon />
          </button>
        )}
        <img
          onClick={openLightBox}
          alt="Sneaker"
          src={IMAGE_LINKS[currentImage]}
          className="object-cover rounded-xl"
        />
        {withToggles && (
          <button
            onClick={() => changeWithToggles(1)}
            className="absolute -right-4 top-[45%] bg-neutral-white rounded-full p-1 w-12 h-12 flex items-center justify-center"
          >
            <span className="sr-only">Next</span>
            <NextIcon />
          </button>
        )}
      </div>
      <div className="flex gap-4 justify-evenly">
        {IMAGE_THUMBNAILS.map((thumb, index) => {
          return (
            <div
              key={index}
              className={`before:rounded before:pointer-events-none hover:before:absolute hover:before:content-[''] hover:before:inset-0 hover:before:bg-neutral-white/50  relative rounded-lg w-20 ${inferActiveThumbnail(
                index
              )}`}
            >
              <img
                src={thumb}
                className={`object-cover rounded cursor-pointer ${
                  index === currentThumbnail && 'opacity-50'
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
