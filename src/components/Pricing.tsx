"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";

const BCA_ACCOUNT = "6300407216";
const BCA_NAME = "Afdil Rosaldi";
const WHATSAPP = "6285188707307";

const benefits = [
  "Lab Discussion",
  "Deep Dive Research",
  "Glassnode Feed",
  "Cointelegraph Feed",
  "Binance Killer News",
  "Whale Position Tracking",
  "Whale Trending Alerts",
  "KOLs Calling Signals",
  "Private Forum Access",
  "VIP Community Network",
];

export default function Pricing() {
  const [username, setUsername] = useState("");
  const [clicked, setClicked] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, []);

  const handlePayment = () => {
    if (!username.trim()) {
      alert("Masukkan Discord Username terlebih dahulu.");
      return;
    }
    
    setOpen(true);
  };

  return (
    <section id="pricing" className="relative px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-blue-400">Membership</p>
          <h2 className="mt-4 text-5xl font-black text-white">Become a VIP Member</h2>
          <p className="mt-3 text-zinc-400">One payment. Lifetime access. No subscription.</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl">
            <h3 className="text-xl font-semibold text-white">What You Get?</h3>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {benefits.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/10">
                    <Check size={18} className="text-blue-400" />
                  </div>
                  <span className="text-sm text-zinc-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 -z-10 rounded-3xl bg-blue-500/10 blur-[120px]" />
            <div className="rounded-3xl border border-blue-500/15 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-4 backdrop-blur-xl">
              <div className="mx-auto w-fit rounded-full bg-blue-500/10 px-4 py-2 text-xs font-semibold tracking-[0.3em] text-blue-400">LIFETIME</div>
              <p className="mt-8 text-center text-sm text-zinc-500 line-through">Rp 4.999.000</p>
              <h3 className="mt-2 text-center text-4xl font-bold text-white">Rp 2.999.000</h3>
              <p className="mt-3 text-center text-sm text-zinc-400">Pay once, access forever!</p>

              <div className="mt-8">
                <label className="mb-2 block text-xs font-semibold uppercase text-zinc-400">Discord Username</label>
                <input
                  type="text"
                  placeholder="username#1234"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white outline-none focus:border-blue-500"
                />
              </div>

              <button
  onClick={handlePayment}
  className={`relative mt-6 w-full overflow-hidden rounded-2xl bg-white py-5 text-lg font-bold text-black transition-all duration-300
  hover:-translate-y-1 hover:scale-[1.02]
  active:scale-[0.98]
  ${
    clicked
      ? "shadow-[0_0_80px_rgba(29,78,255,0.55)]"
      : "shadow-[0_0_20px_rgba(255,255,255,0.08)]"
  }`}
>
  {clicked && (
    <>
      <span className="absolute inset-0 rounded-2xl bg-blue-500/20 animate-ping" />
      <span className="absolute inset-0 rounded-2xl bg-blue-400/10 blur-xl" />
    </>
  )}

  <span className="relative z-10">
    Become VIP
  </span>
</button>

              <p className="mt-5 text-center text-xs text-zinc-500">
                Manual verification via Bank Transfer
              </p>
            </div>
          </div>
        </div>
      </div>

      {open && (
  <div
  className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-5"
  onClick={() => setOpen(false)}
>
    <div
  className="relative w-full max-w-[340px] rounded-2xl border border-white/10 bg-[#0A0F1C]/95 shadow-[0_0_50px_rgba(29,78,255,0.18)]"
  onClick={(e) => e.stopPropagation()}
>

      {/* Glow */}
      <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]" />

      <div className="relative p-5">

  <button
    onClick={() => setOpen(false)}
    className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-zinc-400 transition hover:bg-white/10 hover:text-white"
  >
    ✕
  </button>

        <div className="flex justify-center">
          <div className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-xs font-semibold tracking-[0.25em] text-blue-300">
            LIFETIME VIP ACCESS
          </div>
        </div>

        <h3 className="mt-3 text-center text-3xl font-black">
          Complete Your Payment
        </h3>

<p className="mt-4 text-center text-lg font-semibold text-zinc-500 line-through">
  Rp 4.999.000
</p>

<p className="mt-1 text-center text-4xl font-black text-white">
  Rp 2.999.000
</p>

        <div className="my-4 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* BANK CARD */}

        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-500">
                Bank
              </p>

              <h4 className="mt-1 text-2xl font-bold">
                BCA
              </h4>
            </div>

            <div className="rounded-full bg-blue-500/10 px-4 py-2 text-xs font-semibold text-blue-400">
              Instant Verification
            </div>

          </div>

          <div className="mt-8">

            <p className="text-xs uppercase tracking-widest text-zinc-500">
              Account Number
            </p>

            <div className="mt-2 flex items-center justify-between rounded-xl bg-black/20 p-3">

              <span className="text-lg font-bold tracking-wider">
                {BCA_ACCOUNT}
              </span>

              <button
                onClick={() => {
                  navigator.clipboard.writeText(BCA_ACCOUNT);
                  alert("Copied.");
                }}
                className="rounded-xl bg-blue-500 px-4 py-2 text-sm font-semibold hover:bg-blue-600"
              >
                Copy
              </button>

            </div>

          </div>

          <div className="mt-6">

            <p className="text-xs uppercase tracking-widest text-zinc-500">
              Account Holder
            </p>

            <p className="mt-2 text-lg font-semibold">
              {BCA_NAME}
            </p>

          </div>

        </div>

        {/* BUTTON */}

        <button
          onClick={() =>
            window.open(
              `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                `Halo Admin,

Saya sudah transfer VIP The Screening Lab.

Discord Username: ${username}

Berikut bukti transfer saya:`
              )}`,
              "_blank"
            )
          }
          className="mt-5 w-full rounded-xl bg-gradient-to-r from-green-500 to-green-600 py-4 text-base font-bold transition hover:scale-[1.02]"
        >
          Verify Payment via WhatsApp
        </button>


      </div>
    </div>
  </div>
      )}
    </section>
  );
}