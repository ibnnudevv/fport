"use client";

import Image from "next/image";
import logo from "@/public/images/logo.jpg";
import FreelanceOrderModal from "./modal-order";

const HeaderComponent = () => {
  return (
    <div className="flex items-center justify-between space-y-4">
      <div className="flex items-center text-center md:text-left">
        <Image
          src={logo}
          alt="Profile Picture"
          width={100}
          height={100}
          className="rounded-full border border-gray-200 object-cover w-20 h-20 md:w-24 md:h-24"
        />
        <h1 className="text-gray-900 text-2xl md:text-3xl font-semibold ml-4">
          Ibnu Sutio
        </h1>
      </div>
      <FreelanceOrderModal />
    </div>
  );
};

export default HeaderComponent;
