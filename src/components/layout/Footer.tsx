"use client";

import Link from "next/link";
import { Car, Phone, Mail, MapPin, Clock, Instagram, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Accueil", href: "#accueil" },
  { name: "Services", href: "#services" },
  { name: "Galerie", href: "#galerie" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Réparation automobile",
  "Entretien régulier",
  "Vente de véhicules",
  "Diagnostic électronique",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Accent line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      {/* Main footer */}
      <div className="bg-[#0a0a0a] relative">
        <div className="absolute inset-0 noise-overlay pointer-events-none" />

        <div className="container-custom py-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-1 space-y-6">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                  <Car className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <span className="font-bold text-xl block">GARAGE</span>
                  <span className="text-zinc-500 text-sm">UM ROND POINT</span>
                </div>
              </Link>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                Votre partenaire automobile de confiance au Luxembourg. Entretien,
                réparation et vente de véhicules depuis plus de 10 ans.
              </p>
              <a
                href="https://www.instagram.com/garage_um_rond_point/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-zinc-400 hover:text-primary transition-colors group"
              >
                <Instagram className="w-5 h-5" />
                <span className="text-sm">@garage_um_rond_point</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
              </a>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-6">
                Navigation
              </h3>
              <ul className="space-y-4">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-zinc-500 hover:text-white transition-colors hover-underline inline-block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-6">
                Nos Services
              </h3>
              <ul className="space-y-4">
                {services.map((service) => (
                  <li key={service} className="text-zinc-500">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-6">
                Contact
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:+352810541"
                    className="flex items-center gap-3 text-zinc-500 hover:text-white transition-colors group"
                  >
                    <Phone className="w-4 h-4 text-primary group-hover:rotate-12 transition-transform" />
                    <span>+352 81 05 41</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@rondpoint.lu"
                    className="flex items-center gap-3 text-zinc-500 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4 text-primary" />
                    <span>info@rondpoint.lu</span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-zinc-500">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                  <span>1 Rue du Viaduc, L-9147 Erpeldange-sur-Sûre</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-500">
                  <Clock className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                  <div className="text-sm">
                    <p>Lun - Ven: 07:30 - 12:00, 13:00 - 18:00</p>
                    <p>Sam: 08:00 - 12:00</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 pt-12 border-t border-zinc-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  PRÊT À PRENDRE RENDEZ-VOUS ?
                </h3>
                <p className="text-zinc-500">
                  Contactez-nous pour un devis gratuit
                </p>
              </div>
              <Button
                size="lg"
                className="btn-glow bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14"
              >
                Demander un Devis
                <ArrowUpRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black border-t border-zinc-900">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-600 text-sm">
              © {new Date().getFullYear()} Garage um Rond Point Sàrl. Tous droits
              réservés.
            </p>
            <div className="flex gap-8 text-sm">
              <Link
                href="#"
                className="text-zinc-600 hover:text-zinc-400 transition-colors"
              >
                Mentions légales
              </Link>
              <Link
                href="#"
                className="text-zinc-600 hover:text-zinc-400 transition-colors"
              >
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
