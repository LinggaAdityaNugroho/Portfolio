import { useState, useEffect } from "react";
import SectionTitle from "../../Atoms/Section/SectionTitle";
import SpotlightCard from "../../SpotlightCard";
import CardFeat from "../../Organism/Card/CardFeat";
import { FaCode, FaBook, FaUser } from "react-icons/fa";
import { faReadme } from "@fortawesome/free-brands-svg-icons";
import Icon from "../../Atoms/Icon/Icon";
import { LoopIcon } from "../../Organism/LoopIcon/LoopIcon";
import { SkeletonCard } from "../../Moleculs/Skeleton/SkeletonCard";
import { IoFolderOpen, IoChatbubble } from "react-icons/io5";
import { ScrollArea } from "../../ui/scroll-area";
import { PiCertificateLight } from "react-icons/pi";
import Folder from "../../Folder";
import Stack from "../../Stack";

export default function FeaturedSection() {
  const wordServices = ["Web", "Network"];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % wordServices.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [wordServices.length]);

  // Mengatur opacity skeleton agar tidak terlalu mencolok di dark mode
  const skeletonCard = Array.from({ length: 6 }).map((_, i) => (
    <div key={i} className="opacity-80 dark:opacity-40">
      <SkeletonCard />
    </div>
  ));

  const imgStack = [
    <SkeletonCard key={1} />,
    <SkeletonCard key={2} />,
    <SkeletonCard key={3} />,
  ];

  return (
    <section className="mt-12 px-2 transition-colors duration-300">
      <SectionTitle
        icon={
          <Icon icon={faReadme} className="text-blue-600 dark:text-blue-400" />
        }
        title="Featured Section"
        subtitle="Explore everything I’ve crafted, contributed, and accomplished."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {/* --- PROJECT SHOWCASE --- */}
        <SpotlightCard className="col-span-1 sm:col-span-2 overflow-hidden bg-white dark:bg-neutral-900/30 border-neutral-200 dark:border-neutral-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2">
            <CardFeat
              title="Project Showcase"
              description="A selection of real apps built to solve real problems."
              icon={IoFolderOpen}
              className="text-start"
            />
            <div className="relative group">
              <ScrollArea className="h-48 rounded-xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/50 p-2 backdrop-blur-sm">
                <div className="flex flex-col gap-3">{skeletonCard}</div>
              </ScrollArea>
              {/* Fade Overlay: Menyesuaikan dengan warna background masing-masing mode */}
              <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-neutral-50 dark:from-neutral-900/10 to-transparent pointer-events-none rounded-b-xl" />
            </div>
          </div>
        </SpotlightCard>

        {/* --- ABOUT --- */}
        <SpotlightCard className="flex flex-col justify-between h-full min-h-[300px] bg-white dark:bg-neutral-900/30 border-neutral-200 dark:border-neutral-800">
          <CardFeat
            title="About"
            description="Who I am and what I do."
            icon={FaUser}
          />
          <div className="relative h-40 mt-4 mb-4 grayscale-[0.5] dark:grayscale-0 transition-all">
            <Stack
              randomRotation={true}
              sensitivity={180}
              sendToBackOnClick={true}
              cards={imgStack}
            />
          </div>
        </SpotlightCard>

        {/* --- SKILLS --- */}
        <SpotlightCard className="flex flex-col overflow-hidden h-full min-h-[300px] bg-white dark:bg-neutral-900/30 border-neutral-200 dark:border-neutral-800">
          <CardFeat
            title="Skills & Tools"
            description="Tech stack covering mobile, web, and AI."
            icon={FaCode}
          />
          <div className="mt-auto pt-6 -mx-4 opacity-70 dark:opacity-100 transition-opacity">
            <LoopIcon />
          </div>
        </SpotlightCard>

        {/* --- ACHIEVEMENTS --- */}
        <SpotlightCard className="flex flex-col items-center justify-between text-center h-full min-h-[300px] bg-white dark:bg-neutral-900/30 border-neutral-200 dark:border-neutral-800">
          <CardFeat
            title="Achievements"
            description="Milestones and certifications."
            icon={PiCertificateLight}
          />
          <div className="flex-1 flex items-center justify-center w-full py-6">
            <div className="relative">
              {/* Efek glow lembut di belakang folder untuk dark mode */}
              <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full dark:block hidden" />
              <Folder
                size={0.8}
                className="drop-shadow-2xl opacity-90 dark:opacity-100 transition-all duration-500 hover:scale-110"
              />
            </div>
          </div>
        </SpotlightCard>

        {/* --- CHAT ROOM --- */}
        <SpotlightCard className="flex flex-col justify-between h-full min-h-[300px] bg-white dark:bg-neutral-900/30 border-neutral-200 dark:border-neutral-800">
          <CardFeat
            title="Chat Room"
            description="Open space to collaborate."
            icon={IoChatbubble}
          />
          <div className="mt-6 opacity-40 dark:opacity-20 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            <SkeletonCard />
          </div>
        </SpotlightCard>

        {/* --- SERVICES --- */}
        <SpotlightCard className="col-span-1 sm:col-span-2 overflow-hidden bg-white dark:bg-neutral-900/30 border-neutral-200 dark:border-neutral-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 h-full">
            <CardFeat
              title="Services"
              description="End-to-end solutions in web, network."
              icon={FaBook}
              className="text-start"
            />

            {/* Perbaikan: Menggunakan Container yang relatif terhadap lebar untuk mencegah overflow */}
            <div className="flex flex-col justify-center items-center h-48 md:h-full relative py-8 overflow-hidden w-full">
              {wordServices.map((word, i) => (
                <p
                  key={i}
                  className={`absolute w-full text-center transition-all duration-700 ease-in-out font-black
            ${/* Penyesuaian Font Size: text-3xl di mobile agar kata panjang seperti 'Network' tidak tumpah */ ""}
            text-3xl md:text-5xl tracking-tighter
            ${
              i === activeIndex
                ? "text-blue-600 dark:text-blue-400 blur-0 opacity-100 scale-100 translate-y-0"
                : "text-neutral-300 dark:text-neutral-800 blur-md opacity-10 dark:opacity-5 scale-75 translate-y-12"
            }`}
                >
                  {word}
                </p>
              ))}
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
