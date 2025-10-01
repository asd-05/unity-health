"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const whatsappNumber = "918433633297";
  const whatsappMessage = "Hello! I want to book a consultation";

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
      id="home"
      ref={sectionRef}
      className={`relative min-h-screen flex items-center bg-white 
        pt-8 sm:pt-12 lg:pt-20 transition-all duration-1000 overflow-hidden 
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      {/* ECG Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[0, 1, 2].map((i) => (
          <svg
            key={i}
            className="absolute w-[200%] h-[80px] text-blue-400 opacity-20"
            style={{
              top: `${30 + i * 70}px`,
              animation: `ecgMove 6s linear infinite`,
              animationDelay: `${i * 2}s`,
            }}
            viewBox="0 0 1000 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 50 H150 L200 20 L250 80 L300 50 H400 L450 20 L500 80 L550 50 H700 L750 20 L800 80 L850 50 H1000"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left lg:mt-0">
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-snug text-gray-900">
              Get Expert <br />
              <span className="text-blue-500">Medical Consultation</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
              Unity Health provides quality medical consultation with India’s best
              doctors, affordable at a cost you choose. Accessible{" "}
              <b>anytime, anywhere.</b>
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-6 sm:px-8 py-4 rounded-full hover:bg-blue-600 transition-colors font-semibold text-xl sm:text-xl shadow-lg inline-block"
            >
              Consult Today
            </a>
          </div>

          {/* Hero Image */}
          <div className="relative w-full flex justify-center lg:mb-0">
            <Image
              src="/hero-image.png"
              alt="Healthcare Illustration"
              width={700}
              height={600}
              priority
              className="rounded-3xl mx-auto lg:mx-0 w-3/4 sm:w-2/3 md:w-1/2 lg:w-full h-auto"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes ecgMove {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </section>
  );
};
