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
    "24/7 Access to Doctors",
    "Seamless Digital Care",
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
          {/* Left Image - Hidden on mobile/tablet */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent rounded-3xl transform -rotate-3"></div>
            <img
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=800"
              alt="Medical Team"
              className="w-full h-full object-cover rounded-3xl shadow-2xl transform rotate-2"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-blue-50 dark:bg-blue-950/30 text-blue-600 rounded-full text-sm font-semibold">
              About Unity Health India
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Bringing <span className="text-blue-600">Compassionate Healthcare</span> Across India
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              At Unity Health India, we believe that quality healthcare should be within everyone’s reach. 
              Guided by compassion and trust, our dedicated doctors and healthcare professionals 
              provide personalized care, ensuring every patient feels valued and supported.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Our mission is to make affordable OPD consultations accessible across India, empowering every individual to take 
              charge of their health without compromise.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-foreground/80">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};