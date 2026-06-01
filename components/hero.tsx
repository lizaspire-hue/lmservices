import Link from "next/link";

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
      <div className="hidden lg:block relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f] via-[#0d1f3c] to-[#162940]" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep to-transparent z-10" />
        <div className="absolute inset-0 flex items-center justify-center opacity-35">
          <svg
            className="w-full h-full"
            viewBox="0 0 500 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="60"
              y="80"
              width="380"
              height="440"
              stroke="rgba(42,157,143,0.3)"
              strokeWidth="1"
            />
            <rect
              x="90"
              y="110"
              width="320"
              height="380"
              stroke="rgba(42,157,143,0.2)"
              strokeWidth="0.5"
            />
            <line
              x1="60"
              y1="520"
              x2="440"
              y2="520"
              stroke="rgba(42,157,143,0.4)"
              strokeWidth="1"
            />
            <rect
              x="140"
              y="350"
              width="220"
              height="170"
              stroke="rgba(42,157,143,0.35)"
              strokeWidth="0.8"
            />
            <rect
              x="170"
              y="380"
              width="80"
              height="80"
              stroke="rgba(42,157,143,0.25)"
              strokeWidth="0.5"
            />
            <rect
              x="290"
              y="380"
              width="60"
              height="80"
              stroke="rgba(42,157,143,0.25)"
              strokeWidth="0.5"
            />
            <rect
              x="180"
              y="130"
              width="140"
              height="180"
              stroke="rgba(42,157,143,0.3)"
              strokeWidth="0.8"
            />
            <line
              x1="180"
              y1="220"
              x2="320"
              y2="220"
              stroke="rgba(42,157,143,0.15)"
              strokeWidth="0.5"
            />
            <circle
              cx="250"
              cy="90"
              r="8"
              stroke="rgba(42,157,143,0.5)"
              strokeWidth="0.8"
            />
            <line
              x1="250"
              y1="98"
              x2="250"
              y2="130"
              stroke="rgba(42,157,143,0.3)"
              strokeWidth="0.8"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
