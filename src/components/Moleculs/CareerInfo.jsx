import { CareerLabel } from "../Atoms/CareerLabel";

export const CareerInfo = ({ items }) => {
  return (
    <ul className="flex flex-col lg:flex-row md:flex-col sm:flex-col gap-4 ">
      {items.map((item, idx) => (
        <li key={idx} className=" text-sm font-semibold tracking-wide ">
          <CareerLabel>&#8226; {item}</CareerLabel>
        </li>
      ))}
    </ul>
  );
};
