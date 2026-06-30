import React from "react";
import { Award } from "lucide-react";
import { RESUME_DATA } from "../AppConstraint";

const Certifications: React.FC = () => {
  const certifications = RESUME_DATA.certifications;

  return (
    <div className="bg-white border border-purple-100/45 rounded-3xl p-6 sm:p-8 shadow-xl transition-all duration-300 hover:shadow-purple-500/10 glow-card-purple">
      <div className="flex items-center mb-6">
        <Award className="w-6 h-6 text-purple-600 mr-3" />
        <h2 className="text-2xl font-semibold text-gray-800">Certifications</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert, index) => {
          const parts = cert.split(" – ");
          const name = parts[0];
          const issuer = parts[1] || "Udemy";
          return (
            <div
              key={index}
              className="p-4 border border-purple-100 rounded-lg hover:bg-purple-50 transition-colors bg-gradient-to-br from-purple-50 to-white"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-purple-500 text-white">
                    <Award className="w-5 h-5" />
                  </div>
                </div>
                <div className="ml-3 flex-1">
                  <h3 className="text-sm font-bold text-gray-900">{name}</h3>
                  <p className="text-xs text-purple-600 font-medium mt-1">{issuer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certifications;
