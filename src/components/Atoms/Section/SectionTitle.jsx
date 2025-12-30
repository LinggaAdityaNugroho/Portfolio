import { twMerge } from "tailwind-merge";

export default function SectionTitle({ icon, title, subtitle, className }) {
  return (
    <div className={twMerge("flex flex-col gap-1", className)}>
      <div className="flex items-center gap-2.5">
        {icon}
        <h2 className="text-neutral-300 text-2xl font-medium">{title}</h2>
      </div>
      <p className="text-neutral-400 font-medium">{subtitle}</p>
    </div>
  );
}
