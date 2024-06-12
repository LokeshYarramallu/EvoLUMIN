import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const SDG = () => {
  return (
    <section
      id="memes"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Track: SDG
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-40 relative">
        <div className="text-lg text-white pt-8 pl-4">
          <p>SDG Goal-4: Quality Education</p><br />
          <p>SDG Goal 4 ensures inclusive, equitable education for all, promoting free primary and secondary schooling, vocational training, and reducing gender and wealth disparities, vital for global sustainable development.</p>
          <div className="absolute top-0 left-1/2 h-full border border-white border-opacity-50" style={{ width: '1px' }}></div>
        </div>
        <div className="text-lg text-white pt-8 pb-4">
          <p>SDG Goal-11: Sustainable Cities and Communities</p><br />
          <p>SDG Goal 11 aims for inclusive, safe, resilient, and sustainable cities. It emphasizes urban planning, affordable housing, public transport, green spaces, and disaster risk reduction. Achieving this fosters well-being and better living environments.</p>
          <div className="absolute top-1/2 left-0 w-full border border-white border-opacity-50" style={{ height: '1px' }}></div>
        </div>
        <div className="text-lg text-white pt-8 pl-4">
          <p>SDG Goal-14: Life Below Water</p><br />
          <p>SDG Goal 14 targets conserving oceans, seas, and marine resources. It tackles marine pollution, protects ecosystems, and promotes sustainable fishing. Achieving this ensures marine life health, benefiting both people and the planet.</p>
          <div className="absolute bottom-0 left-1/2 h-full border border-white border-opacity-50" style={{ width: '1px' }}></div>
        </div>
        <div className="text-lg text-white pt-8 pr-4">
          <p>SDG Goal-16: Peace, Justice, and Strong Institutions</p><br />
          <p>SDG Goal 16 promotes peaceful, inclusive societies with justice for all. It targets reducing violence, corruption, and ensuring the rule of law. Achieving this fosters stability, equality, and trust, driving sustainable development and prosperity.</p>
          <div className="absolute top-1/2 right-0 w-full border border-white border-opacity-50" style={{ height: '1px' }}></div>
        </div>
      </div>
    </section>
  );
};
