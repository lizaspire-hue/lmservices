"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What does your commission cover?",
    answer:
      "Our commission covers all guest communications, check-in and check-out management, cleaning coordination, maintenance liaising, dynamic pricing management, and your monthly income report. Property costs (consumables, repairs above an agreed threshold) are charged to the owner separately and always communicated in advance.",
  },
  {
    question: "Do you work with platforms other than Airbnb?",
    answer:
      "Yes. We list across multiple platforms including Booking.com and VRBO where appropriate, and can also manage direct bookings. More platforms means more visibility and fewer vacant nights.",
  },
  {
    question: "What about the 90-night London cap?",
    answer:
      "Greater London properties are subject to a 90-night annual limit for short-term letting unless you have planning permission. We track this carefully for all managed properties and will discuss medium-term let alternatives (1–6 months) if it's relevant to you — these are not subject to the cap.",
  },
  {
    question: "What happens if there's damage?",
    answer:
      "Airbnb's AirCover provides up to $3M in host damage protection. We document every check-in and check-out thoroughly, raise any damage claims on your behalf, and advise you on additional host insurance where we feel the cover is appropriate.",
  },
  {
    question: "How quickly can my property be listed?",
    answer:
      "Most properties are live within 7 days of us agreeing terms. The revamp phase — photography, staging, listing copy, pricing setup — typically takes 3–5 days, after which we go live immediately.",
  },
  {
    question: "Is there a minimum contract period?",
    answer:
      "We ask for a 3-month minimum to allow time to optimise occupancy and pricing properly. After that, the agreement continues on a rolling monthly basis with 30 days' notice to end it. No lock-in, no exit fees.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-[6%] lg:px-[8%] bg-sand" id="faq">
      <div className="flex items-center gap-2 text-xs font-medium tracking-[0.14em] uppercase text-teal mb-4">
        <span className="block w-6 h-px bg-teal" />
        Common questions
      </div>

      <h2 className="font-serif text-[clamp(2rem,3.5vw,2.8rem)] font-bold text-navy leading-tight">
        FAQ
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-14">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-border rounded p-6 cursor-pointer transition-colors hover:border-teal"
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-start gap-4">
              <h3 className="font-medium text-navy">{faq.question}</h3>
              {openIndex === index ? (
                <Minus className="text-teal w-5 h-5 flex-shrink-0" />
              ) : (
                <Plus className="text-teal w-5 h-5 flex-shrink-0" />
              )}
            </div>
            {openIndex === index && (
              <p className="text-sm text-muted leading-relaxed mt-4">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
