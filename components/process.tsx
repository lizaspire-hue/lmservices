const steps = [
  {
    num: 1,
    title: "Free Property Assessment",
    description:
      "We review your property or existing listing, identify what's holding back your income, and tell you exactly what we'd do — no obligation.",
  },
  {
    num: 2,
    title: "Revamp & Setup",
    description:
      "We overhaul your photos, listing copy, pricing strategy, and staging. Your property is ready to list within 7 days of us getting started.",
  },
  {
    num: 3,
    title: "We Manage, You Earn",
    description:
      "Sit back. We handle guests, cleaning, maintenance, and pricing — 24/7. You receive a detailed monthly income report and your commission direct to your account.",
  },
];

export function Process() {
  return (
    <section className="py-24 px-[6%] lg:px-[8%] bg-warm-white" id="process">
      <div className="flex items-center gap-2 text-xs font-medium tracking-[0.14em] uppercase text-teal mb-4">
        <span className="block w-6 h-px bg-teal" />
        How it works
      </div>

      <h2 className="font-serif text-[clamp(2rem,3.5vw,2.8rem)] font-bold text-navy leading-tight">
        From enquiry to income in 7 days
      </h2>

      <p className="text-lg text-muted leading-relaxed max-w-xl mt-4">
        {"We've"} made the onboarding process as smooth as possible. Three steps,
        no faff.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 mt-16 relative">
        {/* Connecting line (desktop only) */}
        <div className="hidden lg:block absolute top-9 left-[16.7%] right-[16.7%] h-px bg-gradient-to-r from-teal via-teal/20 to-teal" />

        {steps.map((step) => (
          <div
            key={step.num}
            className="text-center px-8 relative pb-10 lg:pb-0"
          >
            <div className="w-[4.5rem] h-[4.5rem] rounded-full bg-teal text-white font-serif text-2xl font-bold flex items-center justify-center mx-auto mb-7 relative z-10 shadow-[0_0_0_8px_var(--warm-white)]">
              {step.num}
            </div>
            <h3 className="font-serif text-lg text-navy mb-3">{step.title}</h3>
            <p className="text-sm text-muted leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
