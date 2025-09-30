"use client";

import { useEffect, useRef, useState } from "react";

export const DoctorsSection = () => {
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

  return (
    <section
      id="doctors"
      ref={sectionRef}
      className={`py-16 sm:py-24 bg-white transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4">
            Our Expert Team
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Meet Our{" "}
            <span className="text-blue-600">Experienced Doctors</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Committed to excellence in healthcare with compassion and expertise
          </p>
        </div>

        {/* Doctor Images Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="relative h-[300px] sm:h-[350px] rounded-2xl overflow-hidden shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400"
              alt="Doctor 1"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-bold text-lg">Dr. Rajesh Kumar</h3>
              <p className="text-sm text-white/80">Cardiologist</p>
            </div>
          </div>

          <div className="relative h-[300px] sm:h-[350px] rounded-2xl overflow-hidden shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=400"
              alt="Doctor 2"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-bold text-lg">Dr. Priya Sharma</h3>
              <p className="text-sm text-white/80">Neurologist</p>
            </div>
          </div>

          <div className="relative h-[300px] sm:h-[350px] rounded-2xl overflow-hidden shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400"
              alt="Doctor 3"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-bold text-lg">Dr. Amit Patel</h3>
              <p className="text-sm text-white/80">General Physician</p>
            </div>
          </div>

          <div className="relative h-[300px] sm:h-[350px] rounded-2xl overflow-hidden shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400"
              alt="Doctor 4"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-bold text-lg">Dr. Sneha Reddy</h3>
              <p className="text-sm text-white/80">Dentist</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};