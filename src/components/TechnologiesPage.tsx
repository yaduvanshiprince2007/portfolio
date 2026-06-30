import { useState } from 'react';
import { RESUME_DATA } from "../AppConstraint";

const technologies = RESUME_DATA.detailedSkills;
const additionalSkills = RESUME_DATA.additionalSkills;

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
                className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-emerald-100/50 hover:border-emerald-350 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <h3 className="text-lg font-extrabold text-emerald-950 mb-4 pb-2 border-b border-emerald-100/50 flex items-center">
                  <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full mr-2.5 animate-pulse"></span>
                  {tech.category}
                </h3>
                <ul className="space-y-3">
                  {tech.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex justify-between items-center group">
                      <span className="text-slate-700 font-bold text-sm group-hover:text-emerald-700 transition">
                        {item.name}
                      </span>
                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-xl ${getLevelColor(item.level)} shadow-sm`}>
                        {item.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white/60 backdrop-blur-md rounded-2xl shadow-sm mb-16 border border-emerald-100">
            <svg className="mx-auto h-12 w-12 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 className="mt-2 text-lg font-bold text-emerald-950">No technologies found</h3>
            <p className="mt-1 text-slate-550">Try adjusting your search or filter criteria</p>
            <div className="mt-6">
              <button
                onClick={clearFilters}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-bold rounded-xl shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              >
                Clear all filters
              </button>
            </div>
          </div>
        )}

        <div className="mt-16 bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-emerald-100/50 shadow-xl">
          <div className="flex items-center mb-6">
            <h3 className="text-2xl font-extrabold text-emerald-950">
              Additional Skills & Competencies
            </h3>
            <span className="ml-3 bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-full">
              {filteredAdditionalSkills.length} skills
            </span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {filteredAdditionalSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-white hover:bg-emerald-50/50 text-emerald-800 px-4 py-2 rounded-xl text-xs font-bold shadow-sm border border-emerald-100 hover:border-emerald-450 hover:shadow-md transition-all duration-300 cursor-default"
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