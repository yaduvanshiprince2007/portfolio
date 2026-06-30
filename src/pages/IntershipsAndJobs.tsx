import { useState } from 'react';
import PageShell from '../components/PageShell';
import Internship from '../components/Internship';
import WorkExperience from '../components/WorkExperience';
import { FaBriefcase, FaUserGraduate } from 'react-icons/fa';
import { PAGE_THEMES } from '../AppConstraint';

const InternshipsAndJobs = () => {
  const [section, setSection] = useState<'all' | 'work' | 'internship'>('all');

  const tabClass = (active: boolean) => `
    flex items-center justify-center px-4 py-2 rounded-xl
    text-xs sm:text-sm font-bold transition-all duration-300
    ${active ? 'bg-orange-600 text-white shadow-md shadow-orange-600/20' : 'text-slate-800 hover:bg-orange-50/50 hover:text-orange-700'}
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
        fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40
        bg-white/80 backdrop-blur-xl border border-orange-100/50 shadow-xl
        rounded-2xl p-1.5 flex space-x-1.5 print:hidden
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
