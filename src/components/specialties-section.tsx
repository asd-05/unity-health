"use client";

import { useEffect, useRef, useState } from "react";
import LogoLoop from "./LogoLoop";
import { specialties } from "../app/data/specialties";

export const SpecialtiesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="specialties"
      ref={sectionRef}
      className={`py-16 sm:py-24 bg-white dark:bg-background transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-block px-4 py-2 bg-blue-50 dark:bg-slate-800/50 text-blue-500 dark:text-blue-400 rounded-full text-sm font-semibold mb-4">
            Our Specialties
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Comprehensive Care Across{" "}
            <span className="text-blue-500">Medical Fields</span>
          </h2>
          <p className="text-lg text-foreground/70">
            From Pediatrics to Orthopedics, Cardiology to OBGYN, we cover a wide
            range of specialties to ensure your complete well-being.
          </p>
        </div>

        {/* Logo Loop */}
        <div className="relative h-48 overflow-visible">
          <LogoLoop
            logos={specialties.map((s) => ({
              node: (
                <div className="cursor-pointer p-4 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-600 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center w-36">
                  {s.icon}
                  <span className="mt-2 font-semibold text-sm text-gray-800 dark:text-white">
                    {s.title}
                  </span>
                </div>
              ),
              title: s.title,
            }))}
            speed={120}
            direction="left"
            logoHeight={96}
            gap={32}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Medical Specialties"
          />
        </div>
      </div>
    </section>
  );
};
