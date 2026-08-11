import { useState } from "react";
import { useCart } from "../services/CartContext";

export default function ProductCard({ category, name, emoji, initialQuantity }) {
  const [count, setCount] = useState(initialQuantity);
  const { addItemToCart } = useCart();

  return (
    <div className="product-card">
      <span className="product-card__emoji">{emoji}</span>
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
        <button className="product-card__btn" onClick={() => addItemToCart({ category, name, emoji, quantity: count })}>
          Add
        </button>
      </div>
    </div>
  );
}
