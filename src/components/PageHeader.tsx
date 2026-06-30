import { RESUME_DATA, URLS } from "../AppConstraint";
import GrowthStack from "./GrowthStack";
import profileimg from "../assets/profileImg.jpeg";
import { Github, Linkedin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PageHeader = () => {
  const personal = RESUME_DATA.personal;

  return (
    <header className="relative text-slate-800 py-24 md:py-32 bg-gradient-to-b from-slate-50 via-white to-indigo-50/30 overflow-hidden border-b border-slate-200/60">

      {/* Decorative backdrop with subtle light gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-12 left-1/10 w-96 h-96 bg-indigo-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse-slow" />
        <div className="absolute -top-12 right-1/10 w-96 h-96 bg-cyan-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse-slow duration-3000" />
        <div className="absolute bottom-10 left-1/3 w-[500px] h-[500px] bg-purple-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow duration-5000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/10 rounded-full filter blur-3xl" />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-20">

          {/* Left Column - Details */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Experience Badge - Light theme */}
            <div className="mb-6 inline-flex items-center gap-2.5 px-4.5 py-2.5 bg-white/80 border border-indigo-200/60 text-indigo-700 rounded-full text-xs sm:text-sm font-bold shadow-sm backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              5 Years of Full-Stack Expertise
            </div>

            {/* Main Title with Gradient */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 tracking-tight leading-none text-slate-800">
              Hi, I'm{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 font-extrabold">
                {personal.name}
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-700 mb-6">
              {personal.title}
            </h2>

            {/* Subtitle / Summary */}
            <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-2xl leading-relaxed font-medium">
              {personal.subtitle}. Specialized in building secure, high-concurrency cloud-native solutions with .NET Core, React, and Azure.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap gap-4 items-center">
              <Link
                to="/resume"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 hover:from-indigo-500 hover:to-purple-600 text-white font-extrabold rounded-full transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:scale-95 text-sm"
              >
                <span>View Digital Resume</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Secondary Contacts - Light theme */}
              <div className="flex gap-2.5">
                <a
                  href={URLS.GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/80 hover:bg-white border border-slate-200 text-slate-600 hover:text-indigo-600 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-95"
                  title="GitHub Profile"
                >
                  <Github className="w-4.5 h-4.5" />
                </a>
                <a
                  href={URLS.LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/80 hover:bg-white border border-slate-200 text-slate-600 hover:text-indigo-600 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-95"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Floating Image Card - Light theme */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group animate-float">
              {/* Glowing gradient border */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />

              {/* Main Image Box */}
              <div className="relative bg-white/90 backdrop-blur-md p-4 rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden max-w-sm sm:max-w-xs md:max-w-sm">
                <img
                  src={profileimg}
                  alt={personal.name}
                  className="rounded-2xl w-full h-auto aspect-square object-cover object-center group-hover:scale-102 transition-all duration-550"
                />

                {/* Profile Card details - Light theme */}
                <div className="mt-3.5 flex justify-between items-center px-1">
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">{personal.name}</span>
                    <span className="text-[10px] font-semibold text-slate-500 block">Based in India</span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50/80 px-2.5 py-0.5 rounded-lg border border-emerald-200/50 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Available for Work
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Career Timeline stack - Light theme */}
        <div className="w-full mt-10 pt-10 border-t border-slate-200/60">
          <h3 className="text-xl sm:text-2xl font-extrabold uppercase text-slate-500 tracking-wider mb-8 text-center">
            My Professional Career Milestones
          </h3>
          <GrowthStack />
        </div>
      </div>
    </header>
  );
};

export default PageHeader;