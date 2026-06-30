import React from "react";
import { RESUME_DATA } from "../AppConstraint";

const AboutHeader: React.FC = () => {
  const personal = RESUME_DATA.personal;

  return (
    <div className="text-center mb-12 bg-white/40 backdrop-blur-md rounded-3xl p-8 border border-purple-100/50 shadow-sm">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-950 mb-3 tracking-tight">
        {personal.name}
      </h1>
      <div className="w-20 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-6 rounded-full" />
      <p className="text-2xl text-purple-700 font-bold mb-3">
        {personal.title}
      </p>
      <p className="text-sm font-semibold text-purple-600/80 mb-6 flex items-center justify-center gap-1.5">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        {personal.location}
      </p>
      <div className="flex flex-wrap justify-center gap-3 text-xs font-bold text-purple-700 mb-8">
        <span className="flex items-center bg-purple-50 border border-purple-100 px-3.5 py-2 rounded-xl shadow-sm">
          <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
          4+ Years of Experience
        </span>
        <span className="flex items-center bg-purple-50 border border-purple-100 px-3.5 py-2 rounded-xl shadow-sm">
          <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
          10K+ Concurrent Users
        </span>
        <span className="flex items-center bg-purple-50 border border-purple-100 px-3.5 py-2 rounded-xl shadow-sm">
          <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
          30%+ Performance Improvement
        </span>
      </div>
      <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed text-base md:text-lg">
        {personal.summary}
      </p>
    </div>
  );
};

export default AboutHeader;