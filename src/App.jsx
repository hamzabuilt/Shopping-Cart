import "./App.css";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const totalItems = cart.length;

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
        <Outlet context={{ cart, setCart }} />
      </main>
    </>
  );
}

export default App;
