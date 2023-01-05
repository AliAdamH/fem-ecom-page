import React from 'react';

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        items: [...state.items, action.item],
      };
    case 'REMOVE_FROM_CART':
      const newItems = state.items.filter((item) => item.id !== action.itemId);
      return {
        items: newItems,
      };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

const CartStateContext = React.createContext();
const CartUpdaterContext = React.createContext();

function useCartStateContext() {
  const context = React.useContext(CartStateContext);
  if (!context) {
    throw new Error(
      'Missing Cart State Provider. You did not wrap the component inside a CartProvider ?'
    );
  }
  return context;
}

function useCartUpdaterContext() {
  const context = React.useContext(CartUpdaterContext);
  if (!context) {
    throw new Error(
      'Missing Cart Updater Provider. You did not wrap the component inside a CartProvider ?'
    );
  }
  return context;
}

function CartProvider({ children }) {
  const [state, dispatch] = React.useReducer(cartReducer, { items: [] });

  return (
    <CartUpdaterContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartUpdaterContext.Provider>
  );
}

export { useCartStateContext, useCartUpdaterContext, CartProvider };
