export default function ProductCard({ id, category, name, emoji }) {
  return (
    <div className="product-card" key={id}>
      <p>{emoji}</p>
      <p>{category}</p>
      <p>{name}</p>
    </div>
  );
}
