import AboutSection from "../components/Organism/Section/AboutSection";
import SkillsSection from "../components/Organism/Section/SkillsSection";
import FeaturedSection from "../components/Organism/Section/FeaturedSection";
import Divider from "../components/Atoms/Divider/Divider";
import { items } from "../data/dataSkills";

export default function Home() {
  return (
    <main>
      <AboutSection />
      <Divider />
      <SkillsSection items={items} />
      <Divider />
      <FeaturedSection />
    </main>
  );
}
