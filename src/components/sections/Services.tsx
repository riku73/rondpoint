"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Wrench,
  Car,
  Gauge,
  Thermometer,
  CircleDot,
  Cpu,
  CheckCircle,
  ArrowRight,
  ShoppingCart,
  CreditCard,
  RefreshCw,
  FileCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const repairServices = [
  { icon: Gauge, name: "Vidange huile et filtres" },
  { icon: CircleDot, name: "Freins et plaquettes" },
  { icon: Thermometer, name: "Climatisation" },
  { icon: CircleDot, name: "Pneus et équilibrage" },
  { icon: Cpu, name: "Diagnostic électronique" },
  { icon: CheckCircle, name: "Révision complète" },
];

const salesServices = [
  { icon: Car, name: "Véhicules neufs toutes marques" },
  { icon: FileCheck, name: "Véhicules d'occasion certifiés" },
  { icon: CreditCard, name: "Financement sur mesure" },
  { icon: RefreshCw, name: "Reprise de votre ancien véhicule" },
];

export default function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              Nos Services
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            UN SERVICE COMPLET
            <br />
            <span className="text-zinc-500">POUR VOTRE VÉHICULE</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl">
            De l&apos;entretien régulier à la vente, nous sommes là pour vous
            accompagner avec expertise et transparence.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Repair & Maintenance Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-2xl"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1974&auto=format&fit=crop"
                alt="Réparation automobile"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 md:p-10 min-h-[500px] flex flex-col justify-end">
              <div className="w-16 h-16 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center mb-6 border border-primary/30">
                <Wrench className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                RÉPARATION & ENTRETIEN
              </h3>
              <p className="text-zinc-300 mb-8 max-w-md">
                Entretien régulier, réparations mécaniques, diagnostics
                électroniques. Nos techniciens qualifiés prennent soin de votre
                véhicule.
              </p>

              <ul className="grid grid-cols-2 gap-3 mb-8">
                {repairServices.map((service, index) => (
                  <motion.li
                    key={service.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center gap-2 text-sm text-zinc-300"
                  >
                    <service.icon className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{service.name}</span>
                  </motion.li>
                ))}
              </ul>

              <Button
                variant="outline"
                className="w-fit border-zinc-600 hover:border-primary hover:bg-primary/10 group/btn"
              >
                En savoir plus
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Accent corner */}
            <div className="absolute top-0 right-0 w-20 h-20">
              <div className="absolute top-4 right-4 w-full h-full border-t-2 border-r-2 border-primary/50" />
            </div>
          </motion.div>

          {/* Car Sales Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative overflow-hidden rounded-2xl"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop"
                alt="Vente de véhicules"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 md:p-10 min-h-[500px] flex flex-col justify-end">
              <div className="w-16 h-16 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center mb-6 border border-primary/30">
                <ShoppingCart className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                VENTE DE VÉHICULES
              </h3>
              <p className="text-zinc-300 mb-8 max-w-md">
                Découvrez notre sélection de véhicules neufs et d&apos;occasion,
                garantis et contrôlés. Nous vous accompagnons dans votre choix.
              </p>

              <ul className="space-y-3 mb-8">
                {salesServices.map((service, index) => (
                  <motion.li
                    key={service.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                    className="flex items-center gap-3 text-zinc-300"
                  >
                    <service.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{service.name}</span>
                  </motion.li>
                ))}
              </ul>

              <Button className="w-fit btn-glow bg-primary hover:bg-primary/90 text-primary-foreground group/btn">
                Voir nos véhicules
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Accent corner */}
            <div className="absolute top-0 right-0 w-20 h-20">
              <div className="absolute top-4 right-4 w-full h-full border-t-2 border-r-2 border-primary/50" />
            </div>
          </motion.div>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 relative overflow-hidden rounded-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent" />
          <div className="absolute inset-0 card-industrial" />

          <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                BESOIN D&apos;UN DEVIS ?
              </h3>
              <p className="text-zinc-400 max-w-md">
                Obtenez un devis gratuit et sans engagement en quelques minutes.
                Notre équipe vous répond sous 24h.
              </p>
            </div>
            <Button
              size="lg"
              className="btn-glow bg-primary hover:bg-primary/90 text-primary-foreground whitespace-nowrap"
            >
              Demander un Devis Gratuit
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
