import { ArrowUpRight } from "lucide-react";

const DISCORD_URL = "https://discord.gg/UU5jxMg7cM";
const INSTAGRAM_URL = "https://instagram.com/afdilyoung";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-20 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 text-center md:flex-row md:text-left">
        <div>
          
          <h2 className="mt-3 text-2xl font-black tracking-tight">
            THE SCREENING LAB
          </h2>

          <p className="mt-4 max-w-md leading-7 text-zinc-500">
            Institutional-Grade Market Intelligence built for serious
            investors, traders, and on-chain analysts.
          </p>
        </div>

        <div className="flex flex-col gap-5 md:flex-row md:gap-10">
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-zinc-400 transition hover:text-white"
          >
            Discord
            <ArrowUpRight size={16} />
          </a>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-zinc-400 transition hover:text-white"
          >
            Instagram
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-sm text-zinc-600 md:flex-row">
        <span>© 2026 The Screening Lab. All rights reserved.</span>

        <span>Powered by TSL Intelligence</span>
      </div>
    </footer>
  );
}