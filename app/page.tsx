import FooterComponent from "./_component/footer";
import HeaderComponent from "./_component/header";
import PageDescriptionComponent from "./_component/page-description";
import ProjectComponent, { ProjectInterface } from "./_component/project";

const projects: ProjectInterface[] = [
  // {
  //   title: "BEE POS",
  //   category: "Website",
  //   image:
  //     "https://i0.wp.com/blog.dealpos.com/wp-content/uploads/2022/02/point-of-sale-banner-edited.jpg?fit=1919%2C1080&ssl=1",
  //   skills: ["React JS", "Tailwind CSS", "TypeScript"],
  //   link: "https://dapurmami.com",
  // },
  // {
  //   title: "Smart POS",
  //   category: "Multi Platform",
  //   image:
  //     "https://poscambodia.com/sites/default/files/gallery/Innovative%20Img/Pos-img-sys.png",
  //   skills: ["React JS", "TypeScript", "Swift"],
  //   link: "https://smartpos.com",
  // },
];

const skills = [
  "React JS",
  "Tailwind CSS",
  "TypeScript",
  "Next JS",
  "Node JS",
  "Express JS",
  "Mongo DB",
  "MySQL",
  "PostgreSQL",
  "Firebase",
  "Laravel",
];

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto py-8 md:py-16 px-4">
      <HeaderComponent />
      <PageDescriptionComponent
        text="Software Engineer 👨🏻‍💻 berusia 23 berbasis di Jakarta 🇮🇩 membuat produk digital atas nama Moh Ibnu"
        link="mailto:ibnnudev@gmail.com"
      />
      <ProjectComponent skills={skills} projects={projects} />
      <FooterComponent />
    </div>
  );
}
