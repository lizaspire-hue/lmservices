import Link from "next/link";
import { Check } from "lucide-react";

const services = [
  {
    name: "Revamp Only",
    price: "One-off fee",
    priceSmall: "from £750",
    description:
      "We transform your listing and leave you to manage it. Perfect for confident hosts who just need a professional overhaul.",
    includes: [
      "Professional photography direction",
      "Full listing rewrite and optimisation",
      "Interior styling recommendations",
      "Dynamic pricing setup",
      "Guest messaging templates",
    ],
    cta: "Get a quote",
    featured: false,
  },
  {
    name: "Full Management",
    price: "20–25%",
    priceSmall: "of gross monthly income",
    description:
      "We handle everything, end-to-end. You receive monthly income and reports — nothing else to think about.",
    includes: [
      "Everything in Revamp Only",
      "Guest communications & check-in",
      "Cleaning team coordination",
      "Maintenance management",
      "Dynamic pricing management",
      "Monthly income & performance reports",
    ],
    cta: "Get started",
    featured: true,
    badge: "Most popular",
  },
  {
    name: "Medium-Term Lets",
    price: "15–18%",
    priceSmall: "of monthly income",
    description:
      "Ideal for London properties where the 90-night cap applies. We place professional tenants for 1–6 month stays — no cap, less turnover, steady income.",
    includes: [
      "Tenant sourcing & vetting",
      "Corporate & professional tenants",
      "Flexible term agreements",
      "Property setup and staging",
      "Check-in / check-out management",
    ],
    cta: "Find out more",
    featured: false,
  },
];

export function Services() {
  return (
    <section className="py-24 px-[6%] lg:px-[8%] bg-sand" id="services">
      <div className="flex items-center gap-2 text-xs font-medium tracking-[0.14em] uppercase text-teal mb-4">
        <span className="block w-6 h-px bg-teal" />
        What we offer
      </div>

      <h2 className="font-serif text-[clamp(2rem,3.5vw,2.8rem)] font-bold text-navy leading-tight">
        Services built around your property
      </h2>

      <p className="text-lg text-muted leading-relaxed max-w-xl mt-4">
        Choose the level of involvement that suits you. All services include our
        signature property assessment and ongoing optimisation.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
        {services.map((service) => (
          <div
            key={service.name}
            className={`rounded p-8 lg:p-10 relative transition-all hover:shadow-xl hover:-translate-y-1 ${
              service.featured
                ? "bg-navy border-transparent"
                : "bg-white border border-border"
            }`}
          >
            {service.badge && (
              <div className="inline-block bg-teal text-white text-[0.68rem] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-sm mb-6">
                {service.badge}
              </div>
            )}

            <h3
              className={`font-serif text-2xl font-bold mb-2 ${
                service.featured ? "text-white" : "text-navy"
              }`}
            >
              {service.name}
            </h3>

            <div
              className={`font-serif text-2xl font-bold mb-4 ${
                service.featured ? "text-teal-light" : "text-teal"
              }`}
            >
              {service.price}{" "}
              <small className="text-sm font-light font-sans text-muted">
                {service.priceSmall}
              </small>
            </div>

            <p
              className={`text-sm leading-relaxed mb-6 ${
                service.featured ? "text-white/70" : "text-muted"
              }`}
            >
              {service.description}
            </p>

            <ul className="space-y-3 mb-8">
              {service.includes.map((item, idx) => (
                <li
                  key={idx}
                  className={`text-sm flex items-start gap-2 ${
                    service.featured ? "text-white" : "text-foreground"
                  }`}
                >
                  <Check className="text-teal w-4 h-4 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="#contact"
              className={`block text-center py-3 rounded-sm text-sm font-medium tracking-widest uppercase transition-colors ${
                service.featured
                  ? "bg-teal text-white hover:bg-teal-light"
                  : "border-2 border-teal text-teal hover:bg-teal hover:text-white"
              }`}
            >
              {service.cta}
            </Link>
          </div>
        ))}
      </div>

      {/* London Note */}
      <div className="bg-teal-pale border-l-4 border-teal px-6 py-5 rounded-r mt-10 max-w-3xl">
        <p className="text-sm text-navy leading-relaxed">
          <strong className="text-teal">London landlords:</strong> Did you know
          that most standard London residential mortgages and leases prohibit
          short-term letting without consent? And that properties in Greater
          London are subject to a 90-night annual cap? We help you navigate all
          of this — including medium-term alternatives that sidestep the cap
          entirely.
        </p>
      </div>
    </section>
  );
}
