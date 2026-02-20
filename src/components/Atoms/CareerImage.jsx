export const CareerImage = ({ src, alt }) => {
  return (
    <img key={alt} alt={alt} src={src} className="w-20 h-20 rounded-2xl" />
  );
};
