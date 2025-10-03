"use client";

import { useEffect, useRef, useState } from "react";
import { Linkedin, Twitter, Mail } from "lucide-react"; // social icons

const doctors = [
  {
    name: "Dr. Abhishek Chabukswar",
    specialty: "Orthopedic Surgeon",
    image:"/doctors/bhau-doc.png",
    info: "20+ years of experience, specialized in heart surgeries and treatments.",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:rajesh@example.com",
    },
  },
  {
    name: "Dr. Akshata Chabukswar",
    specialty: "Dentist",
    image:"/doctors/akshu-doc.png",
    info: "Expert in brain and spine disorders, practicing at Apollo Hospital.",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:priya@example.com",
    },
  },
  {
     name: "Dr. Abhishek Chabukswar",
    specialty: "Orthopedic Surgeon",
    image:"/doctors/bhau-doc.png",
    info: "Trusted family doctor, known for holistic treatments.",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:amit@example.com",
    },
  },
  {
    name: "Dr. Akshata Chabukswar",
    specialty: "Dentist",
    image:"/doctors/akshu-doc.png",
    info: "Cosmetic and pediatric dentistry expert with 10+ years of experience.",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:sneha@example.com",
    },
  },
];

export const DoctorsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [flipped, setFlipped] = useState<number | null>(null);
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
      id="doctors"
      ref={sectionRef}
      className={`py-16 sm:py-24 bg-white transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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

        {/* Doctor Flip Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doc, index) => (
            <div
              key={index}
              className={`relative w-full h-[320px] sm:h-[370px] cursor-pointer [perspective:1000px] group 
                transform transition-all duration-700 ease-out hover:shadow-2xl hover:shadow-blue-300/50
                ${
                  isVisible
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
              style={{ transitionDelay: `${index * 150}ms` }} // stagger effect
              onClick={() =>
                setFlipped((prev) => (prev === index ? null : index))
              }
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] 
                ${
                  flipped === index
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
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">{doc.name}</h3>
                    <p className="text-sm text-white/80">{doc.specialty}</p>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute w-full h-full rounded-2xl bg-gradient-to-b from-violet-500 to-blue-700 text-white p-6 flex flex-col justify-between text-center shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  {/* Doctor Image */}
                  <div className="flex flex-col items-center">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-20 h-20 rounded-full border-4 border-white shadow-md mb-3"
                    />
                    <h3 className="font-bold text-lg">{doc.name}</h3>
                    <p className="text-sm text-blue-100">{doc.specialty}</p>
                  </div>

                  {/* Info */}
                  <p className="text-sm opacity-90">{doc.info}</p>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4 mt-4">
                    <a
                      href={doc.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href={doc.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
                    >
                      <Twitter size={18} />
                    </a>
                    <a
                      href={doc.socials.email}
                      className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
                    >
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
