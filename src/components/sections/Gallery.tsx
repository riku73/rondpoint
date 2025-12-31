"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    category: "Réparations",
    title: "Diagnostic moteur",
    image:
      "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "Véhicules",
    title: "BMW Série 3",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "Notre Garage",
    title: "Notre atelier",
    image:
      "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    category: "Réparations",
    title: "Changement de freins",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2832&auto=format&fit=crop",
  },
  {
    id: 5,
    category: "Véhicules",
    title: "Mercedes-AMG",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 6,
    category: "Notre Garage",
    title: "Équipement moderne",
    image:
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2128&auto=format&fit=crop",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const selectedItem = galleryItems.find((item) => item.id === selectedImage);

  const handlePrevious = () => {
    if (selectedImage !== null) {
      const currentIndex = galleryItems.findIndex(
        (item) => item.id === selectedImage
      );
      const prevIndex =
        currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1;
      setSelectedImage(galleryItems[prevIndex].id);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      const currentIndex = galleryItems.findIndex(
        (item) => item.id === selectedImage
      );
      const nextIndex =
        currentIndex === galleryItems.length - 1 ? 0 : currentIndex + 1;
      setSelectedImage(galleryItems[nextIndex].id);
    }
  };

  return (
    <section id="galerie" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
      <div className="grid-pattern" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="section-label mb-6">Galerie</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
            Notre travail
            <br />
            <span className="text-gradient-chrome">en images</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-xl font-light leading-relaxed">
            Découvrez notre savoir-faire à travers nos réalisations et notre équipement professionnel.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[240px]">
          {/* Large item - spans 2 cols and 2 rows */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onClick={() => setSelectedImage(galleryItems[0].id)}
            className="col-span-2 row-span-2 group cursor-pointer relative overflow-hidden rounded-2xl"
          >
            <Image
              src={galleryItems[0].image}
              alt={galleryItems[0].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <span className="text-xs text-primary uppercase tracking-widest mb-2">{galleryItems[0].category}</span>
              <h3 className="text-xl md:text-2xl font-semibold text-white">{galleryItems[0].title}</h3>
            </div>
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-white/20">
              <ZoomIn className="w-5 h-5 text-white" />
            </div>
          </motion.div>

          {/* Regular items */}
          {galleryItems.slice(1, 3).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              onClick={() => setSelectedImage(item.id)}
              className="col-span-1 row-span-1 group cursor-pointer relative overflow-hidden rounded-2xl"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute inset-0 p-4 flex flex-col justify-end">
                <span className="text-[10px] text-primary uppercase tracking-widest mb-1">{item.category}</span>
                <h3 className="text-sm md:text-base font-semibold text-white">{item.title}</h3>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-white/20">
                <ZoomIn className="w-4 h-4 text-white" />
              </div>
            </motion.div>
          ))}

          {/* Wide item - spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={() => setSelectedImage(galleryItems[3].id)}
            className="col-span-2 row-span-1 group cursor-pointer relative overflow-hidden rounded-2xl"
          >
            <Image
              src={galleryItems[3].image}
              alt={galleryItems[3].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
            <div className="absolute inset-0 p-5 flex flex-col justify-end">
              <span className="text-xs text-primary uppercase tracking-widest mb-1">{galleryItems[3].category}</span>
              <h3 className="text-lg md:text-xl font-semibold text-white">{galleryItems[3].title}</h3>
            </div>
            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-white/20">
              <ZoomIn className="w-4 h-4 text-white" />
            </div>
          </motion.div>

          {/* Last two items */}
          {galleryItems.slice(4, 6).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + 0.1 * index }}
              onClick={() => setSelectedImage(item.id)}
              className="col-span-1 row-span-1 group cursor-pointer relative overflow-hidden rounded-2xl"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute inset-0 p-4 flex flex-col justify-end">
                <span className="text-[10px] text-primary uppercase tracking-widest mb-1">{item.category}</span>
                <h3 className="text-sm md:text-base font-semibold text-white">{item.title}</h3>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-white/20">
                <ZoomIn className="w-4 h-4 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-zinc-900 hover:bg-zinc-800 flex items-center justify-center transition-colors z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-zinc-900 hover:bg-zinc-800 flex items-center justify-center transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-zinc-900 hover:bg-zinc-800 flex items-center justify-center transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Caption */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
            >
              <p className="text-white text-xl font-bold">{selectedItem.title}</p>
              <p className="text-zinc-500">{selectedItem.category}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
