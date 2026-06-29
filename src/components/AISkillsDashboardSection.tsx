import React from "react";
import { Brain, Zap, Code2, Database } from "lucide-react";

const AISkillsDashboardSection: React.FC = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4">
            AI & <span className="text-emerald-600">Emerging Technologies</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            I'm actively exploring and integrating AI-assisted features into real applications, focusing on practical implementations that deliver value
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-white rounded-xl border-2 border-emerald-100 shadow-lg hover:shadow-xl transition">
            <div className="flex items-start gap-4">
              <Brain className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">RAG & LLM Integration</h3>
                <p className="text-gray-700 mb-4">
                  Building practical implementations of <span className="font-semibold">Retrieval-Augmented Generation (RAG)</span> pipelines using <span className="font-semibold">LangChain</span> and <span className="font-semibold">OpenAI APIs</span>.
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Real-world Applications:</span>
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 ml-4">
                    <li>✓ AI-powered product search with context awareness</li>
                    <li>✓ Intelligent chatbots with conversation memory</li>
                    <li>✓ Content generation and summarization</li>
                    <li>✓ Semantic search over knowledge bases</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-xl border-2 border-emerald-100 shadow-lg hover:shadow-xl transition">
            <div className="flex items-start gap-4">
              <Zap className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Learning Project: AI Assistant</h3>
                <p className="text-gray-700 mb-4">
                  Developed an <span className="font-semibold">AI-Assisted E-Commerce Assistant</span> that demonstrates end-to-end RAG implementation with backend integration.
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Tech Stack:</span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">LangChain</span>
                    <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">OpenAI API</span>
                    <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">Vector DB</span>
                    <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">React</span>
                    <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">Node.js</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-xl border-2 border-emerald-100 shadow-lg hover:shadow-xl transition">
            <div className="flex items-start gap-4">
              <Code2 className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">System Design Expertise</h3>
                <p className="text-gray-700 mb-3">
                  Designing AI-integrated systems that scale efficiently while maintaining performance
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex gap-2"><span className="text-emerald-600">→</span> Microservices with AI service layer</li>
                  <li className="flex gap-2"><span className="text-emerald-600">→</span> Real-time prompt processing</li>
                  <li className="flex gap-2"><span className="text-emerald-600">→</span> Vector DB optimization</li>
                  <li className="flex gap-2"><span className="text-emerald-600">→</span> Caching LLM responses</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-xl border-2 border-emerald-100 shadow-lg hover:shadow-xl transition">
            <div className="flex items-start gap-4">
              <Database className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Scaling AI Solutions</h3>
                <p className="text-gray-700 mb-3">
                  Implementing production-ready AI systems with proper optimization and monitoring
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex gap-2"><span className="text-emerald-600">→</span> Distributed vector search</li>
                  <li className="flex gap-2"><span className="text-emerald-600">→</span> Batch processing for efficiency</li>
                  <li className="flex gap-2"><span className="text-emerald-600">→</span> Cost optimization strategies</li>
                  <li className="flex gap-2"><span className="text-emerald-600">→</span> Monitoring & observability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 p-8 bg-gradient-to-r from-emerald-50 to-emerald-50 rounded-xl border-2 border-emerald-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">My AI Learning Journey</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4 border border-emerald-100">
              <div className="text-3xl font-bold text-emerald-600 mb-2">📚</div>
              <h4 className="font-semibold text-gray-900 mb-2">Understanding Fundamentals</h4>
              <p className="text-sm text-gray-700">
                Deep dive into LLMs, embeddings, vector databases, and the RAG architecture concept
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-emerald-100">
              <div className="text-3xl font-bold text-emerald-600 mb-2">🛠️</div>
              <h4 className="font-semibold text-gray-900 mb-2">Hands-on Implementation</h4>
              <p className="text-sm text-gray-700">
                Building proof-of-concepts and learning projects to understand practical considerations
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-emerald-100">
              <div className="text-3xl font-bold text-emerald-600 mb-2">🚀</div>
              <h4 className="font-semibold text-gray-900 mb-2">Production Integration</h4>
              <p className="text-sm text-gray-700">
                Integrating AI features into real applications with proper monitoring and optimization
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-700 mb-3">
            <span className="font-semibold">Currently Pursuing:</span> OpenAI API & LangChain Certification (2025)
          </p>
          <p className="text-sm text-gray-600">
            Focused on understanding prompt engineering, fine-tuning, and building scalable AI applications
          </p>
        </div>
      </div>
    </div>
  );
};

export default AISkillsDashboardSection;