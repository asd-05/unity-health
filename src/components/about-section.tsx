"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle } from "lucide-react";

export const AboutSection = () => {
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

  const features = [
    "Affordable Consultations",
    "Timely Appointments",
    "Free Health Camps",
    "Personalized & Trusted Care",
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`py-16 sm:py-24 bg-white dark:bg-background transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image - Visible on all screens but responsive */}
          <div className="relative flex items-center justify-center">
            <img
              src="/section/about.png"
              alt="About Unity Health"
              className="w-3/4 sm:w-2/3 lg:w-full h-auto object-contain"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-blue-50 dark:bg-blue-950/30 text-blue-500 rounded-full text-sm font-semibold">
              About Unity Health India
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Bringing <span className="text-blue-500">Compassionate Healthcare</span>{" "}
              Across India
            </h2>
            {/* 💡 PARAGRAPH ONE */}
            <p className="text-lg text-foreground/70 leading-relaxed">
              At Unity Health India, we believe that quality healthcare should
              be within everyone’s reach. Guided by compassion and trust, our
              dedicated doctors and healthcare professionals provide personalized
              care, ensuring every patient feels valued and supported.
            </p>
            {/* 💡 PARAGRAPH TWO */}
            <p className="text-lg text-foreground/70 leading-relaxed">
              Our mission is to make affordable OPD consultations accessible
              across India. We empower every individual to take charge of their
              health without compromise, extending our reach through regular <b>free health camps and essential screenings.</b>
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle
                    className="text-blue-500 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span className="text-foreground/80 font-semibold">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};