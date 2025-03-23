import React from "react";
import YoutubeIcon from "../_icon/youtube";
import InstagramIcon from "../_icon/instagram";
import SpotifyComponent from "../_icon/spotify";
import MailIcon from "../_icon/mail";

const FooterComponent = () => {
  return (
    <div className="py-14">
      <div className="h-[0.8pt] bg-gray-100 dark:bg-gray-700 w-full mb-6 mt-24"></div>
      <div className="flex items-center justify-between max-w-64 mx-auto">
        <YoutubeIcon color="#b4c5d1" className="w-8 h-8" />
        <InstagramIcon color="#b4c5d1" className="w-6 h-6" />
        <SpotifyComponent color="#b4c5d1" className="w-6 h-6" />
        <MailIcon color="#b4c5d1" className="w-6 h-6" />
      </div>
      <div className="text-center text-base text-gray-600 dark:text-gray-400 mt-6">
        &copy; 2022 Moh Ibnu. All rights reserved.
      </div>
    </div>
  );
};

export default FooterComponent;
