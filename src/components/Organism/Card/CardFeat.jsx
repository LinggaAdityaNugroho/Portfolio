import CardLabel from "../../Atoms/Card/CardLabel";
import CardIcon from "../../Atoms/Card/CardIcon";
import CardWrapper from "../../Moleculs/Card/CardWrapper";
import { twMerge } from "tailwind-merge";

export default function CardFeat({ title, description, icon, className }) {
  return (
    <CardWrapper className={twMerge("flex flex-col gap-2  ", className)}>
      <CardIcon IconComponent={icon} />
      <CardLabel title={title} description={description} />
    </CardWrapper>
  );
}
