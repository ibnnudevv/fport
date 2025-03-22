import Image from "next/image";
import HeaderComponent from "./_component/header";
import PageDescriptionComponent from "./_component/page-description";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto py-8 md:py-16 px-4">
      <HeaderComponent />
      <PageDescriptionComponent
        text="Software Engineer 👨🏻‍💻 berusia 23 berbasis di Jakarta 🇮🇩 membuat produk digital atas nama Moh Ibnu"
        link="mailto:ibnnudev@gmail.com"
      />
    </div>
  );
}
