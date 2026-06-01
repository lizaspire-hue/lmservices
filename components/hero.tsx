import Link from "next/link";
import { Logo } from "./logo";

export function Hero() {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-navy-deep relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(42,157,143,0.12)_0%,transparent_65%)] pointer-events-none" />

      {/* Left Content */}
      <div className="flex flex-col justify-center px-[6%] lg:px-[8%] pt-28 lg:pt-32 pb-16 relative z-10">
        <div className="fade-up delay-1 inline-flex items-center gap-2 text-xs font-medium tracking-[0.12em] uppercase text-teal mb-8">
          <span className="block w-7 h-px bg-teal" />
          London Short-Term Rental Management
        </div>

        <h1 className="fade-up delay-2 font-serif text-[clamp(2.6rem,4.5vw,4rem)] font-black text-white leading-[1.1] mb-6">
          We manage your property.
          <br />
          <em className="not-italic text-teal">You keep the income.</em>
        </h1>

        <p className="fade-up delay-3 text-lg text-white/65 leading-relaxed max-w-[440px] mb-10">
          Professional Airbnb co-hosting and property revamp across London. We
          handle everything — guests, pricing, cleaning, maintenance — while you
          stay completely hands-off.
        </p>

        <div className="fade-up delay-4 flex gap-4 flex-wrap">
          <Link
            href="#contact"
            className="bg-teal text-white px-8 py-4 rounded-sm text-sm font-medium tracking-widest uppercase hover:bg-teal-light hover:-translate-y-0.5 transition-all"
          >
            Get a free assessment
          </Link>
          <Link
            href="#services"
            className="text-white/75 px-8 py-4 border border-white/20 rounded-sm text-sm font-normal tracking-widest uppercase hover:border-teal hover:text-teal transition-colors"
          >
            See our services
          </Link>
        </div>

        <div className="fade-up delay-5 flex gap-10 mt-14 pt-8 border-t border-white/[0.08]">
          <div>
            <div className="font-serif text-3xl font-bold text-white">20+</div>
            <div className="text-xs text-white/45 uppercase tracking-widest mt-1">
              Years experience
            </div>
          </div>
          <div>
            <div className="font-serif text-3xl font-bold text-white">40%</div>
            <div className="text-xs text-white/45 uppercase tracking-widest mt-1">
              Avg occupancy uplift
            </div>
          </div>
          <div>
            <div className="font-serif text-3xl font-bold text-white">24h</div>
            <div className="text-xs text-white/45 uppercase tracking-widest mt-1">
              Response time
            </div>
          </div>
        </div>
      </div>

      {/* Right Visual */}
      <div className="hidden lg:flex relative overflow-hidden items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f] via-[#0d1f3c] to-[#162940]" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep to-transparent z-10" />
        <Logo className="w-72 h-56 text-teal/40 relative z-20" />
      </div>
    </section>
  );
}
