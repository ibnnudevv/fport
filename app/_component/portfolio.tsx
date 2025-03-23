"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileWarning } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { LinkPreview } from "@/components/ui/link-preview";

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  // Sample project data
  const projects = [
    {
      id: "kerjaLN",
      letter:
        "https://res.cloudinary.com/dvbmzk1rs/image/upload/v1742747754/d530d000-e3d5-44d9-ba8c-c5531226ed67.png",
      dateRange: "1 Nov - 12 Des 2024",
      title: "Kerja LN",
      location: "Pasuruan, Indonesia",
      description:
        "Website portal lowongan kerja luar negeri, udah ada sistem pendaftaran juga.",
      sourceUrl: "http://kerjaln.com/",
      isForbidden: false,
    },
    {
      id: "yashinta",
      letter:
        "https://res.cloudinary.com/dvbmzk1rs/image/upload/v1742747918/fb2c8d81-1a9d-480a-9da8-2486d14a0777.png",
      dateRange: "1 Nov - 12 Des 2024",
      title: "Yashinta Sekarwangi",
      location: "Yogyakarta, Indonesia",
      description:
        "Platform promosi visi misi calon legislatif di Daerah Istimewa Yogyakarta. Alhamdulillah menang!",
      sourceUrl: "https://yashintasekarwangi.com/",
      isForbidden: false,
    },
    {
      id: "nchmerdeka",
      letter:
        "https://res.cloudinary.com/dvbmzk1rs/image/upload/v1742748126/91b999dc-055d-4c66-b057-0b9f41dec059.png",
      dateRange: "1 Nov - 12 Des 2024",
      title: "NCH Merdeka",
      location: "Jember, Indonesia",
      description:
        "Website yayasan dengan CMS sendiri, SEO friendly, dan responsive.",
      sourceUrl: "https://nchmerdeka.com/",
      isForbidden: false,
    },
    {
      id: "wisatadesaklipucung",
      letter:
        "https://res.cloudinary.com/dvbmzk1rs/image/upload/v1742747608/2b5823ec-d5d1-403f-80ca-a2948524bc48.png",
      dateRange: "27 Okt - 5 Nov 2024",
      title: "Wisata Desa Kali Pucung",
      location: "Semarang, Indonesia",
      description:
        "Website resmi untuk promosi wisata desa, udah ada sistem booking juga.",
      sourceUrl: "https://dusunkalipucung.com/",
      isForbidden: false,
    },
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
      isForbidden: true,
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
      isForbidden: true,
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
      sourceUrl: "http://dapurmami.my.id/",
      isForbidden: true,
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
      sourceUrl: "http://hykids.com/",
      isForbidden: true,
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
            className="text-base md:text-lg text-gray-800 dark:text-gray-200 font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Proyek yang pernah saya kerjakan
          </motion.h1>
          <motion.p
            className="text-base text-gray-400 dark:text-gray-500 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Berikut adalah beberapa proyek yang pernah saya kerjakan, mulai dari
            website, aplikasi, desain grafis, dan lainnya.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12">
          {projects.map((project, index) => (
            <LinkPreview
              key={project.id}
              url={
                project.isForbidden ? "https://blank.page/" : project.sourceUrl
              }
            >
              <motion.div
                className="overflow-hidden rounded-2xl transition-all duration-300 bg-white dark:bg-gray-800 border border-black/5 dark:border-white/10 h-fit hover:bg-[#fbfbfb] dark:hover:bg-gray-700"
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
                      className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold bg-white object-contain dark:bg-gray-700"
                      alt={project.title}
                      width={800}
                      height={800}
                    />
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {project.dateRange}
                    </p>
                  </div>

                  <h3 className="text-base font-semibold mb-1 line-clamp-1 hover:line-clamp-none dark:text-gray-200">
                    {project.title}
                  </h3>
                  <p className="text-sm mb-4 text-gray-500 dark:text-gray-400">
                    {project.location}
                  </p>

                  <p className="mb-6 line-clamp-3 text-gray-600 dark:text-gray-300 text-xs">
                    {project.description}
                  </p>

                  {project.sourceUrl && (
                    <div className="flex justify-between items-center">
                      {project.isForbidden == false ? (
                        <Button
                          variant="ghost"
                          size="sm"
                          asChild
                          className="gap-2 px-0 hover:bg-transparent text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-500"
                        >
                          <span
                            onClick={() =>
                              window.open(project.sourceUrl, "_blank")
                            }
                            className="cursor-pointer"
                          >
                            Lihat project
                            <ArrowRight size={16} />
                          </span>
                        </Button>
                      ) : (
                        <p className="text-red-500 dark:text-red-400 text-sm">
                          NDA - ga bisa ditampilin
                        </p>
                      )}

                      {project.isForbidden && (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <FileWarning
                                size={16}
                                className="text-red-500 dark:text-red-400"
                              />
                            </TooltipTrigger>
                            <TooltipContent className="dark:bg-gray-800 dark:border-gray-700">
                              <p className="dark:text-gray-200">
                                Ga bisa ditampilin karena ada NDA
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            </LinkPreview>
          ))}
        </div>
      </div>
    </div>
  );
}
