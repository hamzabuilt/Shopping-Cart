import "./App.css";
import { Link, Outlet } from "react-router-dom";
import { useCart } from "./services/CartContext";

function App() {
  const totalItems = useCart();

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
        <Outlet />
      </main>
    </div>
  );
}

export default App;
