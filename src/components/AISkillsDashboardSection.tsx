import React from "react";
import { Brain, Zap, Code2, Database } from "lucide-react";

const AISkillsDashboardSection: React.FC = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50/20 via-white to-teal-50/40 border-t border-emerald-150/40">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-950 mb-4 tracking-tight">
            AI & <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-800 font-extrabold">Emerging Technologies</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-400 to-teal-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-650 max-w-2xl mx-auto leading-relaxed">
            Actively building Retrieval-Augmented Generation (RAG) pipelines and LLM APIs to power smart product search indexes and conversation tools.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          {/* Card 1: RAG & LLM Integration */}
          <div className="p-6 bg-white/70 backdrop-blur-md rounded-2xl border border-emerald-100/50 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-650">
                <Brain className="w-6 h-6 flex-shrink-0" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-900 mb-2">RAG & LLM Integration</h3>
                <p className="text-sm text-slate-650 leading-relaxed mb-4">
                  Constructing practical implementations of <span className="font-extrabold text-emerald-700">Retrieval-Augmented Generation (RAG)</span> systems using <span className="font-extrabold text-emerald-750">LangChain</span> orchestrations and <span className="font-extrabold text-emerald-750">OpenAI models</span>.
                </p>
                <div className="space-y-2">
                  <p className="text-xs font-extrabold uppercase text-emerald-800 tracking-wider">
                    Core Solutions:
                  </p>
                  <ul className="text-xs text-slate-600 space-y-1.5 ml-1">
                    <li className="flex items-center gap-2">✓ Context-aware semantic product queries.</li>
                    <li className="flex items-center gap-2">✓ Intelligent chatbots with conversational histories.</li>
                    <li className="flex items-center gap-2">✓ Auto-summarization of unstructured documentation.</li>
                    <li className="flex items-center gap-2">✓ Vector embeddings mapping for product datasets.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: E-Commerce Assistant Demo */}
          <div className="p-6 bg-white/70 backdrop-blur-md rounded-2xl border border-emerald-100/50 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-650">
                <Zap className="w-6 h-6 flex-shrink-0" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-900 mb-2">AI-Assisted E-Commerce Assistant</h3>
                <p className="text-sm text-slate-650 leading-relaxed mb-4">
                  Designed a proof-of-concept e-commerce search assistant proving end-to-end RAG architecture, vector search logic, and chat integrations.
                </p>
                <div className="space-y-2">
                  <p className="text-xs font-extrabold uppercase text-emerald-800 tracking-wider mb-2">
                    Technology Stack:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {["LangChain", "OpenAI API", "Vector DB", "React PWA", "Node.js Services"].map((tech, i) => (
                      <span key={i} className="text-[10px] font-bold px-2 py-0.5 bg-emerald-50 border border-emerald-100 text-emerald-700 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Design Expertise */}
          <div className="p-6 bg-white/70 backdrop-blur-md rounded-2xl border border-emerald-100/50 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-650">
                <Code2 className="w-6 h-6 flex-shrink-0" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-900 mb-2">System Design for AI</h3>
                <p className="text-sm text-slate-650 leading-relaxed mb-3">
                  Configuring prompt pipelines and service nodes that maintain low response latencies.
                </p>
                <ul className="text-xs text-slate-600 space-y-2 ml-1">
                  <li className="flex items-center gap-2">→ Separated microservice nodes for LLM integrations.</li>
                  <li className="flex items-center gap-2">→ In-memory cache structures (Redis) for recurrent queries.</li>
                  <li className="flex items-center gap-2">→ Vector data updates and delta indexes syncing.</li>
                  <li className="flex items-center gap-2">→ Streaming output structures mapping to UI sockets.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 4: Scaling AI */}
          <div className="p-6 bg-white/70 backdrop-blur-md rounded-2xl border border-emerald-100/50 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-650">
                <Database className="w-6 h-6 flex-shrink-0" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Optimizing AI Deployments</h3>
                <p className="text-sm text-slate-650 leading-relaxed mb-3">
                  Deploying production-ready vector lookups with optimal resource cost parameters.
                </p>
                <ul className="text-xs text-slate-600 space-y-2 ml-1">
                  <li className="flex items-center gap-2">→ Cost optimizations (restricting token limits, custom schemas).</li>
                  <li className="flex items-center gap-2">→ Multi-region replication metrics for embedding catalogs.</li>
                  <li className="flex items-center gap-2">→ Exception handlers for API failures and timeouts.</li>
                  <li className="flex items-center gap-2">→ Live logging indices tracking context anomalies.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Journey Box */}
        <div className="mt-8 p-8 bg-gradient-to-r from-emerald-50 to-teal-50/70 rounded-3xl border border-emerald-100">
          <h3 className="text-2xl font-extrabold text-emerald-950 mb-6">AI Integration Workflow</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/85 rounded-2xl p-5 border border-emerald-100 shadow-sm">
              <div className="text-3xl mb-3 select-none">📚</div>
              <h4 className="font-bold text-slate-900 mb-2">Fundamentals Mapping</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Understanding LLM token parameters, embedding arrays logic, and vector catalog indexing algorithms.
              </p>
            </div>
            <div className="bg-white/85 rounded-2xl p-5 border border-emerald-100 shadow-sm">
              <div className="text-3xl mb-3 select-none">🛠️</div>
              <h4 className="font-bold text-slate-900 mb-2">Prototyping Builds</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Writing test projects to evaluate vector query accuracy, document chunking sizes, and system lag metrics.
              </p>
            </div>
            <div className="bg-white/85 rounded-2xl p-5 border border-emerald-100 shadow-sm">
              <div className="text-3xl mb-3 select-none">🚀</div>
              <h4 className="font-bold text-slate-900 mb-2">Production Rollouts</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Deploying background AI services inside containers, establishing API keys rotation, and tracking live telemetry logs.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center bg-white/40 p-5 rounded-2xl border border-emerald-100/40">
          <p className="text-slate-800 mb-2 font-bold text-sm">
            🚀 Active Learning Path: Prompt Engineering & Large-scale LLM Integrations
          </p>
          <p className="text-xs text-slate-500 leading-relaxed font-semibold">
            Continuously experimenting with latest architectures (Copilot, Cursor, Mistral AI, DeepSeek) to automate developer workflows.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AISkillsDashboardSection;