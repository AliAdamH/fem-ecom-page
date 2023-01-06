import React, { useState } from 'react';
import WrappedCart from './WrappedCart';
import CartItem from './CartItem';
import {
  useCartStateContext,
  useCartUpdaterContext,
} from '../contexts/CartContext';

function Cart() {
  const state = useCartStateContext();
  const dispatch = useCartUpdaterContext();
  const [openCart, setOpenCart] = useState(false);
  const itemCount = state.items.length;
  const toggleCart = () => {
    setOpenCart((prev) => !prev);
  };

  const removeItem = React.useCallback(
    (itemId) => {
      dispatch({ type: 'REMOVE_FROM_CART', itemId });
    },
    [dispatch]
  );

  return (
    <>
      <button className="relative" onClick={() => toggleCart()}>
        <WrappedCart fill={'#000000'} />
        {itemCount !== 0 && (
          <span className="absolute -right-2 -top-2 rounded-full w-5 h-4 bg-primary-orange text-[12px]  text-neutral-white">
            {itemCount > 9 ? '9+' : itemCount}
          </span>
        )}
      </button>
      {openCart ? (
        <div className="absolute p-4 top-12  right-0 w-full md:w-96 z-10">
          <div className="bg-neutral-white rounded-lg  drop-shadow-lg md:drop-shadow-2xl">
            <h3 className="p-4 border-b-2 border-neutral-lightGrayBlue font-bold text-lg">
              Cart
            </h3>
            {itemCount === 0 ? (
              <h4 className="p-16 text-center text-neutral-darkGrayBlue font-bold">
                Your cart is empty.
              </h4>
            ) : (
              <div
                id="cartContent"
                className="p-4 md:p-6 flex flex-col gap-2 md:gap-4 max-h-[16rem] overflow-y-auto"
              >
                {state.items.map((item, idx) => {
                  return (
                    <CartItem
                      key={idx + item.id}
                      quantity={item.quantity}
                      itemId={item.id}
                      price={item.price}
                      remove={removeItem}
                    />
                  );
                })}
                <button className="bg-primary-orange text-neutral-white font-bold p-4 md:p-3 w-full rounded-lg">
                  Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Cart;
