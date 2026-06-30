import { RESUME_DATA } from "../AppConstraint";

interface GrowthData {
  year: string;
  title: string;
  company: string;
  duration: string;
  description?: string;
}

const GrowthStack = () => {
  const experiences = RESUME_DATA.experience;
  
  const growthData: GrowthData[] = experiences.map((exp) => {
    let year = "2025";
    const yearMatch = exp.startDate.match(/\b\d{4}\b/);
    if (yearMatch) {
      year = yearMatch[0];
    } else if (exp.endDate.includes("Present")) {
      year = "Present";
    }

    let description = exp.responsibilities[0] || "";
    if (description.length > 55) {
      description = description.slice(0, 52) + "...";
    }

    return {
      year,
      title: exp.position,
      company: exp.company,
      duration: `${exp.startDate} – ${exp.endDate}`,
      description: description
    };
  });

  const calculatePositions = (index: number, total: number) => {
    if (total <= 1) return { position: "50%", width: "100%" };
    const segment = 100 / (total - 1);
    return {
      position: `${index * segment}%`,
      width: `${segment}%`,
    };
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10">
      {/* Timeline Visualization */}
      <div className="relative h-3 bg-gradient-to-r from-purple-200 to-indigo-150 rounded-full mb-16 shadow-inner hidden md:block">
        {/* Progress Lines */}
        <div 
          className="absolute h-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transition-all duration-700 ease-in-out"
          style={{ width: "100%", left: "0" }}
        />

        {/* Timeline Markers */}
        {growthData.map((_, index) => {
          const { position } = calculatePositions(index, growthData.length);
          return (
            <div
              key={`marker-${index}`}
              className="absolute -top-2.5 w-8 h-8 bg-white border-4 border-purple-500 rounded-xl shadow-md z-10 hover:scale-110 hover:border-indigo-500 transition-all duration-200"
              style={{ left: position, transform: "translateX(-50%)" }}
            />
          );
        })}

        {/* Year Labels */}
        {growthData.map((item, index) => {
          const { position } = calculatePositions(index, growthData.length);
          return (
            <div
              key={`year-${index}`}
              className="absolute top-9 text-xs font-bold text-purple-700 w-24 text-center"
              style={{ left: position, transform: "translateX(-50%)" }}
            >
              {item.year}
            </div>
          );
        })}
      </div>

      {/* Experience Cards */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 justify-items-center">
        {growthData.map((item, index) => (
          <div
            key={`detail-${index}`}
            className="bg-white border border-purple-100 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:border-purple-300 hover:-translate-y-1 transition-all duration-300 w-full max-w-sm group flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-extrabold text-purple-600 bg-purple-50 px-2.5 py-1 rounded-full md:hidden">
                  {item.year}
                </span>
                <span className="text-[10px] text-gray-500 font-medium italic">{item.duration}</span>
              </div>
              <div className="text-sm font-extrabold text-gray-950 group-hover:text-purple-700 transition-colors">{item.company}</div>
              <div className="text-xs font-semibold text-purple-900 mt-1">{item.title}</div>
            </div>
            {item.description && (
              <div className="text-[11px] text-gray-600 mt-4 italic border-t border-purple-50 pt-3">
                {item.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GrowthStack;
