import type React from "react";
import { useState, useEffect, useRef, createRef } from "react";
import { RESUME_DATA } from "../AppConstraint";
import { Search, Filter, Code, Brain, Cpu, Globe } from "lucide-react";

interface ProjectDetail {
  id: number;
  name: string;
  description?: string;
  technologies?: string[];
  feature: string[];
  duration: string;
  role?: string;
  startDate: Date;
}

const parseProjectDate = (dateStr: string): Date => {
  if (!dateStr) return new Date();
  const parts = dateStr.split(" ");
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  let month = 0;
  let year = new Date().getFullYear();
  
  if (parts.length === 2) {
    const mIdx = months.indexOf(parts[0]);
    if (mIdx !== -1) month = mIdx;
    year = parseInt(parts[1]) || year;
  } else if (parts.length === 1) {
    const yr = parseInt(parts[0]);
    if (yr) year = yr;
  }
  
  return new Date(year, month);
};

const items: ProjectDetail[] = RESUME_DATA.projects.map((proj) => ({
  id: proj.id,
  name: proj.name,
  description: proj.description,
  technologies: proj.technologies,
  role: proj.role,
  feature: proj.feature,
  duration: proj.duration,
  startDate: parseProjectDate(proj.startDate)
})).sort((a, b) => b.startDate.getTime() - a.startDate.getTime());

// Define helper to get project category
const getProjectCategory = (project: ProjectDetail): string => {
  const name = project.name.toLowerCase();
  const tech = (project.technologies || []).map(t => t.toLowerCase());

  if (name.includes("ai") || name.includes("summarization") || name.includes("learning") || tech.includes("python") || tech.includes("openai api") || tech.includes("rag")) {
    return "ai";
  }
  if (name.includes("microservices") || name.includes("distributed") || name.includes("api platform") || tech.includes("microservices") || tech.includes("gRPC")) {
    return "microservices";
  }
  return "fullstack";
};

