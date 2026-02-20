import { CareerImage } from "../Atoms/CareerImage";
import { CareerLabel } from "../Atoms/CareerLabel";
import { CareerInfo } from "../Moleculs/CareerInfo";
import SpotlightCard from "../SpotlightCard";

export const EduCard = ({ data }) => {
  return (
    <SpotlightCard
      className="group border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/30 transition-all duration-300"
      // Menggunakan warna cyan yang lebih soft agar tidak bocor di mode terang
      spotlightColor="rgba(0, 229, 255, 0.15)"
    >
      <div className="flex flex-col sm:flex-row gap-6 p-4 md:p-5">
        {/* Container Image dengan efek hover */}
        <div className="flex-shrink-0 flex items-start justify-center sm:justify-start">
          <div className="relative">
            <div className="absolute -inset-1 bg-blue-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
            <div className="relative bg-white dark:bg-neutral-800 p-1 rounded-xl shadow-sm border border-neutral-100 dark:border-neutral-700">
              <CareerImage
                src={data.img}
                alt={data.role}
                className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="flex-1 space-y-3">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
            <CareerLabel
              isTitle
              className="text-neutral-900 dark:text-white text-lg md:text-xl font-bold tracking-tight"
            >
              {data.title}
            </CareerLabel>

            {/* Badge Periode (Opsional jika ingin dipisah) */}
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800/50 w-fit">
              {data.period}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-2">
            {/* Degree & Major - Teks Lebih Menonjol */}
            <div className="text-neutral-700 dark:text-neutral-300 font-semibold text-sm md:text-base">
              <CareerInfo items={[data.degree, data.major]} />
            </div>

            {/* Location - Teks Lebih Muted */}
            <div className="text-neutral-500 dark:text-neutral-500 text-xs md:text-sm italic">
              <CareerInfo items={[data.location]} />
            </div>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
};
