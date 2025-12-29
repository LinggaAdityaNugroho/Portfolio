export default function CardLabel({ title, description }) {
  return (
    <div>
      <h2 className="text-neutral-300">{title}</h2>
      <p className="text-neutral-400">{description}</p>
    </div>
  );
}
