"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const contactInfo = [
  {
    icon: Phone,
    title: "Téléphone",
    value: "+352 81 05 41",
    href: "tel:+352810541",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@rondpoint.lu",
    href: "mailto:info@rondpoint.lu",
  },
  {
    icon: MapPin,
    title: "Adresse",
    value: "1 Rue du Viaduc, L-9147 Erpeldange-sur-Sûre",
    href: "https://maps.google.com/?q=1+Rue+du+Viaduc,+L-9147+Erpeldange-sur-Sûre,+Luxembourg",
  },
];

const hours = [
  { day: "Lundi - Vendredi", time: "07:30 - 12:00, 13:00 - 18:00" },
  { day: "Samedi", time: "08:00 - 12:00" },
  { day: "Dimanche", time: "Fermé" },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
        <Image
          src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0a0a0a]/80 to-[#0a0a0a]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              Contact
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Contactez-nous
          </h2>
          <p className="text-lg text-zinc-400 max-w-xl">
            Une question ? Besoin d&apos;un devis ? Notre équipe est à votre
            disposition pour vous accompagner.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="card-industrial rounded-2xl p-8 md:p-10">
              <h3 className="text-2xl font-bold mb-8">Envoyez-nous un message</h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30">
                    <svg
                      className="w-10 h-10 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold mb-3">Message envoyé !</h4>
                  <p className="text-zinc-400">
                    Nous vous répondrons dans les plus brefs délais.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-zinc-300">
                        Nom complet *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Votre nom"
                        required
                        className="bg-zinc-900/50 border-zinc-800 focus:border-primary h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-zinc-300">
                        Téléphone *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+352 ..."
                        required
                        className="bg-zinc-900/50 border-zinc-800 focus:border-primary h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-zinc-300">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="votre@email.com"
                      required
                      className="bg-zinc-900/50 border-zinc-800 focus:border-primary h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-zinc-300">
                      Type de service
                    </Label>
                    <select
                      id="service"
                      name="service"
                      className="flex h-12 w-full rounded-md border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="">Sélectionnez un service</option>
                      <option value="repair">Réparation / Entretien</option>
                      <option value="purchase">Achat de véhicule</option>
                      <option value="quote">Demande de devis</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-zinc-300">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Décrivez votre demande..."
                      rows={5}
                      className="bg-zinc-900/50 border-zinc-800 focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full btn-glow bg-primary hover:bg-primary/90 text-primary-foreground h-14 text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-3">
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Envoi en cours...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Envoyer ma demande
                        <ArrowRight className="w-5 h-5" />
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-5 p-5 card-industrial rounded-xl group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:border-primary/40 group-hover:bg-primary/20 transition-all flex-shrink-0">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 uppercase tracking-wider mb-1">
                    {info.title}
                  </p>
                  <p className="font-medium text-zinc-200 group-hover:text-primary transition-colors">
                    {info.value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Opening Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="card-industrial rounded-xl p-6"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold">Horaires d&apos;ouverture</h3>
              </div>
              <ul className="space-y-4">
                {hours.map((item) => (
                  <li
                    key={item.day}
                    className="flex justify-between items-center text-sm pb-3 border-b border-zinc-800 last:border-0 last:pb-0"
                  >
                    <span className="text-zinc-400">{item.day}</span>
                    <span
                      className={`font-medium ${
                        item.time === "Fermé"
                          ? "text-red-400"
                          : "text-zinc-200"
                      }`}
                    >
                      {item.time}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Google Maps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="card-industrial rounded-xl overflow-hidden h-52"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20581.2539096179!2d6.0872303!3d49.848907000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479555e754dc4e15%3A0x997b09ee0b37c665!2sGarage%20um%20Rond%20Point%20S%C3%A0rl!5e0!3m2!1sen!2slu!4v1767198209172!5m2!1sen!2slu"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
