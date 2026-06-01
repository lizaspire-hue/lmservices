"use client";

import { useState } from "react";
import { MessageCircle, Mail, MapPin } from "lucide-react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section className="py-24 px-[6%] lg:px-[8%] bg-warm-white" id="contact">
      <div className="flex items-center gap-2 text-xs font-medium tracking-[0.14em] uppercase text-teal mb-4">
        <span className="block w-6 h-px bg-teal" />
        Get in touch
      </div>

      <h2 className="font-serif text-[clamp(2rem,3.5vw,2.8rem)] font-bold text-navy leading-tight">
        {"Let's"} assess your property
      </h2>

      <p className="text-lg text-muted leading-relaxed max-w-xl mt-4">
        Fill in the form and {"we'll"} come back to you within 24 hours with a
        free, no-obligation assessment of your {"property's"} income potential.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mt-14">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-navy tracking-widest uppercase">
                Your name
              </label>
              <input
                type="text"
                placeholder="Jane Smith"
                required
                className="border border-border rounded-sm py-3 px-4 text-sm bg-white focus:border-teal outline-none transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-navy tracking-widest uppercase">
                Email address
              </label>
              <input
                type="email"
                placeholder="jane@example.com"
                required
                className="border border-border rounded-sm py-3 px-4 text-sm bg-white focus:border-teal outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-navy tracking-widest uppercase">
                Phone / WhatsApp
              </label>
              <input
                type="tel"
                placeholder="+44 7700 000000"
                className="border border-border rounded-sm py-3 px-4 text-sm bg-white focus:border-teal outline-none transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-navy tracking-widest uppercase">
                Property postcode
              </label>
              <input
                type="text"
                placeholder="EC1A 1BB"
                required
                className="border border-border rounded-sm py-3 px-4 text-sm bg-white focus:border-teal outline-none transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-navy tracking-widest uppercase">
              Service {"you're"} interested in
            </label>
            <select className="border border-border rounded-sm py-3 px-4 text-sm bg-white focus:border-teal outline-none transition-colors">
              <option value="">Select a service...</option>
              <option>Full Management (20–25%)</option>
              <option>Revamp Only (from £750)</option>
              <option>Medium-Term Lets (15–18%)</option>
              <option>Not sure — please advise</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-navy tracking-widest uppercase">
              Tell us about your property
            </label>
            <textarea
              placeholder="E.g. 2-bed flat in Islington, currently empty / already on Airbnb but underperforming..."
              rows={4}
              className="border border-border rounded-sm py-3 px-4 text-sm bg-white focus:border-teal outline-none transition-colors resize-y"
            />
          </div>

          <button
            type="submit"
            className="self-start bg-teal text-white px-8 py-4 rounded-sm text-sm font-medium tracking-widest uppercase hover:bg-teal-light transition-colors"
          >
            Send enquiry
          </button>

          {submitted && (
            <div className="text-teal text-sm p-4 bg-teal-pale rounded mt-2">
              Thanks — {"we'll"} be in touch within 24 hours!
            </div>
          )}
        </form>

        <div>
          <h3 className="font-serif text-2xl text-navy mb-4">
            Prefer to reach out directly?
          </h3>
          <p className="text-muted leading-relaxed mb-8">
            {"We're"} a small, responsive team. If {"you'd"} rather just send a
            message, WhatsApp is the fastest way to get a response.
          </p>

          <div className="flex flex-col gap-3">
            <a
              href="https://wa.me/447457405030"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-sand rounded transition-colors hover:bg-teal-pale"
            >
              <MessageCircle className="w-6 h-6 text-teal" />
              <div>
                <div className="text-sm text-navy font-normal">WhatsApp us</div>
                <div className="text-xs text-muted">
                  Fastest response — usually same day
                </div>
              </div>
            </a>

            <a
              href="mailto:info@lmfit.uk"
              className="flex items-center gap-4 p-4 bg-sand rounded transition-colors hover:bg-teal-pale"
            >
              <Mail className="w-6 h-6 text-teal" />
              <div>
                <div className="text-sm text-navy font-normal">info@lmfit.uk</div>
                <div className="text-xs text-muted">
                  We reply within 24 hours
                </div>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 bg-sand rounded">
              <MapPin className="w-6 h-6 text-teal" />
              <div>
                <div className="text-sm text-navy font-normal">
                  Based in Islington, London
                </div>
                <div className="text-xs text-muted">
                  Managing properties across Greater London
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
