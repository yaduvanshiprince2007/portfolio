import React from "react";
import type { EducationEntry } from "./EducationTimeline";

interface EducationCardProps {
  education: EducationEntry;
}

const EducationCard: React.FC<EducationCardProps> = ({ education }) => (
  <div className="relative border-l-2 border-purple-100 pl-6 md:pl-8 pb-8 last:pb-2 group">
    {/* Marker */}
    <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-white border-4 border-purple-600 rounded-full shadow-sm z-10 group-hover:border-indigo-650 group-hover:scale-110 transition-all"></div>
    
    <div className="bg-white border border-purple-100/60 rounded-2xl p-5 hover:shadow-md hover:border-purple-300 transition-all duration-300">
      <span className="text-xs font-bold text-purple-750 bg-purple-50 border border-purple-100 px-3 py-1 rounded-xl shadow-sm">
        {education.duration}
      </span>
      <h3 className="text-lg md:text-xl font-extrabold text-purple-950 mt-3">{education.degree}</h3>
      <p className="text-sm font-semibold text-purple-800 mt-1">{education.university}</p>
      {education.gpa && (
        <p className="text-xs font-bold text-purple-700 mt-1.5 bg-purple-50/50 inline-block px-2.5 py-1 rounded-lg border border-purple-100/30">
          {education.gpa}
        </p>
      )}
      
      <ul className="list-disc list-inside text-gray-700 text-sm space-y-1.5 mt-4 border-t border-purple-50 pt-3">
        {education.highlights.map((point, i) => (
          <li key={i} className="leading-relaxed">{point}</li>
        ))}
      </ul>
      
      {education.projects && (
        <div className="mt-4 border-t border-purple-50 pt-3">
          <h4 className="text-xs font-extrabold text-purple-800 uppercase tracking-wider mb-2">Key Projects:</h4>
          <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
            {education.projects.map((proj, i) => (
              <li key={i}>{proj}</li>
            ))}
          </ul>
        </div>
      )}
      
      {education.technologies && (
        <div className="mt-3">
          <span className="text-xs font-bold text-gray-700">Technologies:</span>
          <div className="flex flex-wrap gap-1 mt-1.5">
            {education.technologies.map((tech, i) => (
              <span key={i} className="text-[10px] font-bold px-2 py-0.5 bg-gray-50 border border-gray-200 text-gray-650 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
);

export default EducationCard;