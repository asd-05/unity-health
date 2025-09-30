"use client";

import { useEffect, useRef, useState } from "react";

export const HeroSection = () => {
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

  const handleBookNow = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className={`relative min-h-screen flex items-center bg-gradient-to-br from-blue-50/50 to-white dark:from-blue-950/20 dark:to-background pt-20 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Get Expert{" "}
              <span className="text-blue-600">Medical Consultation!</span>
            </h1>
            <p className="text-lg sm:text-xl text-foreground/70 max-w-xl">
              Our doctors provide expert medical advice and consultation.   At a price you want!
            </p>

            {/* Book Now Button */}
            <button 
              onClick={handleBookNow}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors font-semibold text-lg inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              Book Now
            </button>
          </div>

          {/* Right Image - Hidden on mobile/tablet */}
          <div className="relative lg:h-[600px] h-[400px] hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-transparent rounded-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800"
              alt="Professional Doctor"
              className="w-full h-full object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};