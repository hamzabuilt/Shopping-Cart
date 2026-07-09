export default function CartItem({ category, name, emoji, quantity }) {
  return (
    <>
      <div className="cart-item">
        <p>{emoji}</p>
        <p>{category}</p>
        <p>{name}</p>
        <p>{quantity}</p>
        <button>Remove</button>
      </div>
    </>
  );
}
