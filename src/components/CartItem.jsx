import React from 'react';
import sneakerThumbnail from '../assets/images/image-product-1-thumbnail.jpg';
import { ReactComponent as DeleteIcon } from '../assets/images/icon-delete.svg';
export default function CartItem() {
  return (
    <div className="flex gap-4 items-center">
      <img
        src={sneakerThumbnail}
        alt="Sneaker thumbnail"
        className="rounded w-12"
      />
      <div data-info="item-details">
        <h6 className="text-sm text-neutral-darkGrayBlue">
          Fall limited Edition Sneakers
        </h6>
        <div data-info-prices className="flex gap-2">
          <span className="text-neutral-darkGrayBlue">$125.00 &times; 3</span>
          <span className="font-bold">$375</span>
        </div>
      </div>
      <button>
        <span className="sr-only">Remove from cart</span>
        <DeleteIcon />
      </button>
    </div>
  );
}
