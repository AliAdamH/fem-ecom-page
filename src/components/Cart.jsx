import React from 'react';
import WrappedCart from './WrappedCart';
function Cart() {
  return (
    <button className="relative">
      <WrappedCart fill={'#000000'} />
      <span className="absolute -right-2 -top-1 rounded-full w-4 h-4 bg-primary-orange text-[12px]  text-neutral-white">
        3
      </span>
    </button>
  );
}

export default Cart;
