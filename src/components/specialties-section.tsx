"use client";

import { JSX, useEffect, useRef, useState } from "react";
import LogoLoop from "./LogoLoop";
import {
  Baby,
  Stethoscope,
  Heart,
  Brain,
  Users,
  Activity,
  Scissors,
  Droplet,
  Sparkles,
  Ear,
  Eye,
  Smile,
  Laugh,
  Bone,
} from "lucide-react";

interface Specialty {
  title: string;
  icon: JSX.Element;
  description: string;
}

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

  const specialties: Specialty[] = [
    {
      icon: <Baby size={48} className="text-blue-500" />,
      title: "Pediatrics",
      description: "Comprehensive care for infants, children, and adolescents.",
    },
    {
      icon: <Stethoscope size={48} className="text-blue-500" />,
      title: "Medicine",
      description: "Primary and preventive care for adults of all ages.",
    },
    {
      icon: <Heart size={48} className="text-blue-500" />,
      title: "Cardiology",
      description: "Heart health specialists offering advanced treatment and care.",
    },
    {
      icon: <Brain size={48} className="text-blue-500" />,
      title: "Neurology",
      description: "Expert diagnosis and management of neurological conditions.",
    },
    {
      icon: <Bone size={48} className="text-blue-500" />,
      title: "Orthopaedics",
      description: "Bone, joint, and muscle care by experienced specialists.",
    },
    {
      icon: <Users size={48} className="text-blue-500" />,
      title: "OBGY",
      description: "Women's health, pregnancy care, and reproductive services.",
    },
    {
      icon: <Activity size={48} className="text-blue-500" />,
      title: "Physiotherapy",
      description: "Rehabilitation and mobility improvement programs.",
    },
    {
      icon: <Scissors size={48} className="text-blue-500" />,
      title: "Surgery",
      description: "Surgical care for common and complex health conditions.",
    },
    {
      icon: <Laugh size={48} className="text-blue-500" />,
      title: "Dental",
      description: "Complete oral health and dental care services.",
    },
    {
      icon: <Droplet size={48} className="text-blue-500" />,
      title: "Nephrology",
      description: "Specialized care for kidney health and related disorders.",
    },
    {
      icon: <Sparkles size={48} className="text-blue-500" />,
      title: "Dermatology",
      description: "Skin, hair, and nail care by expert dermatologists.",
    },
    {
      icon: <Ear size={48} className="text-blue-500" />,
      title: "ENT",
      description: "Comprehensive care for ear, nose, and throat conditions.",
    },
    {
      icon: <Eye size={48} className="text-blue-500" />,
      title: "Ophthalmology",
      description: "Eye care services including vision correction and surgery.",
    },
    {
      icon: <Smile size={48} className="text-blue-500" />,
      title: "Psychiatry",
      description:
        "Mental health services for emotional and behavioral wellbeing.",
    },
  ];

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
