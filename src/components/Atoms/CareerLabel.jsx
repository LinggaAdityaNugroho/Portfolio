export const CareerLabel = ({ children, isTitle = false }) => {
  if (isTitle) {
    return <h3 className="text-xl font-medium text-neutral-300">{children}</h3>;
  }
  return <span className="text-neutral-400">{children}</span>;
};
