export default function Features() {
  const items = [
    {
      title: "Whale Tracking",
      description:
        "Monitor high-value wallets and follow smart money movements in real time.",
    },
    {
      title: "Wallet Screening",
      description:
        "Institutional-grade wallet analysis to identify profitable market participants.",
    },
    {
      title: "On-Chain Intelligence",
      description:
        "Receive curated insights from blockchain activity before the market reacts.",
    },
    {
      title: "Private Discord",
      description:
        "Exclusive access to premium alerts, research, and market discussions.",
    },
  ];

  return (
    <section id="features" className="relative px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">

        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-blue-400">
            What You Get
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            Everything You Need
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            Built for serious investors who want an institutional edge in the crypto market.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/[0.05]"
            >
              <h3 className="text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-zinc-400 leading-8">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}