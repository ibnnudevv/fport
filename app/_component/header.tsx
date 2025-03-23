"use client";

import Image from "next/image";
// import profilePic from "@/public/images/profile-pic.jpeg";
import logo from "@/public/images/logo.jpg";

const HeaderComponent = () => {
  // const images = [profilePic, profilePic2];
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   }, 10000);

  //   return () => clearInterval(interval);
  // }, [images.length]);

  return (
    <>
      <div className="flex items-center text-center md:text-left">
        <Image
          // src={images[currentImageIndex]}
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
    </>
  );
};

export default HeaderComponent;
