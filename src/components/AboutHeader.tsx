import React from "react";
import { RESUME_DATA } from "../AppConstraint";

const AboutHeader: React.FC = () => {
  const personal = RESUME_DATA.personal;

  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
        {personal.name}
      </h1>
      <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto mb-6 rounded-full" />
      <p className="text-2xl text-purple-600 font-semibold mb-2">
        {personal.title}
      </p>
      <p className="text-lg text-gray-700 mb-4">
        {personal.location}
      </p>
      <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mb-6">
        <span className="flex items-center">
          <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
          5+ Years of Experience
        </span>
        <span className="flex items-center">
          <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
          10K+ Concurrent Users
        </span>
        <span className="flex items-center">
          <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
          20-30% Performance Improvement
        </span>
      </div>
      <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
        {personal.summary}
      </p>
    </div>
  );
};

export default AboutHeader;