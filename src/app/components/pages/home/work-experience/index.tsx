import { SectionTitle } from "@/app/components/section-title";
import { ExperienceItem } from "./experience-item";
import { WorkExperience as IWorkExperience } from "@/types/work-experiencie";

interface WorkExperienceProps {
  experiencies: IWorkExperience[]
}

export const WorkExperience = ({experiencies}: WorkExperienceProps) => {
  return (
    <section className="container py-14 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row">
      <div className="max-w-[420px]">
        <SectionTitle
          subtitle="experiências"
          title="Experiência Profissional"
        />
        <p className="text-gray-400 mt-6">
          Estou sempre aberto a novos desafios e projetos emocionantes. Vamos
          trabalhar juntos para criar soluções incríveis para sua empresa!
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {experiencies.map((experience, ) => (
            <ExperienceItem
            key={experience.companyName}
            experience={experience}
            />
  
        ))}
      </div>
    </section>
  );
};
