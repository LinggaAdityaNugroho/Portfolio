export default function AboutHeader() {
  return (
    <div className="space-y-4 py-4">
      <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-neutral-900 dark:text-white leading-tight">
        Hi, I'm{" "}
        <span className="text-blue-600 dark:text-blue-400">
          Lingga Aditya Nugroho
        </span>
      </h2>

      <div className="flex flex-wrap gap-6 text-sm md:text-base text-neutral-500 dark:text-neutral-400 font-semibold">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
            📍
          </span>
          <span>Semarang, Indonesia</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-neutral-700 dark:text-neutral-300">
            Available for Onsite
          </span>
        </div>
      </div>
    </div>
  );
}
