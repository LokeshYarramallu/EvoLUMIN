import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const SDG = () => {
  return (
    <section
      id="memes"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My SDG Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-40">
        <div className="text-lg text-white md:border-r md:border-white md:border-opacity-250 pt-8 md:pt-0 pl-4 md:pr-4">
          <p>SDG Goal-4: Quality Education</p><br />
          <p>SDG Goal 4 ensures inclusive, equitable education for all, promoting free primary and secondary schooling, vocational training, and reducing gender and wealth disparities, vital for global sustainable development.</p>
        </div>
        <div className="text-lg text-white md:border-b md:border-white md:border-opacity-250 pt-8 md:pt-0 pb-4 md:pb-4">
          <p>SDG Goal-11: Sustainable Cities and Communities</p><br />
        <p>SDG Goal 11 aims for inclusive, safe, resilient, and sustainable cities. It emphasizes urban planning, affordable housing, public transport, green spaces, and disaster risk reduction. Achieving this fosters well-being and better living environments.</p>        </div>
        <div className="text-lg text-white md:border-t md:border-white md:border-opacity-250 pt-8 md:pt-4 pl-4 md:pl-0">
          <p>SDG Goal-14: Life Below Water</p><br />
            <p>SDG Goal 14 targets conserving oceans, seas, and marine resources. It tackles marine pollution, protects ecosystems, and promotes sustainable fishing. Achieving this ensures marine life health, benefiting both people and the planet.</p>        </div>
        <div className="text-lg text-white md:border-l md:border-white md:border-opacity-250 pt-8 md:pt-0 pr-4 md:pl-4">
          <p>SDG Goal-16: Peace, Justice, and Strong Institutions</p><br />
            <p>SDG Goal 16 promotes peaceful, inclusive societies with justice for all. It targets reducing violence, corruption, and ensuring the rule of law. Achieving this fosters stability, equality, and trust, driving sustainable development and prosperity.</p>        </div>
      </div>
    </section>
  );
};
