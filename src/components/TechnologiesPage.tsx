import { useState } from 'react';

const technologies = [
  {
    category: "Languages",
    items: [
      { name: "C#", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "Python", level: "Intermediate" },
      { name: "SQL", level: "Advanced" },
      { name: "HTML/CSS", level: "Advanced" }
    ]
  },
  {
    category: "Backend Frameworks",
    items: [
      { name: "ASP.NET Core", level: "Advanced" },
      { name: "Node.js", level: "Advanced" },
      { name: "Express.js", level: "Advanced" },
      { name: "Entity Framework Core", level: "Advanced" },
      { name: "ASP.NET MVC", level: "Advanced" }
    ]
  },
  {
    category: "Frontend Frameworks",
    items: [
      { name: "React", level: "Advanced" },
      { name: "Angular", level: "Advanced" },
      { name: "Next.js", level: "Intermediate" },
      { name: "Redux", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" }
    ]
  },
  {
    category: "APIs & Protocols",
    items: [
      { name: "REST APIs", level: "Advanced" },
      { name: "GraphQL", level: "Intermediate" },
      { name: "gRPC", level: "Basic" },
      { name: "WebSockets", level: "Advanced" },
      { name: "SignalR", level: "Advanced" }
    ]
  },
  {
    category: "Databases",
    items: [
      { name: "SQL Server", level: "Advanced" },
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MongoDB", level: "Advanced" },
      { name: "Cosmos DB", level: "Intermediate" },
      { name: "Redis", level: "Advanced" },
      { name: "Elasticsearch", level: "Intermediate" }
    ]
  },
  {
    category: "Cloud & Infrastructure",
    items: [
      { name: "Azure App Services", level: "Advanced" },
      { name: "Azure Functions", level: "Advanced" },
      { name: "Azure SQL", level: "Advanced" },
      { name: "Azure Service Bus", level: "Intermediate" },
      { name: "AWS EC2/S3/Lambda/RDS", level: "Intermediate" },
      { name: "Docker", level: "Intermediate" },
      { name: "Kubernetes", level: "Basic" }
    ]
  },
  {
    category: "Message Queue & Events",
    items: [
      { name: "Kafka", level: "Intermediate" },
      { name: "Azure Service Bus", level: "Intermediate" },
      { name: "AWS SQS", level: "Intermediate" },
      { name: "Event-Driven Architecture", level: "Advanced" },
      { name: "Message Broadcasting", level: "Intermediate" }
    ]
  },
  {
    category: "Microservices & Architecture",
    items: [
      { name: "Microservices", level: "Advanced" },
      { name: "API Gateway Pattern", level: "Advanced" },
      { name: "CQRS Pattern", level: "Intermediate" },
      { name: "Saga Pattern", level: "Intermediate" },
      { name: "Service-to-Service Communication", level: "Advanced" }
    ]
  },
  {
    category: "Authentication & Security",
    items: [
      { name: "JWT", level: "Advanced" },
      { name: "OAuth2 & OIDC", level: "Advanced" },
      { name: "Entra ID (Azure AD)", level: "Advanced" },
      { name: "PASETO", level: "Intermediate" },
      { name: "Okta", level: "Intermediate" }
    ]
  },
  {
    category: "AI & Machine Learning",
    items: [
      { name: "LangChain", level: "Intermediate" },
      { name: "OpenAI API", level: "Intermediate" },
      { name: "RAG (Retrieval-Augmented Generation)", level: "Basic" },
      { name: "LLM Integration", level: "Intermediate" }
    ]
  },
  {
    category: "DevOps & CI/CD",
    items: [
      { name: "GitHub Actions", level: "Advanced" },
      { name: "Azure DevOps", level: "Advanced" },
      { name: "CI/CD Pipelines", level: "Advanced" },
      { name: "Docker & Containerization", level: "Intermediate" },
      { name: "Infrastructure as Code", level: "Intermediate" }
    ]
  },
  {
    category: "Microsoft Tools",
    items: [
      { name: "Power Automate", level: "Intermediate" },
      { name: "SharePoint", level: "Intermediate" },
      { name: "Azure DevOps", level: "Advanced" },
      { name: "Visual Studio", level: "Advanced" }
    ]
  },
];

const additionalSkills = [
  "Microservices Architecture",
  "Event-Driven Systems",
  "CQRS Pattern",
  "Saga Pattern",
  "API Gateway Layer",
  "Service-Oriented Architecture",
  "Domain-Driven Design (DDD)",
  "Clean Architecture",
  "Performance Optimization (20-30% improvement)",
  "Query Optimization",
  "Caching Strategies (Redis, In-Memory)",
  "Load Balancing",
  "Rate Limiting & Throttling",
  "Async/Await Patterns",
  "Connection Pooling",
  "High Concurrency Support (~10K users)",
  "Real-time Data Updates (SignalR, WebSockets)",
  "Live Monitoring Systems",
  "Real-time Dashboards",
  "AI-Assisted Features",
  "RAG (Retrieval-Augmented Generation)",
  "LLM API Integration",
  "Prompt Engineering",
  "AI Chatbots & Assistants",
  "Agile & Scrum",
  "Test-Driven Development (TDD)",
  "Code Review & Best Practices",
  "SOLID Principles",
  "Design Patterns",
  "Git Version Control",
  "Technical Documentation",
  "Team Mentoring",
  "Cross-functional Collaboration",
  "Requirements Analysis",
  "Technical Specification",
  "Client Communication",
  "Database Design",
  "ETL Pipelines",
  "Data Migration",
  "Backup & Recovery",
  "Index Optimization",
  "OAuth2 & OpenID Connect",
  "JWT Token Management",
  "Secure API Design",
  "Data Encryption",
  "HIPAA Compliance (Healthcare)",
  "Problem Solving",
  "Continuous Learning",
  "System Troubleshooting",
  "Technical Leadership"
];

const TechnologiesDetails = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showLevelDropdown, setShowLevelDropdown] = useState(false);

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced":
        return "bg-emerald-200 text-emerald-800";
      case "Intermediate":
        return "bg-emerald-100 text-emerald-700";
      case "Basic":
        return "bg-emerald-50 text-emerald-600";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const categories = technologies.map(tech => tech.category);
  const levels = Array.from(new Set(technologies.flatMap(tech => tech.items.map(item => item.level))));

  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const toggleLevel = (level: string) => {
    if (selectedLevels.includes(level)) {
      setSelectedLevels(selectedLevels.filter(l => l !== level));
    } else {
      setSelectedLevels([...selectedLevels, level]);
    }
  };

  const filteredTechnologies = technologies
    .filter(tech => (selectedCategories.length > 0 ? selectedCategories.includes(tech.category) : true))
    .map(tech => ({
      ...tech,
      items: tech.items.filter(item =>
        (searchTerm === '' ||
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.level.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (selectedLevels.length > 0 ? selectedLevels.includes(item.level) : true)
      )
    }))
    .filter(tech => tech.items.length > 0);

  const filteredAdditionalSkills = additionalSkills.filter(skill =>
    searchTerm === '' || skill.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategories([]);
    setSelectedLevels([]);
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className=" mx-auto mt-5">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4">
            Full <span className="text-emerald-600">Technical Breakdown</span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-emerald-700 max-w-3xl mx-auto">
            Comprehensive view of all technologies in my stack with proficiency levels
          </p>
        </div>

        <div className="mb-12 bg-white rounded-xl p-6 shadow-lg border border-emerald-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1">
              <label htmlFor="search" className="block text-sm font-medium text-emerald-700 mb-1">
                Search Technologies
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="search"
                  placeholder="Search by name or level..."
                  className="w-full px-4 py-2 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-2.5 text-emerald-400 hover:text-emerald-600"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-emerald-700 mb-1">
                Filter by Category
              </label>
              <button
                onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                className="w-full px-4 py-2 border border-emerald-200 rounded-lg flex justify-between items-center hover:bg-emerald-50 transition"
              >
                <span>
                  {selectedCategories.length > 0 ? `${selectedCategories.length} selected` : "All Categories"}
                </span>
                <svg 
                  className={`w-4 h-4 ml-2 transition-transform ${showCategoryDropdown ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {showCategoryDropdown && (
                <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-lg py-1 border border-emerald-100 max-h-60 overflow-auto">
                  {categories.map((category, index) => (
                    <div key={index} className="px-4 py-2 hover:bg-emerald-50 flex items-center">
                      <input
                        type="checkbox"
                        id={`category-${index}`}
                        checked={selectedCategories.includes(category)}
                        onChange={() => toggleCategory(category)}
                        className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-emerald-300 rounded"
                      />
                      <label htmlFor={`category-${index}`} className="ml-3 text-sm text-emerald-700">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-emerald-700 mb-1">
                Filter by Level
              </label>
              <button
                onClick={() => setShowLevelDropdown(!showLevelDropdown)}
                className="w-full px-4 py-2 border border-emerald-200 rounded-lg flex justify-between items-center hover:bg-emerald-50 transition"
              >
                <span>
                  {selectedLevels.length > 0 ? `${selectedLevels.length} selected` : "All Levels"}
                </span>
                <svg 
                  className={`w-4 h-4 ml-2 transition-transform ${showLevelDropdown ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {showLevelDropdown && (
                <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-lg py-1 border border-emerald-100">
                  {levels.map((level, index) => (
                    <div key={index} className="px-4 py-2 hover:bg-emerald-50 flex items-center">
                      <input
                        type="checkbox"
                        id={`level-${index}`}
                        checked={selectedLevels.includes(level)}
                        onChange={() => toggleLevel(level)}
                        className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-emerald-300 rounded"
                      />
                      <label htmlFor={`level-${index}`} className="ml-3 text-sm text-emerald-700">
                        {level}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {(searchTerm || selectedCategories.length > 0 || selectedLevels.length > 0) && (
            <div className="mt-4 flex justify-between items-center">
              <div className="flex flex-wrap gap-2">
                {selectedCategories.map((category, index) => (
                  <span 
                    key={index} 
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800"
                  >
                    {category}
                    <button 
                      onClick={() => toggleCategory(category)}
                      className="ml-1.5 inline-flex text-emerald-400 hover:text-emerald-600"
                    >
                      ×
                    </button>
                  </span>
                ))}
                {selectedLevels.map((level, index) => (
                  <span 
                    key={index} 
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800"
                  >
                    {level}
                    <button 
                      onClick={() => toggleLevel(level)}
                      className="ml-1.5 inline-flex text-emerald-400 hover:text-emerald-600"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
              <button
                onClick={clearFilters}
                className="text-emerald-600 hover:text-emerald-800 text-sm font-medium flex items-center"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862A2 2 0 015.869 8.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Clear all
              </button>
            </div>
          )}
        </div>

        {filteredTechnologies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {filteredTechnologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 overflow-hidden border border-emerald-100 transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold text-emerald-800 mb-4 pb-2 border-b border-emerald-100 flex items-center">
                  <span className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                  {tech.category}
                </h3>
                <ul className="space-y-3">
                  {tech.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex justify-between items-center group">
                      <span className="text-emerald-900 font-medium group-hover:text-emerald-600 transition">
                        {item.name}
                      </span>
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${getLevelColor(item.level)} shadow-sm`}>
                        {item.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-xl shadow-md mb-16 border border-emerald-100">
            <svg className="mx-auto h-12 w-12 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 className="mt-2 text-lg font-medium text-emerald-800">No technologies found</h3>
            <p className="mt-1 text-emerald-600">Try adjusting your search or filter criteria</p>
            <div className="mt-6">
              <button
                onClick={clearFilters}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              >
                Clear all filters
              </button>
            </div>
          </div>
        )}

        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 border border-emerald-100">
          <div className="flex items-center mb-6">
            <h3 className="text-2xl font-semibold text-emerald-800">
              Additional Skills & Competencies
            </h3>
            <span className="ml-3 bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {filteredAdditionalSkills.length} skills
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            {filteredAdditionalSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-emerald-50 to-white text-emerald-800 px-4 py-2 rounded-lg text-sm font-medium shadow-sm border border-emerald-100 hover:shadow-md transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesDetails;