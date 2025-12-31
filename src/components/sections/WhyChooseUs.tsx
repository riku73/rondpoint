"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Award, BadgeCheck, Clock, Sparkles, Shield, Users } from "lucide-react";

const stats = [
  { value: 10, suffix: "+", label: "Années d'expérience" },
  { value: 500, suffix: "+", label: "Clients satisfaits" },
  { value: 2000, suffix: "+", label: "Véhicules réparés" },
  { value: 100, suffix: "%", label: "Garantie satisfaction" },
];

const features = [
  {
    icon: Award,
    title: "Expertise certifiée",
    description:
      "Nos techniciens sont formés et certifiés pour toutes marques de véhicules.",
  },
  {
    icon: BadgeCheck,
    title: "Prix transparents",
    description:
      "Devis gratuit et détaillé avant chaque intervention. Pas de surprises.",
  },
  {
    icon: Clock,
    title: "Service rapide",
    description:
      "Rendez-vous disponibles sous 48h. Nous respectons vos délais.",
  },
  {
    icon: Sparkles,
    title: "Pièces de qualité",
    description:
      "Nous utilisons uniquement des pièces d'origine ou de qualité équivalente.",
  },
];

function AnimatedCounter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function WhyChooseUs() {
  return (
    <section
      id="pourquoi-nous"
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />

      {/* Background Image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2083&auto=format&fit=crop"
          alt="Background"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
      </div>

      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              Pourquoi Nous
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Pourquoi nous
            <br />
            <span className="text-gradient-copper">choisir ?</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Plus de 10 ans d&apos;expérience au service de votre satisfaction.
            Découvrez ce qui fait notre différence.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="relative group"
            >
              <div className="card-industrial rounded-xl p-6 md:p-8 text-center transition-all duration-300">
                {/* Accent line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <p className="stat-number mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-zinc-500 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group"
            >
              <div className="card-industrial rounded-xl p-6 h-full transition-all duration-300 relative overflow-hidden">
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 group-hover:border-primary/40 group-hover:bg-primary/20 transition-all">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold mb-3 tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-3 right-3 w-full h-full border-b border-r border-primary/30" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-12 py-8 border-t border-b border-zinc-800"
        >
          {[
            { icon: Shield, text: "Garantie 2 ans" },
            { icon: Users, text: "Équipe certifiée" },
            { icon: Clock, text: "Service express" },
          ].map((badge, index) => (
            <div
              key={badge.text}
              className="flex items-center gap-3 text-zinc-400"
            >
              <badge.icon className="w-5 h-5 text-primary" />
              <span className="text-sm uppercase tracking-wider">
                {badge.text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
