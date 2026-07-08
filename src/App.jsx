import "./App.css";
import { Link, Outlet } from "react-router-dom";
// import { useState } from "react";

function App() {
  // const [cart, setCart] = useState([]);

  return (
    <>
      <nav className="nav-area">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <main className="content-area">
        <Outlet />
        {/* TODO: HOW TO USE CONTEXT TO PASS PROPS INTO THE 
                  <OUTLET /> TO ALLOW OTHER PAGES TO 
                  USE AND UPDATE DATA */}
      </main>
    </>
  );
}

export default App;
