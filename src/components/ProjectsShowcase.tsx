import type React from "react";
import { useState, useEffect, useRef, createRef } from "react";

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

const parseDate = (dateStr: string): Date => {
  const dateRange = dateStr.split("–").map((d) => d.trim());
  const [startMonth, startYear] = dateRange[0].split(" ");
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const monthIndex = months.indexOf(startMonth);
  const yearNum = Number.parseInt(startYear || new Date().getFullYear().toString());
  return new Date(yearNum, monthIndex);
};

const items: ProjectDetail[] = [
  {
    id: 1,
    name: "Microservices-Based E-Commerce Platform",
    description:
      "Full-stack e-commerce system designed with microservices architecture using .NET Core and Node.js. Implemented service communication, API routing, and performance optimization through caching.",
    technologies: [".NET Core", "Node.js", "React", "Microservices", "Redis", "Docker", "PostgreSQL", "Message Queue"],
    role: "Full Stack Developer",
    feature: [
      "Designed and implemented microservices architecture with independent scalability",
      "Developed API Gateway layer for routing and request handling",
      "Implemented service-to-service communication using message queues",
      "Built React-based frontend with responsive design",
      "Integrated Redis caching for 20-30% performance improvement",
      "Containerized services using Docker for easy deployment",
      "Implemented CI/CD pipeline for automated testing and deployment"
    ],
    duration: "Current Project",
    startDate: parseDate("Jan 2025")
  },
  {
    id: 2,
    name: "Bulk File Processing System",
    description:
      "Async file processing system with queue-based architecture for handling large-scale data imports. Implemented real-time status updates and progress tracking.",
    technologies: ["Node.js", "AWS SQS", "AWS Lambda", "React", "WebSockets", "PostgreSQL"],
    role: "Full Stack Developer",
    feature: [
      "Built async queue-based architecture for scalable file processing",
      "Implemented real-time status updates using WebSockets",
      "Created React dashboard for monitoring processing jobs",
      "Optimized memory usage for handling large file uploads",
      "Built error handling and retry mechanisms",
      "Integrated AWS Lambda for serverless processing",
      "Implemented progress tracking with estimated completion time"
    ],
    duration: "Recent Project",
    startDate: parseDate("Oct 2024")
  },
  {
    id: 3,
    name: "Real-Time Chat Application",
    description:
      "Full-stack chat system with real-time messaging, search capabilities, and file sharing. Built using React frontend with WebSockets and PostgreSQL backend.",
    technologies: ["React", "Node.js", "WebSockets", "PostgreSQL", "Redux", "Express.js"],
    role: "Full Stack Developer",
    feature: [
      "Implemented real-time messaging using WebSockets and Socket.io",
      "Built full-text search functionality for message history",
      "Created file sharing and attachment capabilities",
      "Implemented user presence and typing indicators",
      "Built Redux state management for consistent UI updates",
      "Created responsive mobile-friendly design",
      "Implemented message encryption for security"
    ],
    duration: "2024",
    startDate: parseDate("Jun 2024")
  },
  {
    id: 4,
    name: "Task Management System (Kanban)",
    description:
      "Full-stack task management application with Kanban board interface, role-based access control, and real-time updates for team collaboration.",
    technologies: ["React", ".NET Core", "TypeScript", "SQL Server", "SignalR", "Redux"],
    role: "Full Stack Developer",
    feature: [
      "Designed Kanban board interface with drag-and-drop functionality",
      "Implemented role-based access control and permissions",
      "Built real-time updates using SignalR for team collaboration",
      "Created task filtering and search capabilities",
      "Implemented notification system for task updates",
      "Built dashboard with project statistics and analytics",
      "Created customizable workflow stages and task types"
    ],
    duration: "2024",
    startDate: parseDate("May 2024")
  },
  {
    id: 5,
    name: "IoT-Based Government Project",
    description:
      "Backend APIs and device integration for IoT government solution. Handled sensor data collection, processing, and real-time monitoring.",
    technologies: [".NET Core", "Azure IoT Hub", "Azure Functions", "SQL Server", "REST APIs"],
    role: "Backend Developer",
    feature: [
      "Developed REST APIs for device communication and data collection",
      "Integrated with Azure IoT Hub for IoT device management",
      "Built data processing pipeline for sensor data",
      "Implemented real-time monitoring and alerting system",
      "Created data aggregation and reporting services",
      "Optimized database queries for high-frequency data ingestion",
      "Built secure device authentication and authorization"
    ],
    duration: "Internship 2022",
    startDate: parseDate("Feb 2022")
  },
  {
    id: 6,
    name: "AI-Assisted E-Commerce Assistant",
    description:
      "Learning project implementing AI-assisted features using LangChain and OpenAI API. Built basic RAG pipeline for contextual responses with conversation memory.",
    technologies: ["LangChain", "OpenAI API", "React", "Node.js", "Python", "RAG", "Vector Database"],
    role: "Full Stack Developer",
    feature: [
      "Implemented LangChain for AI orchestration and prompt management",
      "Built basic RAG (Retrieval-Augmented Generation) pipeline",
      "Integrated OpenAI API for natural language processing",
      "Created vector database for semantic search",
      "Implemented conversation memory for follow-up queries",
      "Connected AI with backend APIs for product search and actions",
      "Built responsive chat interface for user interactions",
      "Added context awareness for accurate product recommendations"
    ],
    duration: "Learning Project 2025",
    startDate: parseDate("Jan 2025")
  },
  {
    id: 7,
    name: "High-Concurrency Healthcare Platform",
    description:
      "Healthcare SaaS platform built for supporting ~10K concurrent users. Implemented performance optimization achieving 20-30% improvement through caching and query optimization.",
    technologies: ["React", ".NET Core", "PostgreSQL", "Redis", "Elasticsearch", "SignalR"],
    role: "Full Stack Developer",
    feature: [
      "Architected system for handling 10K+ concurrent users",
      "Implemented Redis caching strategy reducing database load by 70%",
      "Optimized SQL queries achieving 20-30% performance improvement",
      "Built React PWA with offline-first capabilities",
      "Implemented real-time data updates using SignalR",
      "Created Elasticsearch integration for fast searching",
      "Built comprehensive monitoring and alerting system",
      "Implemented auto-scaling and load balancing"
    ],
    duration: "Apr 2025 – Nov 2025",
    startDate: parseDate("Apr 2025")
  }
].sort((a, b) => b.startDate.getTime() - a.startDate.getTime());

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
      className={`fixed right-4 bottom-4 transition-all duration-300 z-50 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
    >
      <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-4 max-h-[70vh] overflow-y-auto w-64">
        <h3 className="font-bold text-gray-800 mb-3 sticky top-0 bg-white pb-2 border-b border-gray-100">
          Projects Navigation
        </h3>
        <ul className="space-y-1">
          {projects.map((project) => (
            <li key={project.id}>
              <button
                onClick={() => scrollToProject(project.id)}
                className={`flex items-center px-3 py-2 rounded-lg text-sm transition-colors w-full text-left ${
                  activeId === project.id
                    ? "bg-indigo-50 text-indigo-800 font-medium border border-indigo-200"
                    : "text-gray-600 hover:bg-gray-50"
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
  return (
    <div
      className="group relative bg-white rounded-lg shadow-md border border-gray-200 hover:bg-indigo-50 transition-all duration-300 p-6 lg:w-fit sm:w-full m-5 mx-2 cursor-pointer"
      onClick={onClick}
    >
      <h3 className="text-base font-semibold text-gray-800 group-hover:text-indigo-700 mb-1">{project.name}</h3>
      <div className="text-xs text-indigo-600 font-medium mb-1">{project.duration}</div>
      {project.role && (
        <div className="text-xs text-gray-600 bg-gray-100 rounded px-2 py-0.5 inline-block mb-2">
          Role: {project.role}
        </div>
      )}
      <div className="flex flex-wrap gap-1 mt-1">
        {project.technologies?.slice(0, 4).map((tech, idx) => (
          <span
            key={idx}
            className="bg-indigo-50 text-indigo-700 text-[11px] px-2 py-0.5 rounded-md group-hover:bg-indigo-100 transition-colors"
          >
            {tech}
          </span>
        ))}
        {project.technologies && project.technologies.length > 4 && (
          <span className="text-[11px] text-gray-500">+{project.technologies.length - 4} more</span>
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
    <section ref={projectRef} className="scroll-mt-24 mb-12">
      <div className="bg-white rounded-xl w-full shadow-md border border-gray-100 overflow-hidden">
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{project.name}</h2>
              <p className="text-indigo-600 font-medium">{project.duration}</p>
            </div>
            {project.role && (
              <span className="bg-indigo-100 text-indigo-800 text-sm px-4 py-2 rounded-full font-medium">
                {project.role}
              </span>
            )}
          </div>

          {project.description && (
            <div className="mt-6">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100">
                Project Overview
              </h3>
              <p className="text-gray-700 leading-relaxed">{project.description}</p>
            </div>
          )}

          {project.technologies && (
            <div className="mt-6">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-br from-indigo-50 to-indigo-100 text-indigo-800 text-sm px-3 py-1.5 rounded-lg shadow-sm border border-indigo-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100">
              Key Features & Contributions
            </h3>
            <ul className="space-y-3">
              {project.feature.map((feat, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 mt-1 mr-3">
                    <svg
                      className="w-5 h-5 text-indigo-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700 leading-relaxed">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ProjectsShowcase: React.FC = () => {
  const projectsLargeRef = useRef<HTMLDivElement>(null);

  const scrollToProjectsLarge = (projectId: number) => {
    if (projectsLargeRef.current) {
      projectsLargeRef.current.scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        const projectElement = document.querySelector(`[data-project-id="${projectId}"]`);
        if (projectElement) {
          projectElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 500);
    }
  };

  return (
    <div className="w-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-indigo-600">Project Portfolio</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-400 to-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A collection of my professional work showcasing full-stack development expertise with modern technologies
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <ProjectCard key={item.id} project={item} onClick={() => scrollToProjectsLarge(item.id)} />
          ))}
        </div>
      </div>
    </div>
  );
};

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
      { threshold: 0.5, rootMargin: "-100px 0px -100px 0px" }
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
    <div className="w-full py-10 bg-gray-50 relative">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Project <span className="text-indigo-600">Details</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-400 to-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Detailed view of my professional projects with technologies used and key contributions
          </p>
        </div>
        <div className="space-y-8">
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