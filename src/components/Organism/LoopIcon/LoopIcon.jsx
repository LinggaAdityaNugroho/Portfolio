import { listTech, listTech2 } from "./data";
import LogoLoop from "../../LogoLoop";
import CardIcon from "../../Atoms/Card/CardIcon";
import { twMerge } from "tailwind-merge";

export function LoopIcon(className) {
  return (
    <div className={twMerge("w-full overflow-hidden space-y-6 ", className)}>
      <LogoLoop
        logos={listTech}
        speed={50}
        className={"overflow-hidden"}
        renderItem={(item, index) => (
          <CardIcon
            key={index}
            size="md"
            className="rounded-full px-4 py-2 border border-white "
            IconComponent={item.icon}
          >
            <p className="text-md text-neutral-300">{item.title}</p>
          </CardIcon>
        )}
      />

      <LogoLoop
        logos={listTech2}
        speed={50}
        direction="right"
        className={"overflow-hidden "}
        renderItem={(item, index) => (
          <CardIcon
            key={index}
            size="md"
            className="rounded-full px-4 py-2 border border-white  "
            IconComponent={item.icon}
          >
            <p className="text-md text-neutral-300">{item.title}</p>
          </CardIcon>
        )}
      />
    </div>
  );
}
