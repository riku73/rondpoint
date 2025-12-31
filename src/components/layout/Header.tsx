"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Phone, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navigation = [
  { name: "Accueil", href: "#accueil" },
  { name: "Services", href: "#services" },
  { name: "Pourquoi Nous", href: "#pourquoi-nous" },
  { name: "Galerie", href: "#galerie" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-zinc-800/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Car className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="absolute -inset-1 bg-primary/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg tracking-wide">
                GARAGE UM ROND POINT
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative group tracking-wide uppercase"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="tel:+352810541"
              className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors group"
            >
              <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span className="hidden lg:inline">+352 81 05 41</span>
            </a>
            <Button className="btn-glow bg-primary hover:bg-primary/90 text-primary-foreground px-6">
              Prendre Rendez-vous
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[320px] bg-zinc-950 border-zinc-800"
            >
              <div className="flex flex-col gap-8 mt-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                    <Car className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="font-bold text-lg">GARAGE UM ROND POINT</span>
                </div>

                <nav className="flex flex-col gap-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors py-3 px-4 rounded-lg"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <div className="flex flex-col gap-4 mt-4 pt-4 border-t border-zinc-800">
                  <a
                    href="tel:+352810541"
                    className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors py-2"
                  >
                    <Phone className="w-5 h-5 text-primary" />
                    <span>+352 81 05 41</span>
                  </a>
                  <Button className="w-full btn-glow bg-primary hover:bg-primary/90 text-primary-foreground h-12">
                    Prendre Rendez-vous
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}
