import { useOutletContext } from "react-router-dom";
import CartItem from "../components/CartItem.jsx";

export default function Cart() {
  const { cart, deleteItemFromCart } = useOutletContext();

  return (
    <div className="cart-container">
      <h2 className="cart-container__title">Your Shopping Cart</h2>
      <div className="cart-container__list">
        {cart.map((item) => (
          <CartItem
            key={item.name}
            category={item.category}
            name={item.name}
            emoji={item.emoji}
            quantity={item.quantity}
            deleteItem={() => deleteItemFromCart(item)}
          />
        ))}
      </div>
    </div>
  );
}
