import FooterComponent from "./_component/footer";
import HeaderComponent from "./_component/header";
import PageDescriptionComponent from "./_component/page-description";
import Portfolio from "./_component/portfolio";
import ProjectComponent from "./_component/project";
import SkillComponent from "./_component/skill";
import WorkExperience from "./_component/work-experience";
import { projects, skills, workExperience } from "./_resource/main";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto py-8 md:py-16 px-4">
      <HeaderComponent />
      <PageDescriptionComponent
        text="Software Engineer 👨🏻‍💻 berusia 23 berbasis di Jakarta 🇮🇩 membuat produk digital atas nama Moh. Ibnu Abdurrohman Sutio"
        link="mailto:ibnnudev@gmail.com"
      />
      <SkillComponent skills={skills} />
      <WorkExperience items={workExperience} />
      <Portfolio />
      <ProjectComponent projects={projects} />
      <FooterComponent />
    </div>
  );
}
