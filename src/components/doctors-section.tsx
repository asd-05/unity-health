"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Linkedin, Twitter, Mail } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { doctors } from "../app/data/doctorsData";

export const DoctorsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [flipped, setFlipped] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Embla carousel setup
  const autoplay = Autoplay({ delay: 5000, stopOnInteraction: false });
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [autoplay]
  );

  // Nav Buttons
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="doctors"
      ref={sectionRef}
      className={`py-16 sm:py-24 bg-white transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-block px-4 py-2 bg-blue-50 text-blue-500 rounded-full text-sm font-semibold mb-4">
            Our Expert Team
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Meet Our <span className="text-blue-500">Experienced Doctors</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Committed to excellence in healthcare with compassion and expertise
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">

          {/* Embla Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">

              {doctors.map((doc, index) => (
                <div
                  key={index}
                  className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0"
                >
                  {/* Card */}
                  <div
                    className={`relative w-full h-[330px] sm:h-[380px] cursor-pointer 
                      [perspective:1000px] group transform transition-all duration-700 ease-out 
                      hover:shadow-2xl hover:shadow-blue-300/50 rounded-2xl
                      ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                      }`}
                    onClick={() =>
                      setFlipped((prev) => (prev === index ? null : index))
                    }
                  >

                    <div
                      className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d]
                      ${flipped === index
                          ? "[transform:rotateY(180deg)]"
                          : "group-hover:[transform:rotateY(180deg)]"
                        }`}
                    >

                      {/* Front Side */}
<div className="absolute w-full h-full rounded-2xl overflow-hidden shadow-lg [backface-visibility:hidden]">
  <img
    src={doc.image}
    alt={doc.name}
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

  {/* Centered Name */}
  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center w-full px-4">
    <h3 className="font-bold text-lg">{doc.name}</h3>
    {/* <p className="text-sm text-white/80">{doc.specialty}</p> */}
  </div>
</div>


                      {/* Back Side */}
                      <div className="absolute w-full h-full rounded-2xl bg-gradient-to-b from-violet-500 to-blue-700 
                        text-white p-6 flex flex-col justify-between text-center shadow-lg 
                        [transform:rotateY(180deg)] [backface-visibility:hidden]"
                      >

                        <div className="flex flex-col items-center justify-center flex-1">
                          <span className="relative w-40 h-40 rounded-full border-4 border-white shadow-lg mb-4 overflow-hidden flex items-center justify-center">
                            <img
                              src={doc.image}
                              alt={doc.name}
                              className="w-full h-full object-cover scale-125 object-top"
                            />
                          </span>

                          <h3 className="font-bold text-xl">{doc.name}</h3>
                          <p className="text-sm text-blue-100 mt-1">{doc.specialty}</p>
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center space-x-4 mt-6">
                          <a className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
                            <Linkedin size={20} />
                          </a>
                          <a className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
                            <Twitter size={20} />
                          </a>
                          <a className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
                            <Mail size={20} />
                          </a>
                        </div>

                      </div>

                    </div>

                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* Navigation Arrows (desktop only) */}
          <button
            onClick={scrollPrev}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 
              rounded-full bg-white shadow-lg hover:shadow-xl items-center justify-center 
              text-gray-700 hover:bg-blue-50 transition-all -translate-x-6 z-10"
          >
            ‹
          </button>

          <button
            onClick={scrollNext}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 
              rounded-full bg-white shadow-lg hover:shadow-xl items-center justify-center 
              text-gray-700 hover:bg-blue-50 transition-all translate-x-6 z-10"
          >
            ›
          </button>

        </div>
      </div>
    </section>
  );
};
