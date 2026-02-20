import SectionTitle from "../components/Atoms/Section/SectionTitle";
import Divider from "../components/Atoms/Divider/Divider";
import AboutDescription from "../components/Moleculs/About/AboutDescription";
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import { dataAboutCareer, dataAboutEdu } from "../data/dataAbout";
import { CareerCard } from "../components/Organism/CareerCard";
import { EduCard } from "../components/Organism/EduCard";

export default function About() {
  return (
    <div className="grid grid-cols-1 gap-4 ">
      <SectionTitle
        title={"About"}
        subtitle={"A brief introduction to who I am."}
      />

      <Divider />

      <AboutDescription />

      <Divider />

      {/* career */}
      <SectionTitle
        title={"Career"}
        subtitle={"My professional journey."}
        icon={<BsFillSuitcaseLgFill className="text-white" />}
        className={"justify-center "}
      />

      {dataAboutCareer.map((item, i) => (
        <CareerCard key={i} data={item} />
      ))}

      <Divider />

      {/* education */}
      <SectionTitle
        title={"Education"}
        subtitle={"My educational journey."}
        icon={<BsFillSuitcaseLgFill className="text-white" />}
        className={"justify-center "}
      />

      {dataAboutEdu.map((item, i) => (
        <EduCard key={i} data={item} />
      ))}
    </div>
  );
}
