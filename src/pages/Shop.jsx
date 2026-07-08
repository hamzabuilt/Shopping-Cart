import ProductCard from "../components/ProductCard.jsx";
import itemsData from "../services/items.json";

export default function Shop() {
  const items = itemsData.map((item) => ({
    id: crypto.randomUUID(),
    category: item.category,
    name: item.name,
    emoji: item.emoji,
  }));

  return (
    <>
      {items.map((item) => (
        <ProductCard
          key={item.id}
          id={item.id}
          category={item.category}
          name={item.name}
          emoji={item.emoji}
        />
      ))}
    </>
  );
}
