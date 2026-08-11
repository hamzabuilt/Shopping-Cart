import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  function deleteItemFromCart(item) {
    setCart((prevCart) => prevCart.filter((i) => i.name !== item.name));
  }

  function addItemToCart(newItem) {
    const existingItem = cart.find((cartItem) => cartItem.name === newItem.name);

    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.name === newItem.name
            ? {
                ...cartItem,
                quantity: cartItem.quantity + Number(newItem.quantity),
              }
            : cartItem,
        ),
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...newItem, quantity: Number(newItem.quantity) }]);
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        totalItems,
        addItemToCart,
        deleteItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
