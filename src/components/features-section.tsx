"use client";

import { useEffect, useRef, useState } from "react";
import {
  IndianRupee,
  Clock,
  Video,
  FileText,
  ShieldCheck,
  Languages,
} from "lucide-react";

export const FeaturesSection = () => {
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
    {
      icon: IndianRupee,
      title: "Affordable Consultations",
      description:
        "Transparent and low-cost consultations, pay what you can with no hidden charges.",
    },
    {
      icon: Clock,
      title: "24/7 Doctor Access",
      description:
        "Get expert medical advice anytime, anywhere — no more long waiting queues.",
    },
    {
      icon: Video,
      title: "Video & Audio Calls",
      description:
        "Seamless online consultations with HD video or quick audio calls for your convenience.",
    },
    {
      icon: FileText,
      title: "Digital Prescriptions",
      description:
        "Instant, secure prescriptions you can download, store, and reuse easily.",
    },
    {
      icon: ShieldCheck,
      title: "Verified Doctors",
      description:
        "Trusted, experienced doctors with verified credentials for genuine healthcare.",
    },
    {
      icon: Languages,
      title: "Multi-Language Support",
      description:
        "Consult in your preferred regional language for comfort, clarity, and better care.",
    },
  ];

  return (
    <section
      id="features"
      ref={sectionRef}
      className={`py-16 sm:py-24 bg-gradient-to-br from-blue-50/50 to-white transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-block px-4 py-2 bg-blue-50 dark:bg-slate-800/50 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold mb-4">
            Why Choose Unity Health
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Healthcare That’s{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Affordable & Accessible
            </span>
          </h2>
          <p className="text-lg text-foreground/70">
            We focus on making healthcare convenient, affordable, and people-friendly for everyone.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group dark:bg-slate-800"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="w-14 h-14 bg-blue-100 dark:bg-slate-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors dark:group-hover:bg-blue-500">
                  <Icon
                    className="text-blue-600 group-hover:text-white transition-colors"
                    size={28}
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
