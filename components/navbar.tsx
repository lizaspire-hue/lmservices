"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] py-5 bg-navy/[0.97] backdrop-blur-md border-b border-white/[0.06]">
      <div className="font-serif text-xl text-white tracking-wide">
        LM <span className="text-teal">Property</span>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-9 list-none">
        <li>
          <Link
            href="#services"
            className="text-white/75 text-sm font-normal tracking-widest uppercase hover:text-teal-light transition-colors"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="#process"
            className="text-white/75 text-sm font-normal tracking-widest uppercase hover:text-teal-light transition-colors"
          >
            How it works
          </Link>
        </li>
        <li>
          <Link
            href="#why"
            className="text-white/75 text-sm font-normal tracking-widest uppercase hover:text-teal-light transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="#faq"
            className="text-white/75 text-sm font-normal tracking-widest uppercase hover:text-teal-light transition-colors"
          >
            FAQ
          </Link>
        </li>
        <li>
          <Link
            href="#contact"
            className="bg-teal text-white px-5 py-2 rounded-sm text-sm font-medium tracking-widest uppercase hover:bg-teal-light transition-colors"
          >
            Get started
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-navy-deep/95 backdrop-blur-md p-6 md:hidden">
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                href="#services"
                className="block text-white/75 text-sm tracking-widest uppercase py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#process"
                className="block text-white/75 text-sm tracking-widest uppercase py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                How it works
              </Link>
            </li>
            <li>
              <Link
                href="#why"
                className="block text-white/75 text-sm tracking-widest uppercase py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#faq"
                className="block text-white/75 text-sm tracking-widest uppercase py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="inline-block bg-teal text-white px-5 py-3 rounded-sm text-sm font-medium tracking-widest uppercase mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Get started
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
