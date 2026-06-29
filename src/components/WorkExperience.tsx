import { RESUME_DATA } from "../AppConstraint";

const WorkExperience = () => {
    const experiences = RESUME_DATA.experience;

    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-orange-900 mb-4">
                        Professional <span className="text-orange-600">Experience</span>
                    </h1>
                    <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-xl text-orange-700 max-w-3xl mx-auto">
                        My journey through diverse roles and responsibilities in software development
                    </p>
                </div>

                {/* Timeline */}
                <div className="space-y-12">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="relative group">
                            <div className="surface-panel p-5 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                                    <h3 className="text-xl font-bold text-orange-800">{exp.position}</h3>
                                    <div className="flex items-center mt-1 sm:mt-0">
                                        <span className="text-sm font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                                            {exp.startDate} – {exp.endDate}
                                        </span>
                                    </div>
                                </div>
                                <h4 className="text-lg font-semibold text-orange-700 mt-1">{exp.company}</h4>
                                <p className="text-sm text-orange-500 mb-4">{exp.location}</p>
                                {exp.clients && exp.clients.length > 0 && (
                                    <p className="text-sm text-orange-600 mb-2">
                                        <span className="font-semibold">Clients:</span> {exp.clients.join(", ")}
                                    </p>
                                )}

                                {/* Split Section */}
                                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-4">
                                    <div className="md:col-span-5">
                                        <h5 className="text-orange-600 font-semibold mb-2">Responsibilities</h5>
                                        <ul className="space-y-2">
                                            {exp.responsibilities.map((item, i) => (
                                                <li key={i} className="flex items-start">
                                                    <div className="flex-shrink-0 mt-1.5">
                                                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                                                    </div>
                                                    <p className="ml-2 text-gray-700">{item}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-6 pt-4 border-t border-orange-100">
                                    <div className="flex flex-wrap gap-2">
                                        {exp.techStack.map((tech, i) => (
                                            <span key={i} className="text-xs font-medium px-3 py-1 bg-orange-100 text-orange-700 rounded-full">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
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
