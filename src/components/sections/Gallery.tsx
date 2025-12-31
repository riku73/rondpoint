"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["Tous", "Réparations", "Véhicules", "Notre Garage"];

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
  {
    id: 7,
    category: "Réparations",
    title: "Entretien complet",
    image:
      "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 8,
    category: "Véhicules",
    title: "Porsche 911",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "Tous"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const selectedItem = galleryItems.find((item) => item.id === selectedImage);

  const handlePrevious = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredItems.findIndex(
        (item) => item.id === selectedImage
      );
      const prevIndex =
        currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
      setSelectedImage(filteredItems[prevIndex].id);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredItems.findIndex(
        (item) => item.id === selectedImage
      );
      const nextIndex =
        currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1;
      setSelectedImage(filteredItems[nextIndex].id);
    }
  };

  return (
    <section id="galerie" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0f0f0f]" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm font-medium tracking-widest uppercase">
                Galerie
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold">
              NOTRE TRAVAIL
              <br />
              <span className="text-zinc-500">EN IMAGES</span>
            </h2>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={
                  activeCategory === category
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : "border-zinc-700 hover:border-primary hover:bg-primary/10 text-zinc-300"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedImage(item.id)}
                className={`group cursor-pointer relative overflow-hidden rounded-xl ${
                  index === 0 || index === 5
                    ? "md:col-span-2 md:row-span-2"
                    : ""
                }`}
              >
                <div
                  className={`relative ${
                    index === 0 || index === 5
                      ? "aspect-square"
                      : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                  {/* Content */}
                  <div className="absolute inset-0 p-4 flex flex-col justify-end">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      <p className="text-white font-bold text-lg">{item.title}</p>
                      <p className="text-zinc-400 text-sm">{item.category}</p>
                    </motion.div>
                  </div>

                  {/* Zoom icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-primary/30">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>

                  {/* Corner accent */}
                  <div className="absolute bottom-0 left-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-2 left-2 w-full h-full border-b-2 border-l-2 border-primary" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
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
