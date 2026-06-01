import { Home, TrendingUp, Search, Scale } from "lucide-react";

const reasons = [
  {
    icon: Home,
    title: "We treat your property like our own",
    description:
      "Every property we take on gets the same care and attention we'd give our own home. That means high standards, fast responses, and no corners cut.",
  },
  {
    icon: TrendingUp,
    title: "Income-focused from day one",
    description:
      "Our entire approach is built around maximising your returns — through smart pricing, high-quality listings, and repeat guest strategies that fill your calendar.",
  },
  {
    icon: Search,
    title: "Transparent, always",
    description:
      "Monthly reports show you exactly what was earned, what was spent, and what your net income is. No surprises, no hidden charges.",
  },
  {
    icon: Scale,
    title: "London market expertise",
    description:
      "We know the rules — the 90-night cap, mortgage clauses, council requirements — and we help you stay compliant while earning the most you legally can.",
  },
];

export function WhyUs() {
  return (
    <section className="py-24 px-[6%] lg:px-[8%] bg-navy">
      <div className="flex items-center gap-2 text-xs font-medium tracking-[0.14em] uppercase text-teal mb-4">
        <span className="block w-6 h-px bg-teal" />
        Why LM Property
      </div>

      <h2 className="font-serif text-[clamp(2rem,3.5vw,2.8rem)] font-bold text-white leading-tight">
        What sets us apart
      </h2>

      <p className="text-lg text-white/55 leading-relaxed max-w-xl mt-4">
        We bring a level of professionalism and personal attention most
        management agencies simply {"don't"}.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-white/[0.04] border border-white/[0.08] rounded p-8 transition-colors hover:bg-white/[0.07]"
          >
            <reason.icon className="w-7 h-7 text-teal mb-4" />
            <h3 className="text-white font-medium mb-2">{reason.title}</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
