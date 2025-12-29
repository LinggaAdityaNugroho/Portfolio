export default function CardWrapper({ children, className }) {
  return (
    <div
      className={`flex flex-col text-center items-center justify-center ${className}`}
    >
      {children}
    </div>
  );
}
