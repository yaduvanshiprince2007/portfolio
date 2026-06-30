import { RESUME_DATA } from "../AppConstraint";

const Internship = () => {
    const experiences = RESUME_DATA.internships;

    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-orange-950 mb-4 tracking-tight">
                        Trainee & <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-500">Internship</span> Experiences
                    </h1>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg md:text-xl text-orange-850/80 max-w-3xl mx-auto leading-relaxed">
                        Early career experiences that shaped my professional foundation
                    </p>
                </div>

                {/* Experience Cards */}
                <div className="space-y-10">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="relative group">
                            {/* Card */}
                            <div className="bg-white border border-orange-100/60 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-lg hover:border-orange-300 transition-all duration-300 relative">
                                {/* Header */}
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-orange-950 group-hover:text-orange-600 transition-colors">
                                            {exp.position}
                                        </h3>
                                        <h4 className="text-lg font-bold text-orange-800 mt-1">{exp.company}</h4>
                                        {exp.location && <p className="text-sm font-semibold text-orange-600/80 mt-0.5">{exp.location}</p>}
                                    </div>
                                    <div>
                                        <span className="text-xs md:text-sm font-bold text-orange-700 bg-orange-50 border border-orange-100 px-3.5 py-1.5 rounded-xl shadow-sm">
                                            {exp.startDate} – {exp.endDate}
                                        </span>
                                    </div>
                                </div>

                                {/* Responsibilities */}
                                <div className="mt-5">
                                    <h5 className="text-orange-800 font-bold mb-3 text-sm uppercase tracking-wider">
                                        Key Contributions
                                    </h5>
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
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Internship;
