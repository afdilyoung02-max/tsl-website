export default function Background() {
  return (
    <>
      {/* Base Background */}
      <div className="fixed inset-0 -z-50 bg-[#04070D]" />

      {/* Top Left Glow */}
      <div className="fixed left-[-300px] top-[-300px] -z-40 h-[800px] w-[800px] rounded-full bg-indigo-600/10 blur-[220px]" />

      {/* Bottom Right Premium Blue Glow */}
      <div className="fixed bottom-[-350px] right-[-350px] -z-40 h-[900px] w-[900px] rounded-full bg-cyan-500/15 blur-[240px]" />

      {/* Center Glow */}
      <div className="fixed left-1/2 top-1/3 -z-40 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-blue-500/8 blur-[180px]" />

      {/* Grid */}
      <div
        className="fixed inset-0 -z-30 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Noise */}
      <div
        className="fixed inset-0 -z-20 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,.18) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Vignette */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,.85)_100%)]" />
    </>
  );
}