import { useState } from "react";

export default function ProductCard({
  category,
  name,
  emoji,
  initialQuantity,
  addItem,
}) {
  const [count, setCount] = useState(initialQuantity);

  return (
    <div className="product-card">
      <p>{emoji}</p>
      <p>{category}</p>
      <p>{name}</p>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <button onClick={() => addItem(count)}>Add</button>
    </div>
  );
}
