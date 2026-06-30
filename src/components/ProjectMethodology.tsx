import React from "react";
import { GitBranch, Layers, Zap, Database } from "lucide-react";

const ProjectMethodology: React.FC = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50/30 via-white to-purple-50/50 border-t border-purple-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-950 mb-4 tracking-tight">
            How I Build <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-900 font-extrabold">Projects & Systems</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-400 to-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive look at my professional engineering lifecycle, architectural patterns, and execution strategies for high-performance software.
          </p>
        </div>

        {/* Architecture Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Planning & Design Phase */}
          <div className="p-6 bg-white/70 backdrop-blur-md rounded-2xl border border-indigo-100/50 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl text-blue-600">
                <Layers className="w-6 h-6 flex-shrink-0" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Phase 1: Planning & Architecture</h3>
                <div className="space-y-2.5 text-sm text-slate-650">
                  <p><span className="font-bold text-indigo-950">Requirements Analysis:</span> Designing metrics to scope performance, concurrent users, and business workflows.</p>
                  <p><span className="font-bold text-indigo-950">System Design:</span> Modelling microservices domains, mapping database schemas, and planning async communication layers.</p>
                  <p><span className="font-bold text-indigo-950">Tech Stack Choice:</span> Deploying matching database layers based on caching requirements and replication factors.</p>
                  <p><span className="font-bold text-indigo-950">Architectural Patterns:</span> Incorporating clean architectures, Saga orchestrations, API gateways, and CQRS patterns.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Development & Implementation */}
          <div className="p-6 bg-white/70 backdrop-blur-md rounded-2xl border border-purple-100/50 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-50 border border-purple-100 rounded-xl text-purple-650">
                <GitBranch className="w-6 h-6 flex-shrink-0" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Phase 2: Code & Implementation</h3>
                <div className="space-y-2.5 text-sm text-slate-650">
                  <p><span className="font-bold text-indigo-950">Modular Coding:</span> Writing loosely coupled, single-responsibility services that deploy independently via containers.</p>
                  <p><span className="font-bold text-indigo-950">Code Standards:</span> Adhering strictly to SOLID principles, design patterns, and code review criteria.</p>
                  <p><span className="font-bold text-indigo-950">Testing:</span> Implementing test-driven code (TDD) for critical pipelines and performing automated regressions.</p>
                  <p><span className="font-bold text-indigo-950">CI/CD:</span> Automating integration and deployment steps via GitHub Actions or Azure DevOps release pipelines.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Performance & Optimization */}
          <div className="p-6 bg-white/70 backdrop-blur-md rounded-2xl border border-emerald-100/50 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-650">
                <Zap className="w-6 h-6 flex-shrink-0" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Phase 3: Caching & Resilience</h3>
                <div className="space-y-2.5 text-sm text-slate-650">
                  <p><span className="font-bold text-indigo-950">Query Optimization:</span> Refactoring slow SQL queries, analyzing indexing configurations, and pooling connections.</p>
                  <p><span className="font-bold text-indigo-950">Caching Systems:</span> Setting up Redis servers to cache session data and queries, enhancing response speed by 30%.</p>
                  <p><span className="font-bold text-indigo-950">Asynchronous Tasks:</span> Offloading non-blocking write workloads to background workers using Kafka or AWS SQS.</p>
                  <p><span className="font-bold text-indigo-950">Stress Testing:</span> Performing load testing to identify scaling vulnerabilities under simulated traffic spikes.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Monitoring & Maintenance */}
          <div className="p-6 bg-white/70 backdrop-blur-md rounded-2xl border border-amber-100/50 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-50 border border-amber-100 rounded-xl text-amber-650">
                <Database className="w-6 h-6 flex-shrink-0" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Phase 4: Monitoring & Observability</h3>
                <div className="space-y-2.5 text-sm text-slate-650">
                  <p><span className="font-bold text-indigo-950">Telemetry:</span> Embedding App Insights or Prometheus alerts to monitor live system anomalies.</p>
                  <p><span className="font-bold text-indigo-950">Metrics Collection:</span> Tracking transaction latencies, database locks, and overall CPU utilization.</p>
                  <p><span className="font-bold text-indigo-950">Hotfix Management:</span> Responding to production incidents and delivering zero-downtime rolling upgrades.</p>
                  <p><span className="font-bold text-indigo-950">Iterative Updates:</span> Refactoring legacy architectures based on live performance data.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Integration Deep Dive */}
        <div className="mb-12 p-8 bg-white/60 backdrop-blur-md rounded-3xl border border-purple-100/50 shadow-sm">
          <h3 className="text-2xl font-extrabold text-indigo-950 mb-6">Technical Architecture & Stack Layouts</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Backend Architecture */}
            <div className="p-5 bg-purple-50/30 rounded-2xl border border-purple-100/40">
              <h4 className="text-md font-bold text-purple-800 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                Backend Infrastructure
              </h4>
              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="p-3.5 bg-white/80 border border-purple-100/40 rounded-xl">
                  <p className="font-bold text-purple-950">ASP.NET Core Services</p>
                  <p className="text-xs text-slate-500 mt-1">EF Core integrations, dependency injection scopes, async pipelines, and custom Middlewares.</p>
                </div>
                <div className="p-3.5 bg-white/80 border border-purple-100/40 rounded-xl">
                  <p className="font-bold text-purple-950">Node.js Microservices</p>
                  <p className="text-xs text-slate-500 mt-1">Express API architectures, non-blocking single-threaded request handlers for real-time operations.</p>
                </div>
                <div className="p-3.5 bg-white/80 border border-purple-100/40 rounded-xl">
                  <p className="font-bold text-purple-950">Event Streaming & Queues</p>
                  <p className="text-xs text-slate-500 mt-1">Kafka and AWS SQS message broadcasting for reliable service-to-service messaging.</p>
                </div>
              </div>
            </div>

            {/* Data & Caching Layer */}
            <div className="p-5 bg-blue-50/30 rounded-2xl border border-blue-100/40">
              <h4 className="text-md font-bold text-blue-800 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Storage & Cache Architecture
              </h4>
              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="p-3.5 bg-white/80 border border-blue-100/40 rounded-xl">
                  <p className="font-bold text-blue-950">Relational Databases</p>
                  <p className="text-xs text-slate-500 mt-1">SQL Server and PostgreSQL configured with table partitioning, connection pools, and index tuning.</p>
                </div>
                <div className="p-3.5 bg-white/80 border border-blue-100/40 rounded-xl">
                  <p className="font-bold text-blue-950">Redis Cache Tier</p>
                  <p className="text-xs text-slate-500 mt-1">Distributed memory database cache layers reducing read queries latency by 30%.</p>
                </div>
                <div className="p-3.5 bg-white/80 border border-blue-100/40 rounded-xl">
                  <p className="font-bold text-blue-950">NoSQL & Vector Storage</p>
                  <p className="text-xs text-slate-500 mt-1">MongoDB and Cosmos DB for dynamic schemas; vector databases for AI embeddings indexes.</p>
                </div>
              </div>
            </div>

            {/* Frontend & Real-time */}
            <div className="p-5 bg-emerald-50/30 rounded-2xl border border-emerald-100/40">
              <h4 className="text-md font-bold text-emerald-800 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                Client Experience & WebSockets
              </h4>
              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="p-3.5 bg-white/80 border border-emerald-100/40 rounded-xl">
                  <p className="font-bold text-emerald-950">React & Redux Modules</p>
                  <p className="text-xs text-slate-500 mt-1">Component hierarchies, global Redux Toolkit store configurations, and PWA offline sync.</p>
                </div>
                <div className="p-3.5 bg-white/80 border border-emerald-100/40 rounded-xl">
                  <p className="font-bold text-emerald-950">Angular Architectures</p>
                  <p className="text-xs text-slate-500 mt-1">RxJS streams, reactive forms, modules lazily loaded, and DI service definitions.</p>
                </div>
                <div className="p-3.5 bg-white/80 border border-emerald-100/40 rounded-xl">
                  <p className="font-bold text-emerald-950">Real-Time WebSocket layers</p>
                  <p className="text-xs text-slate-500 mt-1">SignalR hubs and socket rooms for streaming updates and messaging feeds.</p>
                </div>
              </div>
            </div>

            {/* Security & DevOps */}
            <div className="p-5 bg-amber-50/30 rounded-2xl border border-amber-100/40">
              <h4 className="text-md font-bold text-amber-800 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                Security, Infrastructure & CI/CD
              </h4>
              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="p-3.5 bg-white/80 border border-amber-100/40 rounded-xl">
                  <p className="font-bold text-amber-950">Authentication & Security</p>
                  <p className="text-xs text-slate-500 mt-1">OAuth2, OIDC, JWT sign-ins, Entra ID (Azure AD), OKTA, and secure certificate keys.</p>
                </div>
                <div className="p-3.5 bg-white/80 border border-amber-100/40 rounded-xl">
                  <p className="font-bold text-amber-950">Containers & Kubernetes</p>
                  <p className="text-xs text-slate-500 mt-1">Docker containerization and Kubernetes cluster setups for orchestration.</p>
                </div>
                <div className="p-3.5 bg-white/80 border border-amber-100/40 rounded-xl">
                  <p className="font-bold text-amber-950">Automated Delivery</p>
                  <p className="text-xs text-slate-500 mt-1">CI/CD automation pipelines via GitHub Actions and Azure DevOps pipelines.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real Project Examples */}
        <div className="p-8 bg-gradient-to-r from-purple-50 to-indigo-50/80 rounded-3xl border border-purple-100">
          <h3 className="text-2xl font-extrabold text-indigo-950 mb-6 text-center">Selected Case Studies</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Healthcare Platform Example */}
            <div className="bg-white/85 border border-indigo-100/50 p-6 rounded-2xl shadow-sm">
              <h4 className="text-lg font-extrabold text-purple-900 mb-3">Healthcare SaaS Application</h4>
              <p className="text-sm text-slate-600 mb-3">
                <span className="font-bold text-indigo-950">Challenge:</span> Supporting ~10K concurrent users while offering responsive offline data synchronization.
              </p>
              <div className="space-y-2 text-xs sm:text-sm">
                <p><span className="font-bold text-indigo-950">Solution Features:</span></p>
                <ul className="text-slate-600 space-y-1.5 ml-1">
                  <li className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-purple-500" /> React Progressive Web App (PWA)</li>
                  <li className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-purple-500" /> .NET Core microservices architecture</li>
                  <li className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-purple-500" /> SignalR sockets for real-time patient charts</li>
                  <li className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-purple-500" /> Redis server queries caching</li>
                </ul>
              </div>
            </div>

            {/* Fintech Platform Example */}
            <div className="bg-white/85 border border-indigo-100/50 p-6 rounded-2xl shadow-sm">
              <h4 className="text-lg font-extrabold text-purple-900 mb-3">Fintech Trading Architecture</h4>
              <p className="text-sm text-slate-600 mb-3">
                <span className="font-bold text-indigo-950">Challenge:</span> Offloading database heavy tasks and pushing live tickers changes without blocking transactions.
              </p>
              <div className="space-y-2 text-xs sm:text-sm">
                <p><span className="font-bold text-indigo-950">Solution Features:</span></p>
                <ul className="text-slate-600 space-y-1.5 ml-1">
                  <li className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-indigo-500" /> Separated trading and portfolio domains</li>
                  <li className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-indigo-500" /> Asynchronous queues order validation</li>
                  <li className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-indigo-500" /> WebSockets streaming database quotes</li>
                  <li className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-indigo-500" /> OAuth2 secure SSO tokens</li>
                </ul>
              </div>
            </div>

            {/* AI Integration Example */}
            <div className="bg-white/85 border border-indigo-100/50 p-6 rounded-2xl shadow-sm">
              <h4 className="text-lg font-extrabold text-purple-900 mb-3">AI Document Parsing Pipeline</h4>
              <p className="text-sm text-slate-600 mb-3">
                <span className="font-bold text-indigo-950">Challenge:</span> Implementing semantic searching capability and summaries over massive business databases.
              </p>
              <div className="space-y-2 text-xs sm:text-sm">
                <p><span className="font-bold text-indigo-950">Solution Features:</span></p>
                <ul className="text-slate-600 space-y-1.5 ml-1">
                  <li className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-indigo-500" /> RAG pipeline feeding custom OpenAI indexes</li>
                  <li className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-indigo-500" /> LangChain workflow manager integration</li>
                  <li className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-indigo-500" /> Pinecone semantic vector database indexes</li>
                  <li className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-indigo-500" /> Memory logs holding conversation state</li>
                </ul>
              </div>
            </div>

            {/* Microservices Example */}
            <div className="bg-white/85 border border-indigo-100/50 p-6 rounded-2xl shadow-sm">
              <h4 className="text-lg font-extrabold text-purple-900 mb-3">Monolith Migration Project</h4>
              <p className="text-sm text-slate-600 mb-3">
                <span className="font-bold text-indigo-950">Challenge:</span> Breaking a heavy legacy system into independent containers without disruption.
              </p>
              <div className="space-y-2 text-xs sm:text-sm">
                <p><span className="font-bold text-indigo-950">Solution Features:</span></p>
                <ul className="text-slate-600 space-y-1.5 ml-1">
                  <li className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-indigo-500" /> API gateway layer routing requests</li>
                  <li className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-indigo-500" /> Azure Service Bus routing event streams</li>
                  <li className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-indigo-500" /> Docker containers and Kubernetes clusters</li>
                  <li className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-indigo-500" /> Automated deployment pipelines</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Key Technologies Used */}
        <div className="mt-12 p-6 bg-white/70 backdrop-blur-md border border-purple-100/50 shadow-sm rounded-2xl">
          <h3 className="text-2xl font-extrabold text-indigo-950 mb-6">Unified Matrix</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Backend Core", items: "ASP.NET Core, Node.js, Express" },
              { label: "Frontend Core", items: "React, Angular, TypeScript" },
              { label: "Databases & Storage", items: "SQL Server, PostgreSQL, MongoDB" },
              { label: "Cloud & Kubernetes", items: "Azure, AWS, Docker, Kubernetes" },
              { label: "Messaging & Real-time", items: "WebSockets, SignalR, Kafka" },
              { label: "AI Integrations", items: "LangChain, OpenAI, Vector DB" },
              { label: "DevOps Pipelines", items: "GitHub Actions, Azure DevOps" },
              { label: "Identity & Sec", items: "JWT, OAuth2, OIDC, Entra ID" },
            ].map((tech, idx) => (
              <div key={idx} className="p-4 bg-slate-50 border border-slate-200/50 rounded-xl hover:border-purple-300 hover:bg-white transition-all duration-300">
                <p className="font-bold text-purple-750 text-xs mb-2">{tech.label}</p>
                <p className="text-[10px] sm:text-xs text-slate-650 mt-1 font-medium">{tech.items}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectMethodology;
