import { RESUME_DATA } from "../AppConstraint";

const WorkExperience = () => {
    const experiences = RESUME_DATA.experience;

    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-orange-950 mb-4 tracking-tight">
                        Professional <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-500">Experience</span>
                    </h1>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg md:text-xl text-orange-850/80 max-w-3xl mx-auto leading-relaxed">
                        My journey through diverse roles and responsibilities in software development
                    </p>
                </div>

                {/* Timeline */}
                <div className="space-y-10">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="relative group">
                            {/* Line connecting items */}
                            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-orange-100 group-last:bg-transparent -ml-3 md:-ml-6 hidden md:block"></div>
                            
                            <div className="bg-white border border-orange-100/60 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-lg hover:border-orange-300 transition-all duration-300 relative">
                                {/* Timeline Bullet for desktop */}
                                <div className="absolute -left-3.5 top-8 w-6.5 h-6.5 bg-white border-4 border-orange-500 rounded-xl shadow-sm z-10 hidden md:block -ml-6 group-hover:border-amber-500 group-hover:scale-110 transition-all"></div>

                                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-orange-950 group-hover:text-orange-600 transition-colors">
                                            {exp.position}
                                        </h3>
                                        <h4 className="text-lg font-bold text-orange-800 mt-1">{exp.company}</h4>
                                        <p className="text-sm font-semibold text-orange-600/80 mt-0.5">{exp.location}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-xs md:text-sm font-bold text-orange-700 bg-orange-50 border border-orange-100 px-3.5 py-1.5 rounded-xl shadow-sm">
                                            {exp.startDate} – {exp.endDate}
                                        </span>
                                    </div>
                                </div>

                                {exp.clients && exp.clients.length > 0 && (
                                    <div className="mt-4 flex flex-wrap gap-2 items-center">
                                        <span className="text-xs font-extrabold uppercase tracking-wider text-orange-700 bg-orange-50 px-2 py-1 rounded">Clients:</span>
                                        {exp.clients.map((client, idx) => (
                                            <span key={idx} className="text-xs font-semibold text-gray-700 bg-gray-50 border border-gray-200/60 px-2.5 py-1 rounded-lg">
                                                {client}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* Split Section */}
                                <div className="mt-5">
                                    <h5 className="text-orange-800 font-bold mb-3 text-sm uppercase tracking-wider">Responsibilities & Key Contributions</h5>
                                    <ul className="space-y-3">
                                        {exp.responsibilities.map((item, i) => (
                                            <li key={i} className="flex items-start">
                                                <div className="flex-shrink-0 mt-2">
                                                    <div className="w-2 h-2 bg-orange-500 rounded-full shadow-sm"></div>
                                                </div>
                                                <p className="ml-3 text-gray-750 leading-relaxed text-sm md:text-base">{item}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-6 pt-5 border-t border-orange-50 flex flex-wrap gap-2">
                                    {exp.techStack.map((tech, i) => (
                                        <span key={i} className="text-[11px] md:text-xs font-bold px-3 py-1.5 bg-orange-50 text-orange-700 border border-orange-100 rounded-xl hover:bg-orange-100 transition-colors">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WorkExperience;
