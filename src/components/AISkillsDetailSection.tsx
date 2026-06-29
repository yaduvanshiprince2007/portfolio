import React from "react";

const AISkillsDetailSection: React.FC = () => {
  const aiSkills = [
    {
      category: "AI Writing & Content Creation",
      skills: [
        "Crafting effective AI writing prompts for optimal outputs",
        "Generating and refining technical documentation with AI assistance",
        "Implementing AI-powered copywriting techniques",
        "Automated content summarization and distillation",
        "Optimizing AI-generated content for human readability",
        "Developing structured prompt templates for consistent results"
      ]
    },
    {
      category: "AI for Productivity Enhancement",
      skills: [
        "Automating repetitive development tasks with AI tools",
        "Implementing AI-powered code generation and review",
        "Using AI for rapid prototyping and idea validation",
        "AI-assisted debugging and problem solving",
        "Automating documentation and knowledge management",
        "AI-powered research and information synthesis"
      ]
    },
    {
      category: "AI Integration & Development",
      skills: [
        "Incorporating AI APIs into existing applications",
        "Fine-tuning AI models for specific use cases",
        "Developing AI-enhanced features for productivity tools",
        "Implementing AI-powered search and recommendation systems",
        "Building custom AI workflows for development processes",
        "Evaluating and selecting appropriate AI solutions"
      ]
    }
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AI <span className="text-emerald-600">Productivity</span> Expertise
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-emerald-700 max-w-3xl mx-auto">
            Leveraging artificial intelligence to enhance writing, development, and workflow efficiency
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiSkills.map((skillGroup, index) => (
            <div
              key={index}
              className="surface-panel rounded-lg shadow-sm hover:shadow-lg transition-all hover:scale-105"
            >
              <div className="px-6 py-4 border-b border-emerald-200 bg-gradient-to-r from-emerald-50 to-white">
                <h3 className="text-xl font-semibold text-emerald-800">
                  {skillGroup.category}
                </h3>
                <div className="w-16 h-1 bg-emerald-500 rounded-full mt-2"></div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 hover:text-gray-900">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-emerald-50 rounded-xl p-8 border border-emerald-100">
          <h3 className="text-2xl font-semibold text-emerald-800 mb-6">How AI Boosts Productivity</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h4 className="font-medium mb-3 text-emerald-700">Prompt Engineering</h4>
              <p>
                Crafting and refining prompts to produce high-quality, context-aware AI outputs that reduce manual effort in writing and coding.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-3 text-emerald-700">Workflow Integration</h4>
              <p>
                Seamlessly integrating AI into your dev/content pipeline to automate mundane tasks, improve quality checks, and enable parallelization.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-3 text-emerald-700">Real-time AI Assistance</h4>
              <p>
                Utilizing tools like GitHub Copilot, ChatGPT, or Azure OpenAI for intelligent code suggestions, instant debugging help, or data analysis summaries.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-3 text-emerald-700">Knowledge Augmentation</h4>
              <p>
                Speeding up research and decision-making by using AI to synthesize, extract, and organize relevant information from large data sources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISkillsDetailSection;