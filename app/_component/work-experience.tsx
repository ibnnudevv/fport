"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export interface WorkExperienceProps {
  companyImage: string;
  company: string;
  position: string;
  year: string;
  description: string[];
  image: string[];
  isPresent?: boolean;
}

const WorkExperience = ({ items }: { items: WorkExperienceProps[] }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-12"
    >
      <div className="space-y-8">
        <AnimatePresence>
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.companyImage}
                      alt={item.company}
                      width={40}
                      height={40}
                      className="rounded-full border border-gray-100 object-cover"
                    />
                    <div>
                      <div className="flex items-center gap-1">
                        <h2 className="text-base font-semibold">
                          {item.company}
                        </h2>
                        {item.isPresent && (
                          <div className="text-xs bg-[#2b6cb0] text-white px-1.5 py-0.5 rounded-md ml-2">
                            Present
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-[#2b6cb0] font-medium">
                        {item.position}
                      </p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">{item.year}</div>
                </div>
                <div className="pl-14 space-y-2">
                  <ul className="list-disc pl-3 text-sm space-y-1 text-gray-600">
                    {item.description.map((desc, descIndex) => (
                      <li key={descIndex}>{desc}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-4 mt-4">
                    {item.image.map((image, imageIndex) => (
                      <motion.div
                        key={imageIndex}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Image
                          src={image}
                          alt={`${item.company} Image ${imageIndex}`}
                          width={200}
                          height={100}
                          className="rounded-lg border border-gray-200 hover:shadow object-cover w-32 h-20"
                          onError={(e) => {
                            e.currentTarget.src =
                              "https://via.placeholder.com/200x100.png?text=Image+Not+Found";
                          }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="h-[0.5pt] bg-gray-100 rounded-md my-4"></div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default WorkExperience;
