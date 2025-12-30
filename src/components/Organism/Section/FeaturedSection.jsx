import SectionTitle from "../../Atoms/Section/SectionTitle";
import SpotlightCard from "../../SpotlightCard";
import CardFeat from "../../Organism/Card/CardFeat";
import { FaCode, FaBook, FaUser } from "react-icons/fa";
import { faReadme } from "@fortawesome/free-brands-svg-icons";
import Icon from "../../Atoms/Icon/Icon";
import { LoopIcon } from "../../Organism/LoopIcon/LoopIcon";
import { SkeletonCard } from "../../Moleculs/Skeleton/SkeletonCard";
import { IoFolderOpen } from "react-icons/io5";
import { ScrollArea } from "../../ui/scroll-area";
import BlurText from "../../BlurText";
import { useState, useEffect } from "react";
import { PiCertificateLight } from "react-icons/pi";
import Folder from "../../Folder";
import { IoChatbubble } from "react-icons/io5";
import Stack from "../../Stack";
// import { motion } from "motion/react";

export default function FeaturedSection() {
  const wordServices = ["Web", "AI", "Mobile", "ML"];
  const [blur, setBlur] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlur((prev) => (prev + 1) % wordServices.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [wordServices.length]);

  const skeletonCard = [];
  for (let i = 0; i <= 10; i++) {
    skeletonCard.push(<SkeletonCard />);
  }

  // stack image
  const imgStack = [<SkeletonCard />, <SkeletonCard />, <SkeletonCard />];

  return (
    <section className="mt-8">
      <SectionTitle
        icon={<Icon icon={faReadme} className="text-white" />}
        title="Featured Section"
        subtitle="Explore everything I’ve crafted, contributed, and accomplished."
      />

      <div className="grid grid-cols-4  gap-4 mt-4">
        {/* Project  */}
        <SpotlightCard className="col-span-2  ">
          <div className="grid grid-cols-2 gap-4 ">
            <CardFeat
              title={"Project Showcase"}
              description={
                "A selection of real apps built to solve real problems."
              }
              icon={IoFolderOpen}
              className={"text-start flex flex-col items-start justify-start "}
            />

            <div>
              <ScrollArea>
                <div className="flex flex-col gap-6 h-50">{skeletonCard}</div>
              </ScrollArea>
            </div>
          </div>
        </SpotlightCard>

        {/* About */}
        <SpotlightCard>
          <CardFeat
            title="About"
            description="Who I am and what I do."
            icon={FaUser}
          />
          <div>
            <div className="w-full h-40 mt-10">
              <Stack
                randomRotation={true}
                sensitivity={180}
                sendToBackOnClick={true}
                cards={imgStack.map((src) => (
                  <div>{src}</div>
                ))}
              />
            </div>
          </div>
        </SpotlightCard>

        {/* Skills */}
        <SpotlightCard>
          <CardFeat
            title="Skills & tools"
            description="Covering mobile, web, AI, and UI/UX technologies."
            icon={FaCode}
          />
          <div className="relative -mx-8 mt-10">
            <LoopIcon />
          </div>
        </SpotlightCard>

        {/* Certif */}
        <SpotlightCard>
          <CardFeat
            title="Achievements"
            description="Milestones from programs, projects, and communities."
            icon={PiCertificateLight}
          />
          <div className="flex w-full items-center justify-center mt-20">
            <Folder size={1} className="custom-folder " />
          </div>
        </SpotlightCard>

        {/* Chat */}
        <SpotlightCard>
          <CardFeat
            title="Chat Room"
            description="Open space to talk and collaborate."
            icon={IoChatbubble}
          />
          <div className="mt-10">
            <SkeletonCard />
          </div>
        </SpotlightCard>

        {/* Services */}
        <SpotlightCard className="col-span-2  ">
          <div className="grid grid-cols-2 gap-4">
            <CardFeat
              title={"Services"}
              description={
                "End-to-end solutions in web, mobile, AI, and design."
              }
              icon={FaBook}
              className={"text-start flex flex-col items-start justify-start "}
            />
            <div className="flex flex-col text-center gap-6 justify-center items-center h-full">
              {wordServices.map((wordService, i) => (
                <p
                  key={i}
                  className={`text-4xl font-bold transition-all duration-1000  ease-in-outt ${
                    i === blur
                      ? "text-neutral-300 blur-0 opacity-100"
                      : "text-neutral-300 blur-md opacity-100"
                  } `}
                >
                  {wordService}
                </p>
              ))}
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
