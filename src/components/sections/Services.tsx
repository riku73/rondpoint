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
      <div className="absolute inset-0 bg-[#08080A]" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
      <div className="grid-pattern" />

      {/* Ambient light */}
      <div className="gradient-orb gradient-orb-secondary w-[500px] h-[500px] -bottom-40 -left-40 opacity-50" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <span className="section-label mb-6">Nos Services</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
            UN SERVICE COMPLET
            <br />
            <span className="text-gradient-chrome">POUR VOTRE VÉHICULE</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl font-light leading-relaxed">
            De l&apos;entretien régulier à la vente, nous sommes là pour vous
            accompagner avec expertise et transparence.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Repair & Maintenance Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden rounded-2xl h-full"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1974&auto=format&fit=crop"
                alt="Réparation automobile"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-[#08080A]/90 to-[#08080A]/60" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 md:p-10 min-h-[560px] flex flex-col justify-end h-full">
              {/* Icon Badge */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 backdrop-blur-sm flex items-center justify-center mb-8 border border-primary/20 group-hover:border-primary/40 transition-colors"
              >
                <Wrench className="w-8 h-8 text-primary" />
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
                RÉPARATION & ENTRETIEN
              </h3>
              <p className="text-zinc-400 mb-8 max-w-md font-light leading-relaxed">
                Entretien régulier, réparations mécaniques, diagnostics
                électroniques. Nos techniciens qualifiés prennent soin de votre
                véhicule.
              </p>

              {/* Services Grid */}
              <ul className="grid grid-cols-2 gap-x-4 gap-y-3 mb-10">
                {repairServices.map((service, index) => (
                  <motion.li
                    key={service.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                    className="flex items-center gap-3 text-sm text-zinc-300 group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-zinc-800/50 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary/20 transition-colors">
                      <service.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-light">{service.name}</span>
                  </motion.li>
                ))}
              </ul>

              <Button
                variant="outline"
                className="w-fit btn-outline-glow border-zinc-700/50 hover:border-primary/50 hover:bg-primary/5 rounded-xl h-12 px-6 font-medium group/btn"
              >
                En savoir plus
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Corner Accent */}
            <div className="corner-accent top-right top-6 right-6" />
          </motion.div>

          {/* Car Sales Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden rounded-2xl h-full"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop"
                alt="Vente de véhicules"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-[#08080A]/90 to-[#08080A]/60" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 md:p-10 min-h-[560px] flex flex-col justify-end h-full">
              {/* Icon Badge */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 backdrop-blur-sm flex items-center justify-center mb-8 border border-primary/20 group-hover:border-primary/40 transition-colors"
              >
                <ShoppingCart className="w-8 h-8 text-primary" />
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
                VENTE DE VÉHICULES
              </h3>
              <p className="text-zinc-400 mb-8 max-w-md font-light leading-relaxed">
                Découvrez notre sélection de véhicules neufs et d&apos;occasion,
                garantis et contrôlés. Nous vous accompagnons dans votre choix.
              </p>

              {/* Services List */}
              <ul className="space-y-3 mb-10">
                {salesServices.map((service, index) => (
                  <motion.li
                    key={service.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                    className="flex items-center gap-4 text-zinc-300 group/item"
                  >
                    <div className="w-10 h-10 rounded-xl bg-zinc-800/50 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary/20 transition-colors">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-light">{service.name}</span>
                  </motion.li>
                ))}
              </ul>

              <Button className="w-fit btn-magnetic bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl h-12 px-6 font-medium group/btn">
                Voir nos véhicules
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Corner Accent */}
            <div className="corner-accent top-right top-6 right-6" />
          </motion.div>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 relative overflow-hidden rounded-2xl card-precision"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent" />

          <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-3 tracking-tight">
                BESOIN D&apos;UN DEVIS ?
              </h3>
              <p className="text-zinc-400 max-w-md font-light">
                Obtenez un devis gratuit et sans engagement en quelques minutes.
                Notre équipe vous répond sous 24h.
              </p>
            </div>
            <Button
              size="lg"
              className="btn-magnetic bg-primary hover:bg-primary/90 text-primary-foreground whitespace-nowrap rounded-xl h-14 px-8 font-medium"
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
