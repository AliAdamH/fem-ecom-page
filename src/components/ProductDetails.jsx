import React, { useState } from 'react';
import { ReactComponent as Minus } from '../assets/images/icon-minus.svg';
import { ReactComponent as Plus } from '../assets/images/icon-plus.svg';
import { useCartUpdaterContext } from '../contexts/CartContext';
import WrappedCart from './WrappedCart';

const itemExample = {
  id: 1,
  price: 125,
  quantity: 0,
  discount: 50,
  originalPrice: 250,
};

const QUANTITY_LIMIT = 10;

const idGenerator = (function* () {
  let count = 0;
  for (;;) {
    count += 1;
    yield count;
  }
})();

function ProductDetails() {
  const dispatch = useCartUpdaterContext();
  const [quantity, setQuantity] = useState(0);

  const decreaseQuantity = () => {
    if (quantity === 0) return;
    setQuantity((prev) => prev - 1);
  };

  const increaseQuantity = () => {
    if (quantity === QUANTITY_LIMIT) return;
    setQuantity((prev) => prev + 1);
  };

  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      item: { ...itemExample, quantity, id: idGenerator.next().value },
    });
  };

  return (
    <section className="p-4 space-y-4 max-w-[480px] sm:py-16 sm:space-y-8">
      <span className="text-primary-orange font-bold">SNEAKER COMPANY</span>
      <h1 className="text-3xl font-extrabold">Fall Limited Edition Sneakers</h1>
      <p className="text-neutral-darkGrayBlue">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div id="pricing" className="flex items-center sm:flex-wrap">
        <h3 className="text-3xl font-bold">${itemExample.price}</h3>
        <span className="ml-4 rounded-md py-1 px-2 text-sm font-bold bg-primary-pale text-primary-orange">
          {itemExample.discount}%
        </span>
        <span className="sm:py-2 font-bold sm:w-full ml-auto text-sm text-neutral-darkGrayBlue line-through">
          ${itemExample.originalPrice}
        </span>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <div
          className="flex sm:w-1/3 items-center justify-between bg-neutral-lightGrayBlue p-3 rounded-md font-bold sm:gap-4 sm:py-2 sm:px-4"
          id="quantity"
        >
          <button
            onClick={decreaseQuantity}
            className="text-primary-orange hover:opacity-60 transition-opacity"
          >
            <Minus />
          </button>
          <span>{quantity}</span>
          <button
            onClick={increaseQuantity}
            className="text-primary-orange hover:opacity-60 transition-opacity"
          >
            <Plus />
          </button>
        </div>
        <button
          onClick={addToCart}
          className="bg-primary-orange shadow-xl shadow-primary-pale text-neutral-white font-bold p-4 w-full sm:flex-1 sm:w-auto rounded-lg flex gap-4 justify-center hover:opacity-60 hover:-translate-y-2 transition-transform"
        >
          <WrappedCart fill={'#ffffff'} />
          Add to Cart
        </button>
      </div>
    </section>
  );
}

export default ProductDetails;
