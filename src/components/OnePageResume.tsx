import React from "react";
import { RESUME_DATA, URLS } from "../AppConstraint";
import { Mail, Phone, MapPin, Github, Linkedin, Award, BookOpen, Briefcase, Code } from "lucide-react";

const OnePageResume: React.FC = () => {
  const personal = RESUME_DATA.personal;
  const experiences = RESUME_DATA.experience;
  const education = RESUME_DATA.education;
  const certifications = RESUME_DATA.certifications;
  const skills = RESUME_DATA.detailedSkills;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-zinc-50 to-indigo-50/50 text-slate-800 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden print:bg-white print:text-black print:py-0 print:px-0">
      
      {/* Decorative Soft Neon Blurs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-purple-300/10 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse pointer-events-none print:hidden" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-cyan-300/10 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse duration-3000 pointer-events-none print:hidden" />

      {/* Main Container */}
      <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-xl border border-indigo-100/60 shadow-xl rounded-3xl p-6 sm:p-10 relative z-10 print:bg-transparent print:border-none print:shadow-none print:p-0 print:backdrop-blur-none">
        

        {/* Header Section */}
        <div className="border-b border-indigo-100/80 pb-8 mb-8 print:border-gray-250 print:pb-4 print:mb-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-900 print:text-black print:bg-none print:font-extrabold print:text-3xl">
                {personal.name}
              </h1>
              <p className="text-lg md:text-xl font-bold text-indigo-700 mt-2 print:text-gray-800 print:text-lg">
                {personal.title}
              </p>
              <p className="text-sm text-slate-500 mt-1 max-w-xl font-semibold print:text-gray-600 print:text-xs leading-relaxed">
                {personal.subtitle}
              </p>
            </div>
            
            {/* Contacts Info Grid */}
            <div className="flex flex-wrap gap-2.5 max-w-md print:gap-1.5 print:max-w-none print:text-xs">
              <span className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200/50 rounded-xl text-xs text-slate-600 print:bg-transparent print:border-none print:p-0 print:text-gray-800">
                <Mail className="w-3.5 h-3.5 text-indigo-600 print:text-gray-700" />
                <a href={`mailto:${personal.email}`} className="hover:text-indigo-700 transition-colors">{personal.email}</a>
              </span>
              <span className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200/50 rounded-xl text-xs text-slate-600 print:bg-transparent print:border-none print:p-0 print:text-gray-800">
                <Phone className="w-3.5 h-3.5 text-indigo-600 print:text-gray-700" />
                <a href={`tel:${personal.phone}`} className="hover:text-indigo-700 transition-colors">{personal.phone}</a>
              </span>
              <span className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200/50 rounded-xl text-xs text-slate-600 print:bg-transparent print:border-none print:p-0 print:text-gray-800">
                <MapPin className="w-3.5 h-3.5 text-indigo-600 print:text-gray-700" />
                <span>{personal.location}</span>
              </span>
              <span className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200/50 rounded-xl text-xs text-slate-600 print:hidden">
                <Linkedin className="w-3.5 h-3.5 text-indigo-600" />
                <a href={URLS.LINKEDIN} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-750 transition-colors">LinkedIn</a>
              </span>
              <span className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200/50 rounded-xl text-xs text-slate-600 print:hidden">
                <Github className="w-3.5 h-3.5 text-indigo-600" />
                <a href={URLS.GITHUB} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-750 transition-colors">GitHub</a>
              </span>
            </div>
          </div>
        </div>

        {/* Profile Summary Card */}
        <div className="bg-indigo-50/20 border border-indigo-100/50 p-5 rounded-2xl mb-8 print:bg-transparent print:border-none print:p-0 print:mb-4">
          <p className="text-slate-705 text-sm leading-relaxed print:text-gray-800 print:text-xs">
            {personal.summary}
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 print:grid-cols-12 print:gap-4">
          
          {/* LEFT COLUMN: Experience Timeline (7/12 cols) */}
          <div className="lg:col-span-7 print:col-span-7 space-y-6 print:space-y-3">
            <div className="flex items-center gap-2.5 mb-2 border-b border-indigo-100/80 pb-2 print:border-gray-200">
              <Briefcase className="w-5 h-5 text-indigo-600 print:text-gray-800" />
              <h2 className="text-xl font-bold text-indigo-950 uppercase tracking-wider text-sm print:text-gray-900 print:font-extrabold">
                Work Experience
              </h2>
            </div>

            <div className="relative border-l border-slate-205 pl-4 space-y-5 print:border-gray-200 print:pl-3 print:space-y-2">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative group print:break-inside-avoid">
                  {/* Bullet */}
                  <div className="absolute -left-[21px] top-1.5 w-3 h-3 bg-white border-2 border-indigo-600 rounded-full group-hover:bg-indigo-600 transition-colors print:border-gray-800 print:bg-white" />
                  
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <div>
                      <h3 className="font-extrabold text-sm text-indigo-950 leading-tight print:text-gray-900">
                        {exp.position}
                      </h3>
                      <p className="text-xs font-bold text-slate-500 mt-0.5 print:text-gray-700">
                        {exp.company} {exp.clients && exp.clients.length > 0 && `(Client: ${exp.clients.join(", ")})`}
                      </p>
                    </div>
                    <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 border border-indigo-100/50 px-2.5 py-0.5 rounded-lg self-start print:text-gray-750 print:bg-transparent print:border-none print:p-0">
                      {exp.startDate} – {exp.endDate}
                    </span>
                  </div>

                  {/* Bullet Points */}
                  <ul className="list-disc list-inside text-xs text-slate-650 mt-2 space-y-1 pl-1 print:text-gray-800 print:space-y-0.5">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="leading-relaxed">
                        <span className="text-slate-650 print:text-gray-800">{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack items */}
                  <div className="flex flex-wrap gap-1 mt-2.5 print:hidden">
                    {exp.techStack.map((tech, i) => (
                      <span key={i} className="text-[9px] font-bold px-1.5 py-0.5 bg-slate-100 border border-slate-200/50 text-slate-500 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Skills, Certifications, Education (5/12 cols) */}
          <div className="lg:col-span-5 print:col-span-5 space-y-6 print:space-y-4">
            
            {/* Skills Segment */}
            <div>
              <div className="flex items-center gap-2.5 mb-3 border-b border-indigo-100/80 pb-2 print:border-gray-200">
                <Code className="w-5 h-5 text-indigo-600 print:text-gray-800" />
                <h2 className="text-xl font-bold text-indigo-950 uppercase tracking-wider text-sm print:text-gray-900 print:font-extrabold">
                  Technical Expertise
                </h2>
              </div>
              <div className="space-y-3.5 print:space-y-1.5">
                {skills.map((cat, idx) => (
                  <div key={idx} className="print:break-inside-avoid">
                    <h4 className="text-[11px] font-extrabold uppercase text-slate-450 tracking-wider mb-1.5 print:text-gray-850">
                      {cat.category}
                    </h4>
                    <div className="flex flex-wrap gap-1.5 print:gap-1">
                      {cat.items.map((skill, i) => (
                        <span
                          key={i}
                          className={`text-[10px] font-semibold px-2.5 py-1 rounded-xl border print:text-black print:bg-transparent print:border-none print:p-0
                            ${skill.level === "Advanced" 
                              ? "bg-indigo-50 border-indigo-200/70 text-indigo-700" 
                              : "bg-slate-50 border-slate-200/40 text-slate-600"}`}
                        >
                          {skill.name}{skill.level === "Advanced" && <span className="text-[8px] ml-1 opacity-70 print:hidden">★</span>}
                          <span className="hidden print:inline-block print:ml-1 print:text-[8px] print:text-gray-500">({skill.level})</span>
                          {i < cat.items.length - 1 && <span className="hidden print:inline-block print:ml-1 text-gray-400">,</span>}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Segment */}
            <div>
              <div className="flex items-center gap-2.5 mb-3 border-b border-indigo-100/80 pb-2 print:border-gray-200">
                <Award className="w-5 h-5 text-indigo-600 print:text-gray-800" />
                <h2 className="text-xl font-bold text-indigo-950 uppercase tracking-wider text-sm print:text-gray-900 print:font-extrabold">
                  Certifications
                </h2>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-650 print:text-gray-800 print:space-y-0.5">
                {certifications.slice(0, 6).map((cert, index) => {
                  const parts = cert.split(" – ");
                  return (
                    <li key={index} className="flex items-start gap-1.5">
                      <span className="text-indigo-600 select-none print:text-gray-800">•</span>
                      <span>
                        <strong className="text-slate-800 print:text-gray-950">{parts[0]}</strong>
                        {parts[1] && <span className="text-slate-400 text-[10px] print:text-gray-600"> – {parts[1]}</span>}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Education Segment */}
            <div>
              <div className="flex items-center gap-2.5 mb-3 border-b border-indigo-100/80 pb-2 print:border-gray-200">
                <BookOpen className="w-5 h-5 text-indigo-600 print:text-gray-800" />
                <h2 className="text-xl font-bold text-indigo-950 uppercase tracking-wider text-sm print:text-gray-900 print:font-extrabold">
                  Education
                </h2>
              </div>
              <div className="space-y-3.5 print:space-y-2">
                {education.slice(0, 2).map((edu) => (
                  <div key={edu.id} className="text-xs print:break-inside-avoid">
                    <div className="flex justify-between font-bold text-slate-800 print:text-gray-950">
                      <span>{edu.degree}</span>
                      <span className="text-indigo-650 print:text-gray-700 font-semibold">{edu.startDate} – {edu.endDate}</span>
                    </div>
                    <div className="text-[11px] text-slate-500 font-semibold mt-0.5 print:text-gray-600">
                      {edu.university}
                    </div>
                    {edu.gpa && (
                      <span className="text-[9px] font-bold bg-indigo-50/50 border border-indigo-100 text-indigo-700 px-1.5 py-0.5 rounded mt-1.5 inline-block print:text-gray-800 print:bg-transparent print:border-none print:p-0">
                        {edu.gpa}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Languages Segment */}
            <div>
              <h4 className="text-[11px] font-extrabold uppercase text-slate-400 tracking-wider mb-1.5 print:text-gray-850">
                Languages
              </h4>
              <p className="text-xs text-slate-600 font-semibold print:text-gray-800">
                English, Hindi
              </p>
            </div>
            
          </div>
        </div>
      </div>
      
      {/* Dynamic styles for printing */}
      <style>{`
        @media print {
          body {
            background-color: white !important;
            color: black !important;
          }
          a {
            text-decoration: none !important;
            color: black !important;
          }
        }
      `}</style>
    </div>
  );
};

export default OnePageResume;
