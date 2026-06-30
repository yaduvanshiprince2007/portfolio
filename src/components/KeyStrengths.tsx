import React from "react";
import { Zap, Target, Lightbulb } from "lucide-react";

const KeyStrengths: React.FC = () => {
  const strengths = [
    {
      title: "Full Stack Development",
      description: "Frontend + Backend expertise",
      icon: Zap,
      items: ["React & Angular", "ASP.NET Core", "Node.js", "TypeScript"],
      colorClass: "from-purple-500 to-indigo-600 bg-purple-500",
      themeClass: "from-purple-50/50 to-indigo-50/10 border-purple-100/50 hover:border-purple-300"
    },
    {
      title: "Microservices & System Design",
      description: "Scalable architecture fundamentals",
      icon: Target,
      items: ["Microservices", "Event-Driven Systems", "CQRS Pattern", "API Gateway"],
      colorClass: "from-indigo-500 to-blue-600 bg-indigo-500",
      themeClass: "from-indigo-50/50 to-blue-50/10 border-indigo-100/50 hover:border-indigo-300"
    },
    {
      title: "Performance Optimization",
      description: "20-30% improvement in production",
      icon: Lightbulb,
      items: ["Query Optimization", "Caching Strategies", "Real-time Systems", "High Concurrency"],
      colorClass: "from-emerald-500 to-teal-600 bg-emerald-500",
      themeClass: "from-emerald-50/50 to-teal-50/10 border-emerald-100/50 hover:border-emerald-300"
    },
  ];

  return (
    <div className="bg-white/70 backdrop-blur-md rounded-3xl border border-purple-100/40 shadow-xl p-8 transition-all duration-300 hover:shadow-purple-500/10 glow-card-purple">
      <h2 className="text-3xl font-extrabold text-purple-950 mb-6 tracking-tight">Key Strengths</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {strengths.map((strength, index) => {
          const Icon = strength.icon;
          return (
            <div
              key={index}
              className={`p-6 rounded-2xl border transition-all duration-300 bg-gradient-to-br ${strength.themeClass} hover:shadow-lg transform hover:-translate-y-0.5`}
            >
              <div className="flex items-center mb-5">
                <div className={`p-2.5 rounded-xl mr-3.5 bg-gradient-to-br ${strength.colorClass} shadow-md`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 leading-tight text-base">{strength.title}</h3>
                  <p className="text-[10px] sm:text-xs font-bold text-slate-500 block mt-0.5">{strength.description}</p>
                </div>
              </div>

              <ul className="space-y-2">
                {strength.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-sm text-slate-700 font-medium">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2.5"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-purple-50/70 via-indigo-50/40 to-blue-50/50 rounded-2xl border border-purple-100">
        <h3 className="font-extrabold text-purple-950 mb-4 text-sm uppercase tracking-wider">Additional Expertise</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "Problem Solving",
            "Continuous Learning",
            "AI/ML Integration",
            "Cloud Architecture",
            "DevOps",
            "System Design",
            "Team Collaboration",
            "Mentoring",
          ].map((skill, idx) => (
            <span
              key={idx}
              className="inline-block px-4 py-2 bg-white text-purple-750 rounded-full text-xs font-bold border border-purple-100 shadow-sm hover:border-purple-400 hover:text-purple-900 transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyStrengths;
