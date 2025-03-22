import Link from "next/link";
import React from "react";

const PageDescriptionComponent = ({
  text,
  link,
}: {
  text: string;
  link: string;
}) => {
  return (
    <>
      <div className="h-[0.8pt] bg-gray-100 dark:bg-gray-700 w-full mb-6 mt-2"></div>
      <div className="text-lg">
        <p className="text-gray-800 dark:text-gray-400">{text}</p>
        <Link href={link}>
          <p className="text-[#3182ce] font-semibold hover:text-[#2c5282] cursor-pointer mt-2">
            Tertarik kerjasama? Email aja!
          </p>
        </Link>
      </div>
      <div className="h-[0.8pt] bg-gray-100 dark:bg-gray-700 w-full mt-6 mb-2"></div>
    </>
  );
};

export default PageDescriptionComponent;
