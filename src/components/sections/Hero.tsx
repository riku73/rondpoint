"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      id="accueil"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <Image
          src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2832&auto=format&fit=crop"
          alt="Garage automobile professionnel"
          fill
          priority
          className="object-cover"
        />
        {/* Layered Gradients for Depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08080A] via-[#08080A]/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-transparent to-[#08080A]/40" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
      </motion.div>

      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      {/* Grid Pattern */}
      <div className="grid-pattern" />

      {/* Ambient Orbs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="gradient-orb gradient-orb-primary w-[600px] h-[600px] -top-40 -right-40"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
        className="gradient-orb gradient-orb-secondary w-[400px] h-[400px] bottom-20 left-20"
      />

      {/* Decorative Lines */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary via-primary/50 to-transparent origin-left"
      />

      {/* Vertical Line Accent */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute left-8 md:left-12 top-1/4 w-[1px] h-32 bg-gradient-to-b from-primary/50 to-transparent origin-top hidden lg:block"
      />

      <motion.div style={{ opacity }} className="container-custom relative z-10 pt-32 pb-24 md:py-40">
        <div>
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-4 mb-10"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-sm font-medium text-zinc-400 tracking-widest uppercase">
              Ouvert aujourd&apos;hui jusqu&apos;à 18h
            </span>
            <div className="hidden sm:flex items-center gap-2 text-sm text-zinc-500 border-l border-zinc-700 pl-4">
              <MapPin className="w-3.5 h-3.5" />
              <span>Erpeldange-sur-Sûre</span>
            </div>
          </motion.div>

          {/* Main Heading - Dramatic Typography */}
          <div className="mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-semibold leading-[0.95] tracking-tight mb-4"
            >
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  Garage
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  um Rond Point
                </motion.span>
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center gap-3 whitespace-nowrap"
            >
              <span className="text-gradient-copper text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-wide">
                Entretien
              </span>
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary/60 flex-shrink-0" />
              <span className="text-gradient-copper text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-wide">
                Réparation
              </span>
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary/60 flex-shrink-0" />
              <span className="text-gradient-copper text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-wide">
                Vente
              </span>
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-12 leading-relaxed font-light"
          >
            Service professionnel, prix transparents et satisfaction garantie.
            Votre partenaire automobile de confiance depuis plus de 10 ans au Luxembourg.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 mb-20"
          >
            <Button
              size="lg"
              className="btn-magnetic bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 h-14 rounded-xl font-medium group"
            >
              Demander un Devis Gratuit
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="btn-outline-glow border-zinc-700/50 hover:border-primary/50 hover:bg-primary/5 text-base px-8 h-14 rounded-xl font-medium group"
              asChild
            >
              <a href="tel:+352810541">
                <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                +352 81 05 41
              </a>
            </Button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex flex-wrap gap-x-16 gap-y-8 pt-10 border-t border-zinc-800/50"
          >
            {[
              { value: "10+", label: "Années d'expérience" },
              { value: "500+", label: "Clients satisfaits" },
              { value: "48h", label: "Délai rendez-vous" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 1.2 + index * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group"
              >
                <p className="stat-number group-hover:text-gradient-copper transition-all duration-500">
                  {stat.value}
                </p>
                <p className="text-sm text-zinc-500 mt-2 tracking-wide uppercase">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-[10px] text-zinc-600 uppercase tracking-[0.3em]">
            Scroll
          </span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-primary/60 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Side Accent - Refined */}
      <div className="absolute right-8 lg:right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6">
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="w-[1px] h-20 bg-gradient-to-b from-transparent via-zinc-700/50 to-transparent origin-top"
        />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="text-[10px] text-zinc-600 [writing-mode:vertical-lr] tracking-[0.4em] uppercase"
        >
          Luxembourg
        </motion.span>
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="w-[1px] h-20 bg-gradient-to-b from-transparent via-zinc-700/50 to-transparent origin-bottom"
        />
      </div>
    </section>
  );
}
