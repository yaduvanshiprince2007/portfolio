import { useState } from 'react';
import PageShell from '../components/PageShell';
import Internship from '../components/Internship';
import WorkExperience from '../components/WorkExperience';
import { FaBriefcase, FaUserGraduate } from 'react-icons/fa';
import { PAGE_THEMES } from '../AppConstraint';

const InternshipsAndJobs = () => {
  const [section, setSection] = useState<'all' | 'work' | 'internship'>('all');

  const tabClass = (active: boolean) => `
    flex items-center justify-center px-4 py-1.5 sm:px-5 sm:py-2 rounded-lg
    text-sm sm:text-base font-medium transition-all duration-200
    ${active ? 'bg-orange-600 text-white' : 'text-gray-800 hover:bg-orange-100/60'}
  `;

  const renderContent = () => {
    switch (section) {
      case 'internship':
        return <Internship />;
      case 'work':
        return <WorkExperience />;
      default:
        return (
          <>
            <WorkExperience />
            <Internship />
          </>
        );
    }
  };

  return (
    <PageShell theme={PAGE_THEMES.work}>
      <div className="relative transition-all duration-300 ease-in-out">
        {renderContent()}
      </div>

      {/* Floating Pill-Style Toggle Tabs */}
      <div className="
        fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50
        bg-white/30 backdrop-blur-md border border-white/20
        rounded-2xl px-1 sm:px-2 py-1 flex space-x-1 sm:space-x-2
      ">

        <button
          onClick={() => setSection('internship')}
          className={tabClass(section === 'internship')}
        >
          <FaUserGraduate className="mr-1.5" />
          <span className="hidden sm:inline">Internship</span>
        </button>
        <button
          onClick={() => setSection('all')}
          className={tabClass(section === 'all')}
        >
          <FaBriefcase className="mr-1.5" />
          <span className="hidden sm:inline">All</span>
        </button>

        <button
          onClick={() => setSection('work')}
          className={tabClass(section === 'work')}
        >
          <FaBriefcase className="mr-1.5" />
          <span className="hidden sm:inline">Work</span>
        </button>
      </div>
    </PageShell>
  );
};

export default InternshipsAndJobs;
