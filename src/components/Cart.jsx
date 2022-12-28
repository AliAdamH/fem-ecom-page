import React, { useState } from 'react';
import WrappedCart from './WrappedCart';
import CartItem from './CartItem';

function Cart() {
  const [openCart, setOpenCart] = useState(false);

  const toggleCart = () => {
    setOpenCart((prev) => !prev);
  };

  return (
    <>
      <button className="relative" onClick={() => toggleCart()}>
        <WrappedCart fill={'#000000'} />
        <span className="absolute -right-2 -top-1 rounded-full w-4 h-4 bg-primary-orange text-[12px]  text-neutral-white">
          3
        </span>
      </button>
      {openCart ? (
        <div className="absolute p-4 top-12 left-0 w-full z-10">
          <div className="bg-neutral-white rounded-lg max-h-[16rem] overflow-y-auto shadow-lg">
            <h3 className="p-4 border-b-2 border-neutral-lightGrayBlue font-bold text-lg">
              Cart
            </h3>
            <div id="cartContent" className="p-4 flex flex-col gap-2">
              <CartItem />
              <button className="bg-primary-orange text-neutral-white font-bold p-4 w-full rounded-lg">
                Checkout
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Cart;
