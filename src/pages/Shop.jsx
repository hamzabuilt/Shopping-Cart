import ProductCard from "../components/ProductCard.jsx";
import itemsData from "../services/items.json";
import { useOutletContext } from "react-router-dom";

export default function Shop() {
  const { setCart } = useOutletContext();

  const items = itemsData.map((item) => ({
    category: item.category,
    name: item.name,
    emoji: item.emoji,
  }));

  function addItemToCart(item) {
    setCart((prevCart) => [...prevCart, item]);
  }

  return (
    <>
      {items.map((item) => (
        <ProductCard
          key={item.name}
          category={item.category}
          name={item.name}
          emoji={item.emoji}
          quantity={item.quantity}
          addItem={(count) => addItemToCart({ ...item, quantity: count })}
        />
      ))}
    </>
  );
}
