import SectionTitle from "../components/Atoms/Section/SectionTitle";
import Divider from "../components/Atoms/Divider/Divider";
import AboutDescription from "../components/Moleculs/About/AboutDescription";
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import SpotlightCard from "../components/SpotlightCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export default function About() {
  return (
    <div>
      <SectionTitle
        title={"About"}
        subtitle={"A brief introduction to who I am."}
      />

      <Divider />

      <AboutDescription />

      <Divider />

      <SectionTitle
        title={"Career"}
        subtitle={"My professional journey."}
        icon={<BsFillSuitcaseLgFill className="text-white" />}
        className={"justify-center"}
      />

      <SpotlightCard
        className="custom-spotlight-card"
        spotlightColor="rgba(0, 229, 255, 0.2)"
      >
        <div className="flex gap-6">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-6xXO7DsQ747UNVIJvDGOjgLu_w0G5mOPXg&s"
            alt="imgCareer"
            className="w-20 h-20 rounded-2xl"
          />
          <div>
            <h3 className="text-2xl text-neutral-300">Teknisi</h3>
            <ul className="flex  gap-6">
              <li className="text-neutral-300">
                Pt. Affan Technology Indonesia (Parto.id)
              </li>
              <li className="text-neutral-300">Jambi, Indonesia 🇮🇩</li>
            </ul>

            <ul className="flex  gap-6">
              <li className="text-neutral-300">Jul 2025 - Sep 2025</li>
              <li className="text-neutral-300">2 Months</li>
              <li className="text-neutral-300">Internship</li>
              <li className="text-neutral-300">OnSite</li>
            </ul>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className={"text-sm text-neutral-300"}>
                  Show responsibilities
                </AccordionTrigger>
                <AccordionContent className={"text-sm text-neutral-300"}>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </SpotlightCard>

      <Divider />

      <SectionTitle
        title={"Education"}
        subtitle={"My educational journey."}
        icon={<BsFillSuitcaseLgFill className="text-white" />}
        className={"justify-center"}
      />
    </div>
  );
}
