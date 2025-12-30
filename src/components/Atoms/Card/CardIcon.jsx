import { twMerge } from "tailwind-merge";

export default function CardIcon({ IconComponent: Icon, children, className }) {
  return (
    <div className="flex flex-col text-center items-center justify-center overflow-hidden">
      <div
        className={twMerge(
          "p-4 bg-neutral-800 rounded-xl flex gap-2 items-center justify-center overflow-hidden",
          className
        )}
      >
        {Icon && <Icon className={"text-white "} />}
        {children}
      </div>
    </div>
  );
}
