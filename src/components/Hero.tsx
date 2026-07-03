export default function Hero() {
  return (
    <section className="relative flex items-center justify-center px-6 pt-28 pb-10 text-white">
      <div className="mx-auto max-w-6xl text-center">

        {/* Eyebrow */}
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
          International Grade Market Intelligence
        </p>

        {/* Title */}
        <h1 className="mt-8 text-4xl font-black leading-none tracking-tight md:text-6xl xl:text-7xl">
          THE SCREENING LAB
        </h1>

        {/* Subtext (closer spacing) */}
        <p className="mt-6 text-xs uppercase tracking-[0.35em] text-white/40 leading-snug">
          Institutional Intelligence · Smart Money Tracking · Exclusive Market Insights
        </p>

        {/* Footer line (closer to subtext) */}
        <p className="mt-2 text-xs font-extrabold uppercase tracking-[0.35em] text-white/70">
          All-in-One Private Platform
        </p>

      </div>
    </section>
  );
}