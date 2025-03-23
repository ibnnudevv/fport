"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import profilePic from "@/public/images/profile-pic.jpeg";
import profilePic2 from "@/public/images/profile-pic2.jpeg";

const HeaderComponent = () => {
  const images = [profilePic, profilePic2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Ganti gambar setiap 3 detik

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="md:flex items-center text-center md:text-left">
        <Image
          src={images[currentImageIndex]}
          alt="Profile Picture"
          width={100}
          height={100}
          className="rounded-full border border-gray-100 dark:border-gray-700 object-cover w-20 h-20 md:w-24 md:h-24"
        />
        <h1 className="text-gray-800 dark:text-gray-200 text-2xl md:text-3xl font-semibold ml-4">
          I'm Ibnnu
        </h1>
      </div>
    </>
  );
};

export default HeaderComponent;