const FloatingMenu: React.FC<{
  projects: ProjectDetail[];
  activeId: number | null;
  scrollToProject: (id: number) => void;
}> = ({ projects, activeId, scrollToProject }) => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      ref={menuRef}
      className={`fixed right-4 bottom-4 transition-all duration-300 z-40 print:hidden ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
    >
      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-indigo-50 p-4 max-h-[60vh] overflow-y-auto w-64">
        <h3 className="font-bold text-indigo-950 mb-3 sticky top-0 bg-white/10 pb-2 border-b border-indigo-50 flex items-center gap-2">
          <Filter className="w-4 h-4 text-indigo-600" />
          Jump to Project
        </h3>
        <ul className="space-y-1">
          {projects.map((project) => (
            <li key={project.id}>
              <button
                onClick={() => scrollToProject(project.id)}
                className={`flex items-center px-3 py-2 rounded-xl text-xs transition-all w-full text-left font-medium ${
                  activeId === project.id
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                    : "text-indigo-950 hover:bg-indigo-50"
                }`}
              >
                <span className="truncate">{project.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ProjectCard: React.FC<{
  project: ProjectDetail;
  onClick: () => void;
}> = ({ project, onClick }) => {
  const category = getProjectCategory(project);
  
  const getCategoryIcon = () => {
    switch (category) {
      case "ai":
        return <Brain className="w-5 h-5 text-emerald-600" />;
      case "microservices":
        return <Cpu className="w-5 h-5 text-indigo-600" />;
      default:
        return <Globe className="w-5 h-5 text-purple-600" />;
    }
  };

  return (
    <div
      className="group relative bg-white rounded-2xl shadow-sm border border-indigo-100/50 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 p-6 flex flex-col justify-between cursor-pointer"
      onClick={onClick}
    >
      <div>
        <div className="flex justify-between items-center mb-4">
          <div className="p-2 rounded-xl bg-indigo-50/50">
            {getCategoryIcon()}
          </div>
          <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
            {project.duration}
          </span>
        </div>
        
        <h3 className="text-lg font-bold text-indigo-950 group-hover:text-indigo-600 transition-colors mb-2">
          {project.name}
        </h3>
        
        {project.role && (
          <div className="text-xs font-semibold text-indigo-700 bg-indigo-50/40 border border-indigo-100/50 rounded-lg px-2.5 py-1 inline-block mb-3">
            {project.role}
          </div>
        )}
        
        <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed mb-4">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-indigo-50/50">
        {project.technologies?.slice(0, 4).map((tech, idx) => (
          <span
            key={idx}
            className="bg-indigo-50 text-indigo-700 text-[10px] font-bold px-2 py-1 rounded-lg border border-indigo-100/30"
          >
            {tech}
          </span>
        ))}
        {project.technologies && project.technologies.length > 4 && (
          <span className="text-[10px] text-gray-500 font-bold self-center ml-1">
            +{project.technologies.length - 4} more
          </span>
        )}
      </div>
    </div>
  );
};

const ProjectDetails: React.FC<{
  project: ProjectDetail;
  projectRef: React.RefObject<HTMLDivElement | null>;
}> = ({ project, projectRef }) => {
  return (
    <section ref={projectRef} className="scroll-mt-28 mb-12">
      <div className="bg-white rounded-2xl w-full shadow-md border border-indigo-50/70 overflow-hidden hover:shadow-lg transition-all duration-300">
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-indigo-50 pb-5">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-indigo-950 mb-1 leading-tight">{project.name}</h2>
              <p className="text-indigo-600 font-semibold text-sm">{project.duration}</p>
            </div>
            {project.role && (
              <span className="bg-indigo-55 bg-indigo-50/80 border border-indigo-100 text-indigo-800 text-xs font-bold px-4 py-2 rounded-xl">
                Role: {project.role}
              </span>
            )}
          </div>

          {project.description && (
            <div className="mt-6">
              <h3 className="text-sm font-extrabold uppercase text-indigo-900 tracking-wider mb-3">
                Project Overview
              </h3>
              <p className="text-gray-750 leading-relaxed text-base">{project.description}</p>
            </div>
          )}

          {project.technologies && (
            <div className="mt-6">
              <h3 className="text-sm font-extrabold uppercase text-indigo-900 tracking-wider mb-3">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-indigo-50 text-indigo-700 text-xs font-bold px-3 py-1.5 rounded-xl border border-indigo-100/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-6 pt-5 border-t border-indigo-50/50">
            <h3 className="text-sm font-extrabold uppercase text-indigo-900 tracking-wider mb-3">
              Key Features & Contributions
            </h3>
            <ul className="space-y-3">
              {project.feature.map((feat, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 mt-1 mr-3 bg-indigo-50 p-1 rounded-lg">
                    <Code className="w-4 h-4 text-indigo-600" />
                  </span>
                  <span className="text-gray-750 leading-relaxed text-sm md:text-base">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// Component that renders card grid
export const ProjectsShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"all" | "ai" | "microservices" | "fullstack">("all");
  const projectsLargeRef = useRef<HTMLDivElement>(null);

  const filteredItems = items.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.description || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.technologies || []).some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory =
      selectedCategory === "all" || getProjectCategory(item) === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const scrollToProjectsLarge = (projectId: number) => {
    if (projectsLargeRef.current) {
      projectsLargeRef.current.scrollIntoView({ behavior: "smooth" });
    }
    
    setTimeout(() => {
      const projectElement = document.querySelector(`[data-project-id="${projectId}"]`);
      if (projectElement) {
        projectElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 400);
  };

  const categoryBtnClass = (cat: typeof selectedCategory) => `
    px-4 py-2 text-xs md:text-sm font-bold rounded-xl transition-all duration-300 border
    ${selectedCategory === cat
      ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/20"
      : "bg-white text-indigo-950 border-indigo-100 hover:bg-indigo-50/50"}
  `;

  return (
    <div className="w-full py-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-950 mb-4 tracking-tight">
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-800">Project Portfolio</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-400 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-indigo-900/70 max-w-3xl mx-auto leading-relaxed">
            A collection of my professional work showcasing full-stack development expertise with modern technologies
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="bg-white border border-indigo-50 rounded-2xl p-5 shadow-sm mb-10 max-w-5xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-indigo-400" />
            <input
              type="text"
              placeholder="Search project, stack, feature..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-indigo-50/30 border border-indigo-100/50 rounded-xl text-sm text-indigo-950 placeholder-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setSelectedCategory("all")} className={categoryBtnClass("all")}>All</button>
            <button onClick={() => setSelectedCategory("microservices")} className={categoryBtnClass("microservices")}>Microservices & API</button>
            <button onClick={() => setSelectedCategory("ai")} className={categoryBtnClass("ai")}>AI & Python</button>
            <button onClick={() => setSelectedCategory("fullstack")} className={categoryBtnClass("fullstack")}>Full Stack SaaS</button>
          </div>
        </div>

        {/* Project Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {filteredItems.map((item) => (
              <ProjectCard key={item.id} project={item} onClick={() => scrollToProjectsLarge(item.id)} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white border border-indigo-50 rounded-2xl max-w-xl mx-auto">
            <Search className="w-12 h-12 text-indigo-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-indigo-950">No projects found</h3>
            <p className="text-sm text-gray-500 mt-1">Try resetting search query or filter tags</p>
          </div>
        )}
      </div>
      <div ref={projectsLargeRef} />
    </div>
  );
};

// Component that renders detailed descriptions
export const ProjectsShowcaseLarge: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const projectRefs = useRef(items.map(() => createRef<HTMLDivElement>()));
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = Number.parseInt(entry.target.getAttribute("data-project-id") || "0");
            if (projectId) {
              setActiveId(projectId);
            }
          }
        });
      },
      { threshold: 0.3, rootMargin: "-100px 0px -100px 0px" }
    );

    const currentObserver = observerRef.current;

    projectRefs.current.forEach((ref, index) => {
      if (ref.current) {
        ref.current.setAttribute("data-project-id", items[index].id.toString());
        currentObserver.observe(ref.current);
      }
    });

    return () => {
      if (currentObserver) currentObserver.disconnect();
    };
  }, []);

  const scrollToProject = (id: number) => {
    const index = items.findIndex((item) => item.id === id);
    if (index !== -1 && projectRefs.current[index].current) {
      projectRefs.current[index].current?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <div className="w-full py-10 bg-gray-50/50 relative">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-950 mb-4 tracking-tight">
            Project <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-800">Details</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-400 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-indigo-900/70 max-w-3xl mx-auto leading-relaxed">
            Detailed view of my professional projects with technologies used and key contributions
          </p>
        </div>
        <div className="space-y-8 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <div key={item.id} data-project-id={item.id}>
              <ProjectDetails project={item} projectRef={projectRefs.current[index]} />
            </div>
          ))}
        </div>
      </div>
      <FloatingMenu projects={items} activeId={activeId} scrollToProject={scrollToProject} />
    </div>
  );
};