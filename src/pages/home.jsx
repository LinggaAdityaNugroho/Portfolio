import { Separator } from "../components/ui/separator";
import GlassIcons from "../components/GlassIcons";
import SpotlightCard from "../components/SpotlightCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faPhp,
  faGithub,
  faLaravel,
  faJs,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faReadme } from "@fortawesome/free-brands-svg-icons";
import tailwind from "../assets/tailwind.png";
import mysql from "../assets/mysql.png";
import CardFeat from "../components/Organism/Card/CardFeat";

// update with your own icons and colors
const items = [
  {
    icon: <FontAwesomeIcon icon={faHtml5} className="text-white" size="2xl" />,
    color: "#F54927",
    label: "HTML",
  },
  {
    icon: (
      <FontAwesomeIcon icon={faCss3Alt} className="text-white" size="2xl" />
    ),
    color: "#2652E6",
    label: "CSS",
  },
  {
    icon: <FontAwesomeIcon icon={faJs} className="text-white" size="2xl" />,
    color: "#D7BC38",
    label: "Javasript",
  },
  {
    icon: <img src={tailwind} alt="" className=" scale-180" />,
    color: "#3EBFF8",
    label: "Tailwind",
  },
  {
    icon: <FontAwesomeIcon icon={faPhp} className="text-white" size="2xl" />,
    color: "#7B7FB5",
    label: "PHP",
  },
  {
    icon: (
      <FontAwesomeIcon icon={faLaravel} className="text-white" size="2xl" />
    ),
    color: "#FF3427",
    label: "Laravel",
  },
  {
    icon: <img src={mysql} alt="" className="scale-200" />,
    color: "#4A7DA4",
    label: "MySql",
  },
  {
    icon: <FontAwesomeIcon icon={faGithub} className="text-white" size="2xl" />,
    color: "#22262A",
    label: "Github",
  },
];

export default function Home() {
  return (
    <main>
      {/* About */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-neutral-50 text-3xl font-medium ">
            Hi, I'm Lingga Aditya Nugroho
          </h2>
          <ul className="flex gap-10 text-neutral-300 ">
            <li>Based in Semarang, Indonesia</li>
            <li>Onsite</li>
          </ul>
        </div>
        <p className="text-neutral-300 text-xl text-md leading-loose">
          I'm a student at Politeknik Negeri Semarang (Polines), majoring in
          Electrical Engineering, focused on Telecommunication Engineering.
          Passionate about networks, embedded systems, IoT, and everything tech
          that connects the world. Always exploring how hardware and software
          come together to build smart solutions.
        </p>
      </div>

      <Separator className={"mt-8  bg-neutral-700"} />

      {/* Skills */}
      <div className="mt-8">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2.5">
            <FontAwesomeIcon icon={faCode} className="text-white" />
            <h2 className="text-neutral-300 text-2xl font-medium">Skills</h2>
          </div>
          <p className="text-neutral-400  font-medium">My Skill</p>
        </div>
        <div>
          <GlassIcons colorful items={items} className={"gap-2"} />
        </div>
      </div>

      <Separator className={"mt-8  bg-neutral-700"} />

      {/* Section */}
      <div className="mt-8">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2.5">
            <FontAwesomeIcon icon={faReadme} className="text-white" />
            <p className="text-neutral-300 text-2xl font-medium">
              Featured Section
            </p>
          </div>
          <p className="text-neutral-400 font-medium">
            Explore everything I’ve crafted, contributed, and accomplished.
          </p>
        </div>

        {/* card */}
        <div className="grid grid-cols-4 gap-4">
          <SpotlightCard
            className="custom-spotlight-card col-span-2"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <h1>asdas</h1>
          </SpotlightCard>
          <SpotlightCard
            className="custom-spotlight-card "
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <h1>asdas</h1>
          </SpotlightCard>

          {/* skills n tools */}
          <SpotlightCard
            className="custom-spotlight-card "
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <CardFeat
              title={"Skills & tools"}
              description={"Covering mobile, web, AI, and UI/UX technologies."}
              icon={faReadme}
            />
          </SpotlightCard>
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <h1>asdas</h1>
          </SpotlightCard>
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <h1>asdas</h1>
          </SpotlightCard>
          <SpotlightCard
            className="custom-spotlight-card col-span-2"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <h1>asdas</h1>
          </SpotlightCard>
        </div>
      </div>
    </main>
  );
}
