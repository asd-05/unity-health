"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { features } from "../app/data/features";

export const FeaturesSection = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay },
    }),
  };

  return (
    <section
      id="features"
      className="py-12 sm:py-20 bg-gradient-to-br from-blue-50/50 to-white dark:from-slate-900 dark:to-slate-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-block px-4 py-2 bg-blue-50 dark:bg-slate-800/50 text-blue-500 dark:text-blue-400 rounded-full text-sm font-semibold mb-4">
            Why Choose Unity Health
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Healthcare That’s{" "}
            <span className="text-blue-500 dark:text-blue-400">
              Affordable & Accessible
            </span>
          </h2>
          <p className="text-base sm:text-lg text-foreground/70">
            We focus on making healthcare convenient, affordable, and
            people-friendly for everyone.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <InViewCard
                key={index}
                variants={cardVariants}
                index={index}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 dark:bg-slate-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors dark:group-hover:bg-blue-500">
                  <Icon
                    className="text-blue-500 group-hover:text-white transition-colors"
                    size={24}
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </InViewCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const InViewCard = ({
  children,
  variants,
  index,
}: {
  children: React.ReactNode;
  variants: any;
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const delay = index * 0.2;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      custom={delay}
      variants={variants}
      className="bg-card p-4 sm:p-6 lg:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group dark:bg-slate-800 flex flex-col items-center text-center border border-transparent hover:border-blue-600"
    >
      {children}
    </motion.div>
  );
};
