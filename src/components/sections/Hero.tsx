"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2832&auto=format&fit=crop"
          alt="Garage automobile professionnel"
          fill
          priority
          className="object-cover"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
      </div>

      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-1/4 right-1/4 w-96 h-96 border border-primary/30 rounded-full"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute top-1/3 right-1/3 w-64 h-64 border border-primary/20 rounded-full"
        />
      </div>

      {/* Diagonal accent lines */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary to-transparent origin-left"
      />

      <div className="container-custom relative z-10 pt-32 pb-20 md:py-40">
        <div>
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-8"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
            </span>
            <span className="text-sm font-medium text-zinc-300 tracking-wide uppercase">
              Ouvert aujourd&apos;hui jusqu&apos;à 18h
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-6 tracking-tight"
          >
            GARAGE UM ROND POINT
            <br />
            <span className="text-gradient-copper text-4xl md:text-5xl lg:text-6xl whitespace-nowrap">ENTRETIEN · RÉPARATION · VENTE</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-zinc-400 max-w-xl mb-10 leading-relaxed font-light"
          >
            Entretien, réparation et vente automobile. Service professionnel,
            prix transparents et satisfaction garantie depuis plus de 10 ans.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Button
              size="lg"
              className="btn-glow bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 h-14 group"
            >
              Demander un Devis Gratuit
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-zinc-700 hover:border-primary hover:bg-primary/10 text-lg px-8 h-14 group"
              asChild
            >
              <a href="tel:+352XXXXXXXX">
                <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                +352 XX XX XX XX
              </a>
            </Button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-12 pt-8 border-t border-zinc-800"
          >
            {[
              { value: "10+", label: "Années d'expérience" },
              { value: "500+", label: "Clients satisfaits" },
              { value: "48h", label: "Délai rendez-vous" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              >
                <p className="stat-number">{stat.value}</p>
                <p className="text-sm text-zinc-500 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-zinc-500 uppercase tracking-widest">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </motion.div>

      {/* Side accent */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-zinc-700 to-transparent" />
        <span className="text-xs text-zinc-500 [writing-mode:vertical-lr] tracking-widest uppercase">
          Luxembourg
        </span>
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-zinc-700 to-transparent" />
      </div>
    </section>
  );
}
