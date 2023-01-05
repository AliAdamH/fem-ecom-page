import React from 'react';
import { ReactComponent as Minus } from '../assets/images/icon-minus.svg';
import { ReactComponent as Plus } from '../assets/images/icon-plus.svg';
import WrappedCart from './WrappedCart';
function ProductDetails() {
  return (
    <section className="p-4 space-y-4 max-w-[480px] sm:py-16 sm:space-y-8">
      <span className="text-primary-orange font-bold">SNEAKER COMPANY</span>
      <h1 className="text-3xl font-extrabold">Fall Limited Edition Sneakers</h1>
      <p className="text-neutral-darkGrayBlue">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div id="pricing" className="flex items-center">
        <h3 className="text-3xl font-bold">$125</h3>
        <span className="ml-4 rounded-md py-1 px-2 text-sm font-bold bg-primary-pale text-primary-orange">
          50%
        </span>
        <span className="ml-auto text-sm text-neutral-darkGrayBlue line-through">
          $250
        </span>
      </div>
      <div className="flex flex-col sm:flex-row sm:gap-4">
        <div
          className="flex  items-center justify-between bg-neutral-lightGrayBlue p-3 rounded-md font-bold sm:gap-16 sm:p-2"
          id="quantity"
        >
          <button className="text-primary-orange">
            <Minus />
          </button>
          <span>3</span>
          <button className="text-primary-orange">
            <Plus />
          </button>
        </div>
        <button className="bg-primary-orange shadow-xl shadow-primary-pale text-neutral-white font-bold p-4 w-full sm:flex-1 sm:w-auto rounded-lg flex gap-4 justify-center">
          <WrappedCart fill={'#ffffff'} />
          Add to Cart
        </button>
      </div>
    </section>
  );
}

export default ProductDetails;
