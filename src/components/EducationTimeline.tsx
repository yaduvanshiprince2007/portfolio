import React from "react";
import EducationCard from "./EducationCard";
import { RESUME_DATA } from "../AppConstraint";

export interface EducationEntry {
  duration: string;
  degree: string;
  university: string;
  highlights: string[];
  gpa?: string;
  projects?: string[];
  technologies?: string[];
  extracurriculars?: string[];
}

const EducationTimeline: React.FC = () => {
  const educationData: EducationEntry[] = RESUME_DATA.education.map(edu => ({
    duration: `${edu.startDate} – ${edu.endDate}`,
    degree: edu.degree,
    university: edu.university,
    highlights: [edu.description],
    gpa: edu.gpa,
  }));

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto">
        <h2 className="text-4xl font-bold text-purple-800 mb-10 text-center">
          Education <span className="text-purple-600">Timeline</span>
        </h2>
        <div className="space-y-10">
          {educationData.map((edu, index) => (
            <EducationCard key={index} education={edu} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationTimeline;