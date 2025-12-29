import CardLabel from "../../Atoms/Card/CardLabel";
import CardIcon from "../../Atoms/Card/CardIcon";
import CardWrapper from "../../Moleculs/Card/CardWrapper";

export default function CardFeat({ title, description, icon }) {
  return (
    <CardWrapper className={"flex flex-col gap-2"}>
      <CardIcon icon={icon} />
      <CardLabel title={title} description={description} />
    </CardWrapper>
  );
}
