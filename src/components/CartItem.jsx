export default function CartItem({
  category,
  name,
  emoji,
  quantity,
  deleteItem,
}) {
  return (
    <>
      <div className="cart-item">
        <p>{emoji}</p>
        <p>{category}</p>
        <p>{name}</p>
        <p>{quantity}</p>
        <button onClick={deleteItem}>Remove</button>
      </div>
    </>
  );
}
