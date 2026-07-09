import "./App.css";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  function deleteItemFromCart(item) {
    setCart((prevCart) => prevCart.filter((i) => i.name !== item.name));
  }

  function addItemToCart(newItem) {
    const existingItem = cart.find(
      (cartItem) => cartItem.name === newItem.name,
    );

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
      setCart((prevCart) => [
        ...prevCart,
        { ...newItem, quantity: Number(newItem.quantity) },
      ]);
    }
  }

  return (
    <div className="app-layout">
      <nav className="app-header">
        <Link to="/" className="app-header__link">
          Home
        </Link>
        <Link to="/shop" className="app-header__link">
          Shop
        </Link>
        <div className="app-header cart-widget">
          <Link to="/cart" className="app-header__link">
            Cart
          </Link>
          <span className="app-header__badge">{totalItems}</span>
        </div>
      </nav>

      <main className="app-main">
        <Outlet
          context={{ cart, setCart, addItemToCart, deleteItemFromCart }}
        />
      </main>
    </div>
  );
}

export default App;
