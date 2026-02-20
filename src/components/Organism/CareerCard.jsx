import { CareerImage } from "../Atoms/CareerImage";
import { CareerLabel } from "../Atoms/CareerLabel";
import { CareerInfo } from "../Moleculs/CareerInfo";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";
import SpotlightCard from "../SpotlightCard";

export const CareerCard = ({ data }) => {
  return (
    <SpotlightCard
      className="group border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/30 transition-all duration-300"
      spotlightColor="rgba(0, 229, 255, 0.15)"
    >
      <div className="flex flex-col sm:flex-row gap-6 p-4 md:p-6">
        {/* Kolom Logo Perusahaan */}
        <div className="flex-shrink-0 flex items-start justify-center sm:justify-start">
          <div className="bg-white dark:bg-neutral-800 p-2 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-700 transition-transform group-hover:scale-105 duration-500">
            <CareerImage
              src={data.img}
              alt={data.role}
              className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-xl"
            />
          </div>
        </div>

        {/* Kolom Informasi Karir */}
        <div className="flex-1 w-full overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-2">
            <CareerLabel
              isTitle
              className="text-neutral-900 dark:text-white text-xl font-bold tracking-tight"
            >
              {data.role}
            </CareerLabel>

            {/* Badge Tipe Pekerjaan (Full-time/Intern) */}
            <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800/50 rounded-md w-fit">
              {data.type || "Job"}
            </span>
          </div>

          <div className="space-y-2">
            {/* Nama Perusahaan & Lokasi */}
            <div className="text-neutral-700 dark:text-neutral-300 font-semibold text-sm md:text-base">
              <CareerInfo items={[data.company, data.location]} />
            </div>

            {/* Periode & Detail Lainnya - Lebih Muted */}
            <div className="text-neutral-500 dark:text-neutral-500 text-xs md:text-sm font-medium">
              <CareerInfo items={[data.period, data.duration, data.mode]} />
            </div>
          </div>

          {/* Accordion Responsibilities dengan UI lebih modern */}
          <Accordion type="single" collapsible className="mt-4 border-none">
            <AccordionItem value="responsibilities" className="border-none">
              <AccordionTrigger className="text-xs font-bold text-neutral-400 dark:text-neutral-500 py-3 hover:text-blue-500 dark:hover:text-blue-400 hover:no-underline transition-all">
                SHOW RESPONSIBILITIES
              </AccordionTrigger>
              <AccordionContent className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed bg-neutral-50/50 dark:bg-white/5 p-4 rounded-xl border border-neutral-100 dark:border-white/5 italic">
                {data.responsibilities || "No description provided."}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </SpotlightCard>
  );
};
