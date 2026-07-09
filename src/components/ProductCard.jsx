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
      <span className="product-car__emoji">{emoji}</span>
      <span className="product-card__category">{category}</span>
      <h3 className="product-card__name">{name}</h3>
      <div className="product-card__actions">
        <input
          className="product-card__input"
          type="number"
          min="0"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="product-card__btn" onClick={() => addItem(count)}>
          Add
        </button>
      </div>
    </div>
  );
}
