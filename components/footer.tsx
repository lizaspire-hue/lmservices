import Link from "next/link";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="bg-navy-deep py-10 px-[6%] lg:px-[8%] flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <span className="font-serif text-white text-lg">
          LM <span className="text-teal">Property</span>
        </span>
        <Logo className="w-10 h-8 text-white" />
      </div>

      <p className="text-white/35 text-sm">
        © 2025 LM Property Management. All rights reserved.
      </p>

      <div className="flex gap-6">
        <Link
          href="#"
          className="text-white/40 text-sm hover:text-teal transition-colors"
        >
          Privacy Policy
        </Link>
        <Link
          href="#"
          className="text-white/40 text-sm hover:text-teal transition-colors"
        >
          Terms of Service
        </Link>
        <Link
          href="https://lmfit.uk"
          className="text-white/40 text-sm hover:text-teal transition-colors"
        >
          LMFIT Fitness
        </Link>
      </div>
    </footer>
  );
}
