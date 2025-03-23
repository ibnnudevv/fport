"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  // Sample project data
  const projects = [
    {
      id: "banoli",
      letter:
        "https://res.cloudinary.com/dvbmzk1rs/image/upload/v1742743152/e8ded14a-5b09-4880-8696-eeb9fcf1918e.png",
      dateRange: "1 Juni - 5 Juli 2024",
      title: "Banoli",
      location: "Malang, Indonesia",
      description:
        "Platform eCommerce buat jual beli sparepart kendaraan, udah ada sistem PoS, manajemen stok, sama pengiriman juga.",
      sourceUrl: "#",
    },
    {
      id: "medical",
      letter:
        "https://res.cloudinary.com/dvbmzk1rs/image/upload/v1742743270/58af6e27-d4a3-4733-9683-ae63ae17c7ff.png",
      dateRange: "3 - 5 Mei 2024",
      title: "Transfer Media Rekam Medis",
      location: "Jember, Indonesia",
      description:
        "Sistem manajemen rekam medis elektronik yang aman, buat jaga privasi pasien.",
      sourceUrl: "#",
    },
    {
      id: "dapur",
      letter:
        "https://res.cloudinary.com/dvbmzk1rs/image/upload/v1742743420/cac6f317-d189-4ade-97bb-12ef3e4b7b53.png",
      icon: "🍴",
      dateRange: "9 - 19 Mei 2023",
      title: "Dapur Mami",
      location: "Jember, Indonesia",
      description:
        "Solusi eCommerce lengkap, ada sistem reservasi, integrasi PoS, sama manajemen pengiriman juga.",
      sourceUrl: "#",
    },
    {
      id: "hykids",
      letter:
        "https://res.cloudinary.com/dvbmzk1rs/image/upload/v1742743509/d2a72abb-b90c-4bad-876d-c8c4feb59122.png",
      dateRange: "1 Maret - 9 April 2024",
      title: "HyKids",
      location: "Jember, Indonesia",
      description:
        "Identitas merek lengkap, termasuk desain logo, palet warna, sama materi pemasaran.",
    },
  ];
  const handleProjectClick = (id: string) => {
    if (activeProject === id) {
      setActiveProject(null);
    } else {
      setActiveProject(id);
    }
  };

  return (
    <div
      className={cn(
        "w-full transition-colors duration-300 bg-white dark:bg-black"
      )}
    >
      <div className="w-full max-w-6xl mx-auto px-4 pt-16">
        <div className="text-center mb-8">
          <motion.h1
            className="text-base md:text-lg text-gray-800 font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Aku juga nge-<span className="text-blue-600">freelance</span>
          </motion.h1>
          <motion.p
            className="text-base text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Buat nambah-nambahin pengalaman dan uang jajan
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="overflow-hidden rounded-2xl transition-all duration-300 bg-white  border border-black/5 h-fit hover:bg-[#fbfbfb]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.02 }}
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="p-8 md:p-6">
                <div className="flex items-center justify-between mb-6">
                  <Image
                    src={project.letter}
                    className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold bg-[#f5f5f7] object-cover"
                    alt={project.title}
                    width={800}
                    height={800}
                  />
                  <p className="text-sm text-gray-500">{project.dateRange}</p>
                </div>

                <h3 className="text-base font-semibold mb-1 line-clamp-1 hover:line-clamp-none">
                  {project.title}
                </h3>
                <p className="text-sm mb-4 text-gray-500">{project.location}</p>

                <p className="mb-6 line-clamp-3 text-gray-600 text-sm">
                  {project.description}
                </p>

                {/* {project.sourceUrl && (
                  <div className="flex justify-between items-center">
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="gap-2 px-0 hover:bg-transparent text-blue-600 hover:text-blue-500"
                    >
                      <Link href={project.sourceUrl}>
                        <span>View Source</span>
                        <ArrowRight size={16} />
                      </Link>
                    </Button>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full text-black hover:bg-black/10"
                    >
                      <Plus size={16} />
                    </Button>
                  </div>
                )} */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
