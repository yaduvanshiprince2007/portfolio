import { Link } from "react-router-dom";
import { Star, StarHalf, StarOff } from "lucide-react";
import { RESUME_DATA } from "../AppConstraint";

const getRatingForLevel = (level: string): number => {
  switch (level) {
    case "Advanced":
      return 5;
    case "Intermediate":
      return 4;
    case "Basic":
      return 3;
    default:
      return 4.5;
  }
};

// Map skills dynamically from detailedSkills
const skills = RESUME_DATA.detailedSkills.flatMap(cat => 
  cat.items.map(item => ({
    name: item.name,
    rating: getRatingForLevel(item.level)
  }))
);

const renderStars = (rating : number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            stars.push(<Star key={i} className="w-3.5 h-3.5 text-purple-500 fill-purple-500" />);
        } else if (rating >= i - 0.5) {
            stars.push(<StarHalf key={i} className="w-3.5 h-3.5 text-purple-500 fill-purple-500" />);
        } else {
            stars.push(<StarOff key={i} className="w-3.5 h-3.5 text-purple-250" />);
        }
    }
    return stars;
};

const TechnologiesDashboard = () => {
    return (
        <div className="mb-5 bg-white py-16 px-4 sm:px-6 lg:px-8 border-y border-purple-50">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-extrabold text-purple-950 mb-3 tracking-tight">
                    My <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 font-extrabold">Core Skills</span>
                </h1>
                <p className="text-purple-750/80 text-base md:text-lg max-w-2xl mx-auto">
                    Here's a quick overview of my most proficient technologies.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 max-w-7xl mx-auto">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="bg-purple-50/50 border border-purple-100/50 rounded-2xl p-4 px-6 min-w-[150px] shadow-sm hover:shadow-md hover:border-purple-300 transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                        <h2 className="text-sm font-extrabold text-purple-950 text-center mb-2">
                            {skill.name}
                        </h2>
                        <div className="flex justify-center gap-0.5">{renderStars(skill.rating)}</div>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <Link
                    to="/skills"
                    className="inline-flex px-8 py-3 text-white font-bold bg-purple-600 rounded-full hover:bg-purple-700 text-sm transition-all shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-0.5"
                >
                    View Full Skillset
                </Link>
            </div>
        </div>
    );
};

export default TechnologiesDashboard;
