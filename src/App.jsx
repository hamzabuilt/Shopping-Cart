import "./App.css";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const totalItems = cart.length;

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
          cartItem.name == newItem.name
            ? { ...cartItem, quantity: newItem.quantity }
            : cartItem,
        ),
      );
    } else {
      setCart((prevCart) => [
        ...prevCart,
        { ...newItem, quantity: newItem.quantity },
      ]);
    }
  }

  return (
    <>
      <nav className="nav-area">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <div>
          <Link to="/cart">Cart</Link>
          <div className="num-cart-badge">{totalItems}</div>
        </div>
      </nav>
      <main className="content-area">
        <Outlet
          context={{ cart, setCart, addItemToCart, deleteItemFromCart }}
        />
      </main>
    </>
  );
}

export default App;
