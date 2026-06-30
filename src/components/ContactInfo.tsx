import React from "react";
import { URLS, RESUME_DATA } from "../AppConstraint";

const ContactInfo: React.FC = () => {
  const personal = RESUME_DATA.personal;

  return (
    <div className="bg-white border border-purple-100/45 rounded-3xl p-6 sm:p-8 shadow-xl transition-all duration-300 hover:shadow-purple-500/10 glow-card-purple">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Email */}
        <div className="flex items-center space-x-3 hover:bg-purple-50 p-3 rounded-lg transition-colors">
          <svg className="w-6 h-6 text-purple-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <div>
            <p className="text-sm text-gray-600">Email</p>
            <a href={`mailto:${personal.email}`} className="text-purple-600 hover:text-purple-800 font-medium transition-colors">
              {personal.email}
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center space-x-3 hover:bg-purple-50 p-3 rounded-lg transition-colors">
          <svg className="w-6 h-6 text-purple-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <div>
            <p className="text-sm text-gray-600">Phone</p>
            <a href={`tel:${personal.phone}`} className="text-purple-600 hover:text-purple-800 font-medium transition-colors">
              {personal.phone}
            </a>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center space-x-3 hover:bg-purple-50 p-3 rounded-lg transition-colors">
          <svg className="w-6 h-6 text-purple-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <div>
            <p className="text-sm text-gray-600">Location</p>
            <p className="text-gray-700 font-medium">{personal.location}</p>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center space-x-3 hover:bg-purple-50 p-3 rounded-lg transition-colors">
          <svg className="w-6 h-6 text-purple-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          <div>
            <p className="text-sm text-gray-600">LinkedIn</p>
            <a href={URLS.LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium transition-colors">
              Prince Yadav
            </a>
          </div>
        </div>

        {/* GitHub */}
        <div className="flex items-center space-x-3 hover:bg-purple-50 p-3 rounded-lg transition-colors">
          <svg className="w-6 h-6 text-purple-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <div>
            <p className="text-sm text-gray-600">GitHub</p>
            <a href={URLS.GITHUB} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium transition-colors">
              princeghostme
            </a>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="flex items-center space-x-3 hover:bg-purple-50 p-3 rounded-lg transition-colors">
          <svg className="w-6 h-6 text-purple-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.995 1.51 9.952 9.952 0 001.227 19.214c1.345.184 2.694-.265 3.776-1.288l5.387-4.059c1.08-.813 1.803-2.048 1.937-3.46.134-1.413-.288-2.776-1.174-3.85l-4.154-3.555Z" />
          </svg>
          <div>
            <p className="text-sm text-gray-600">WhatsApp</p>
            <a href={URLS.WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium transition-colors">
              {personal.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;