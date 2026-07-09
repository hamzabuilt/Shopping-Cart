import ProductCard from "../components/ProductCard.jsx";
import itemsData from "../services/items.json";
import { useOutletContext } from "react-router-dom";

export default function Shop() {
  const { cart, addItemToCart } = useOutletContext();

  const items = itemsData.map((item) => ({
    category: item.category,
    name: item.name,
    emoji: item.emoji,
  }));

  return (
    <section className="shop-section">
      {items.map((item) => {
        const itemInCart = cart.find((c) => c.name === item.name);
        const initialQuantity = itemInCart ? itemInCart.quantity : 0;

        return (
          <ProductCard
            key={item.name}
            category={item.category}
            name={item.name}
            emoji={item.emoji}
            initialQuantity={initialQuantity}
            addItem={(count) => addItemToCart({ ...item, quantity: count })}
          />
        );
      })}
    </section>
  );
}
