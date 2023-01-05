import React from 'react';
import sneakerThumbnail from '../assets/images/image-product-1-thumbnail.jpg';
import { ReactComponent as DeleteIcon } from '../assets/images/icon-delete.svg';
export default function CartItem({ quantity, price, itemId, remove }) {
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
          <span className="text-neutral-darkGrayBlue">
            ${price} &times; {quantity}
          </span>
          <span className="font-bold">${quantity * price}</span>
        </div>
      </div>
      <button onClick={() => remove(itemId)}>
        <span className="sr-only">Remove from cart</span>
        <DeleteIcon />
      </button>
    </div>
  );
}
