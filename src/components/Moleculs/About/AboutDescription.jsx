export default function AboutDescription() {
  return (
    <div className="space-y-6 max-w-3xl">
      <p className="text-neutral-700 dark:text-neutral-300 text-lg md:text-xl leading-relaxed font-medium">
        I'm a student at{" "}
        <span className="text-blue-600 dark:text-blue-400 font-bold decoration-blue-500/20 underline underline-offset-4">
          Politeknik Negeri Semarang (Polines)
        </span>
        , majoring in Electrical Engineering with a focus on Telecommunication
        Engineering.
      </p>

      <p className="text-neutral-500 dark:text-neutral-400 text-lg md:text-xl leading-relaxed">
        Passionate about{" "}
        <span className="text-neutral-800 dark:text-neutral-200 font-semibold italic">
          networks, embedded systems, IoT
        </span>
        , and everything tech that connects the world.
      </p>
    </div>
  );
}
