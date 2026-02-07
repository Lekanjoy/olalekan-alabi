"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-8 lg:top-14 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] lg:w-full max-w-[733px] flex items-center justify-between px-4 lg:px-6 py-4 lg:py-5 bg-white border-[2px] lg:border-[5px] border-black shadow-[4px_4px_0px_rgba(0,0,0,0.25)] lg:shadow-[6px_6px_0px_rgba(0,0,0,0.25)] z-50">
        <div className="flex items-center gap-2 lg:gap-4">
          <Image
            src="/icons/star-logo.svg"
            alt="znis logo"
            width={30}
            height={30}
            className="lg:w-[49px] lg:h-[49px]"
          />
          <span className="text-2xl lg:text-4xl font-normal text-black font-space">
            Olalekan
          </span>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <a
            href="#about"
            className="text-lg lg:text-2xl font-medium text-black font-space hover:opacity-70 transition"
          >
            About
          </a>
          <a
            href="#portfolio"
            className="text-lg lg:text-2xl font-medium text-black font-space relative hover:opacity-70 transition"
          >
            Portfolio
            <span className="absolute -bottom-2 left-0 right-0 h-2 lg:h-2.5 bg-yellow -z-10"></span>
          </a>
          <a
            href="#contact"
            className="text-lg lg:text-2xl font-medium text-black font-space hover:opacity-70 transition"
          >
            Contact
          </a>
        </div>
        {/* Mobile Menu Icon */}
        <button
          className="md:hidden p-2"
          aria-label="Menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div
            className={`w-6 h-0.5 bg-black mb-1.5 transition-transform ${isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-black mb-1.5 transition-opacity ${isMenuOpen ? "opacity-0" : ""
              }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-black transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
          ></div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/70 bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white border-l-[3px] border-black shadow-[-4px_0px_0px_rgba(0,0,0,0.25)] z-40 transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col gap-6 p-8 pt-32">
          <a
            href="#about"
            className="text-2xl font-medium text-black font-space hover:opacity-70 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#portfolio"
            className="text-2xl font-medium text-black font-space relative hover:opacity-70 transition inline-block"
            onClick={() => setIsMenuOpen(false)}
          >
            Portfolio
            <span className="absolute -bottom-2 left-0 right-0 h-2.5 bg-yellow -z-10"></span>
          </a>
          <a
            href="#contact"
            className="text-2xl font-medium text-black font-space hover:opacity-70 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
}
