import Image from "next/image";
import React from "react";
import profilePic from "@/public/images/profile-pic.jpeg";

const HeaderComponent = () => {
  return (
    <>
      <div className="md:flex items-center text-center md:text-left">
        <Image
          src={profilePic}
          alt="Profile Picture"
          width={100}
          height={100}
          className="rounded-full"
        />
        <h1 className="text-gray-800 dark:text-gray-200 text-2xl md:text-3xl font-semibold ml-4">
          I'm Ibnnu
        </h1>
      </div>
    </>
  );
};

export default HeaderComponent;
