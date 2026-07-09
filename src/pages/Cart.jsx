import { useOutletContext } from "react-router-dom";
import CartItem from "../components/CartItem.jsx";

export default function Cart() {
  const { cart } = useOutletContext();

  return (
    <>
      {cart.map((item) => (
        <CartItem
          key={item.name}
          category={item.category}
          name={item.name}
          emoji={item.emoji}
          quantity={item.quantity}
        />
      ))}
    </>
  );
}
