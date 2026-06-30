import React from "react";
import { Code2, Zap, Users, Lightbulb } from "lucide-react";

const ProfessionalSummary: React.FC = () => (
  <div className="bg-white/70 backdrop-blur-md rounded-3xl border border-purple-100/40 shadow-xl p-8 transition-all duration-300 hover:shadow-purple-500/10 glow-card-purple">
    <h2 className="text-3xl font-extrabold text-purple-950 mb-6 tracking-tight">About Me</h2>
    
    <div className="space-y-8">
      {/* Main summary */}
      <div>
        <p className="text-slate-800 mb-4 leading-relaxed text-lg font-medium">
          I'm a <span className="font-extrabold text-purple-700">Senior Full Stack Developer</span> with <span className="font-extrabold text-purple-750">5 years of experience</span> building <span className="font-extrabold">secure, scalable, and cloud-native applications</span> that power businesses across healthcare, fintech, and SaaS environments. 
          My primary focus lies in <span className="font-extrabold text-purple-700">backend architecture and system design</span>, backed by strong expertise in modern client-side environments.
        </p>
        <p className="text-slate-700 leading-relaxed text-base md:text-lg">
          I design distributed architectures capable of serving <span className="font-semibold text-purple-800">~10K concurrent users</span>. I have a proven track record of boosting API throughput and reducing latency by <span className="font-bold text-purple-800">30%+</span> through caching strategies, query optimizations, and asynchronous request pipelines.
        </p>
      </div>

      {/* Key highlights grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="p-5 bg-purple-50/50 rounded-2xl border border-purple-100/40 flex gap-4 hover:border-purple-300 transition-all duration-300">
          <div className="p-3 bg-purple-100/60 rounded-xl flex-shrink-0 self-start">
            <Code2 className="w-6 h-6 text-purple-650" />
          </div>
          <div>
            <h4 className="font-bold text-purple-950 mb-1.5 text-base">Microservices Architecture</h4>
            <p className="text-sm text-slate-650 leading-relaxed">
              Designing modular microservices with API gateway patterns and async messaging models using Kafka and AWS SQS.
            </p>
          </div>
        </div>
        
        <div className="p-5 bg-indigo-50/50 rounded-2xl border border-indigo-100/40 flex gap-4 hover:border-indigo-300 transition-all duration-300">
          <div className="p-3 bg-indigo-100/60 rounded-xl flex-shrink-0 self-start">
            <Zap className="w-6 h-6 text-indigo-650" />
          </div>
          <div>
            <h4 className="font-bold text-indigo-950 mb-1.5 text-base">Performance Optimization</h4>
            <p className="text-sm text-slate-650 leading-relaxed">
              Optimizing SQL/NoSQL queries, indexing structures, and configuring multi-layer Redis caching to improve database reliability.
            </p>
          </div>
        </div>

        <div className="p-5 bg-emerald-50/50 rounded-2xl border border-emerald-100/40 flex gap-4 hover:border-emerald-300 transition-all duration-300">
          <div className="p-3 bg-emerald-100/60 rounded-xl flex-shrink-0 self-start">
            <Users className="w-6 h-6 text-emerald-650" />
          </div>
          <div>
            <h4 className="font-bold text-emerald-950 mb-1.5 text-base">Technical Leadership</h4>
            <p className="text-sm text-slate-650 leading-relaxed">
              Acting as team lead proxy, conducting detail-oriented code reviews, and coordinating requirements analysis with stakeholders.
            </p>
          </div>
        </div>

        <div className="p-5 bg-amber-50/50 rounded-2xl border border-amber-100/40 flex gap-4 hover:border-amber-300 transition-all duration-300">
          <div className="p-3 bg-amber-100/60 rounded-xl flex-shrink-0 self-start">
            <Lightbulb className="w-6 h-6 text-amber-650" />
          </div>
          <div>
            <h4 className="font-bold text-amber-950 mb-1.5 text-base">AI-Assisted Delivery</h4>
            <p className="text-sm text-slate-650 leading-relaxed">
              Accelerating development and maintaining top-tier code quality via rapid AI prototyping tools (Copilot, ChatGPT).
            </p>
          </div>
        </div>
      </div>

      {/* My approach section */}
      <div className="mt-8 p-6 bg-gradient-to-br from-purple-50 via-white to-indigo-50/50 rounded-2xl border border-purple-100">
        <h3 className="font-extrabold text-purple-950 mb-5 text-lg">My Development Philosophy</h3>
        <div className="space-y-4">
          {[
            { num: 1, title: "Understand Business Needs", desc: "Thoroughly mapping out product requirements and identifying performance constraints early to design robust architecture." },
            { num: 2, title: "Design for Scalability", desc: "Choosing proper messaging protocols, API gateways, and distributed cache models to allow services to grow independently." },
            { num: 3, title: "Observe and Refine", desc: "Setting up telemetry, profiling latency bottlenecks in production, and applying indexing updates to maintain system speed." },
            { num: 4, title: "Maintain Code Excellence", desc: "Sticking to SOLID design patterns, implementing automated testing pipelines, and producing complete technical documentations." }
          ].map((philosophy) => (
            <div key={philosophy.num} className="flex gap-4">
              <span className="flex items-center justify-center w-7 h-7 bg-purple-100 border border-purple-200 text-purple-700 font-extrabold rounded-full text-xs flex-shrink-0">
                {philosophy.num}
              </span>
              <div>
                <span className="font-extrabold text-purple-950 text-sm">{philosophy.title}</span>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">{philosophy.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key metrics */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="text-center p-4 bg-purple-50/50 border border-purple-100/50 rounded-2xl hover:border-purple-300 transition-all">
          <div className="text-2xl sm:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-650">5 Years</div>
          <p className="text-[10px] sm:text-xs font-bold text-slate-500 mt-1">Full-Stack Experience</p>
        </div>
        <div className="text-center p-4 bg-indigo-50/50 border border-indigo-100/50 rounded-2xl hover:border-indigo-300 transition-all">
          <div className="text-2xl sm:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-650">10K+</div>
          <p className="text-[10px] sm:text-xs font-bold text-slate-500 mt-1">Concurrent Users</p>
        </div>
        <div className="text-center p-4 bg-emerald-50/50 border border-emerald-100/50 rounded-2xl hover:border-emerald-300 transition-all">
          <div className="text-2xl sm:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-650">30%+</div>
          <p className="text-[10px] sm:text-xs font-bold text-slate-500 mt-1">API Throughput Improvement</p>
        </div>
      </div>

      {/* AI focus */}
      <div className="p-4 bg-amber-50/60 border border-amber-200/50 rounded-2xl flex items-center gap-3">
        <span className="text-2xl select-none">🤖</span>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          <strong className="text-amber-800 font-extrabold">Active AI Integration:</strong> Developing Retrieval-Augmented Generation (RAG) pipelines and LLM integrations using LangChain and OpenAI APIs to power search indices and chatbots.
        </p>
      </div>

      {/* Tech stack overview */}
      <div className="mt-8 pt-6 border-t border-slate-100">
        <h3 className="font-extrabold text-purple-950 mb-4 text-base">Core Tech Stack Overview</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { category: "Backend Frameworks", techs: "C#, ASP.NET Core, Web API, Node.js" },
            { category: "Frontend Frameworks", techs: "React, Angular, Next.js, Redux" },
            { category: "Databases & Cache", techs: "SQL Server, PostgreSQL, MongoDB, Redis" },
            { category: "Cloud & DevOps", techs: "Azure, AWS Services, Docker, CI/CD" },
          ].map((item, idx) => (
            <div key={idx} className="p-3 bg-slate-50 border border-slate-200/40 rounded-xl hover:border-purple-200 transition-all">
              <p className="font-bold text-purple-800 text-xs">{item.category}</p>
              <p className="text-[10px] sm:text-xs text-slate-550 mt-1 font-medium">{item.techs}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ProfessionalSummary;