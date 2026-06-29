import { RESUME_DATA } from "../AppConstraint";

const Internship = () => {
    const experiences = RESUME_DATA.internships;

    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-orange-900 mb-4">
                        <span className="text-orange-600">Trainee & Internship</span> Experiences
                    </h1>
                    <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-xl text-orange-700 max-w-3xl mx-auto">
                        Early career experiences that shaped my professional foundation
                    </p>
                </div>

                {/* Experience Cards */}
                <div className="space-y-8">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="relative group">
                            {/* Card */}
                            <div className="surface-panel p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden">
                                {/* Header */}
                                <div>
                                    <h3 className="text-xl font-bold text-orange-800">{exp.position}</h3>
                                    <h4 className="text-lg font-semibold text-orange-700">{exp.company}</h4>
                                    <p className="text-sm text-orange-500 mb-3">{exp.startDate} – {exp.endDate}</p>
                                </div>

                                {/* Responsibilities */}
                                <div className="mb-4">
                                    <h5 className="text-sm font-semibold text-orange-700 uppercase tracking-wider mb-2">
                                        Key Contributions
                                    </h5>
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
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Internship;
