import { twMerge } from "tailwind-merge";

export default function SectionTitle({ icon, title, subtitle, className }) {
  return (
    <div className={twMerge("flex flex-col gap-2 group", className)}>
      <div className="flex items-center gap-3">
        {icon && (
          <div className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        )}
        <h2 className="text-neutral-900 dark:text-white text-2xl font-bold tracking-tight">
          {title}
        </h2>
      </div>

      {subtitle && (
        <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base leading-relaxed max-w-2xl font-medium">
          {subtitle}
        </p>
      )}

      <div className="h-1 w-10 bg-blue-600 dark:bg-blue-500 rounded-full mt-1 group-hover:w-16 transition-all duration-500" />
    </div>
  );
}
