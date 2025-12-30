import SectionTitle from "../../Atoms/Section/SectionTitle";
import SkillsGrid from "../../Moleculs/Skill/SkillsGrid";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import Icon from "../../Atoms/Icon/Icon";

export default function SkillsSection({ items }) {
  return (
    <section className="mt-8 space-y-4">
      <SectionTitle
        icon={<Icon icon={faCode} className="text-white" />}
        title="Skills"
        subtitle="My Skill"
      />
      <div className="">
        <SkillsGrid items={items} />
      </div>
    </section>
  );
}
