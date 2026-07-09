export default function CartItem({
  category,
  name,
  emoji,
  quantity,
  deleteItem,
}) {
  return (
    <div className="cart-item">
      <span className="cart-item__emoji">{emoji}</span>
      <div className="cart-item__details">
        <h4 className="cart-item__name">{name}</h4>
        <span className="cart-item__category">{category}</span>
      </div>
      <div className="cart-item__quantity">
        Qty: <span>{quantity}</span>
      </div>
      <button className="cart-item__btn-remove" onClick={deleteItem}>
        Remove
      </button>
    </div>
  );
}
