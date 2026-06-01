export function About() {
  return (
    <section className="py-24 px-[6%] lg:px-[8%] bg-warm-white" id="why">
      <div className="flex items-center gap-2 text-xs font-medium tracking-[0.14em] uppercase text-teal mb-4">
        <span className="block w-6 h-px bg-teal" />
        About LM Property
      </div>

      <h2 className="font-serif text-[clamp(2rem,3.5vw,2.8rem)] font-bold text-navy leading-tight">
        Property management with a personal touch
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-14">
        <div className="space-y-4">
          <p className="text-base leading-relaxed text-[#444]">
            LM Property is a London-based short-term rental management and
            property revamp service. We help property owners unlock the full
            income potential of their homes — without the stress of day-to-day
            management.
          </p>
          <p className="text-base leading-relaxed text-[#444]">
            Founded by Liz Morris, a client-facing professional with over{" "}
            <strong className="text-navy font-medium">
              20 years of experience
            </strong>{" "}
            building high-performing services and managing demanding clients, LM
            Property brings the same rigour and attention to detail to every
            property we manage.
          </p>
          <p className="text-base leading-relaxed text-[#444]">
            {"We're"} specialists in the London market — including navigating the
            90-night cap, medium-term corporate lets, and maximising returns
            within those rules.
          </p>
        </div>

        <div className="bg-navy rounded p-10 lg:p-12 relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full border border-teal/20" />
          <div className="absolute -top-5 -right-5 w-24 h-24 rounded-full bg-teal/[0.06]" />

          <p className="font-serif text-xl text-white leading-relaxed italic relative z-10 mb-6">
            {"\"Most landlords are leaving 30–40% of their property's income on the table. The fix is usually simpler than they think — better photos, smarter pricing, a polished listing.\""}
          </p>
          <div className="text-teal text-sm font-medium relative z-10">
            — Liz Morris, Founder, LM Property
          </div>
        </div>
      </div>
    </section>
  );
}
