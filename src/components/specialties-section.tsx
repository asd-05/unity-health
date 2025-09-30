"use client";

import { useEffect, useRef, useState } from "react";
import {
  Heart,
  Brain,
  Stethoscope,
  Pill,
  Users,
  Activity,
} from "lucide-react";

export const SpecialtiesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const specialties = [
    {
      icon: Activity,
      title: "Dentistry",
      description:
        "Complete dental care including preventive, cosmetic, and restorative treatments.",
    },
    {
      icon: Stethoscope,
      title: "General Diagnosis",
      description:
        "Comprehensive health assessments and diagnostic services for all conditions.",
    },
    {
      icon: Brain,
      title: "Neuro Surgery",
      description:
        "Advanced neurological surgical procedures performed by expert surgeons.",
    },
    {
      icon: Heart,
      title: "Cardiology",
      description:
        "Specialized heart care including diagnosis, treatment, and preventive services.",
    },
    {
      icon: Pill,
      title: "Pharmacy",
      description:
        "24/7 pharmacy services with genuine medications and expert consultation.",
    },
    {
      icon: Users,
      title: "Trained Staff",
      description:
        "Highly qualified medical professionals dedicated to patient care excellence.",
    },
  ];

  return (
    <section
      id="specialties"
      ref={sectionRef}
      className={`py-16 sm:py-24 bg-gradient-to-br from-blue-50/50 to-white transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-block px-4 py-2 bg-blue-50 dark:bg-slate-800/50 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold mb-4">
            Our Specialties
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Comprehensive{" "}
            <span className="text-blue-600 dark:text-blue-400">Medical Services</span>
          </h2>
          <p className="text-lg text-foreground/70">
            We offer a wide range of specialized medical services to meet all
            your healthcare needs
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {specialties.map((specialty, index) => {
            const Icon = specialty.icon;
            return (
              <div
                key={index}
                className="bg-card p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group dark:bg-slate-800"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="w-14 h-14 bg-blue-100 dark:bg-slate-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors dark:group-hover:bg-blue-500">
                  <Icon className="text-blue-600 group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground"> {specialty.title} </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {specialty.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};