import React from "react";
import PageShell from "../components/PageShell";
import AboutHeader from "../components/AboutHeader";
import ContactInfo from "../components/ContactInfo";
import ProfessionalSummary from "../components/ProfessionalSummary";
import EducationTimeline from "../components/EducationTimeline";
import Certifications from "../components/Certifications";
import KeyStrengths from "../components/KeyStrengths";
import { PAGE_THEMES } from "../AppConstraint";

const AboutPage: React.FC = () => {
  return (
    <PageShell theme={PAGE_THEMES.about}>
      <div className="mx-auto mt-10 px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header - Full Width */}
        <AboutHeader />

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Row 1: Big Box (Professional Summary) & Small Box (Contact Info) */}
          <div className="lg:col-span-8 transform hover:-translate-y-0.5 transition-transform duration-300">
            <ProfessionalSummary />
          </div>
          <div className="lg:col-span-4 transform hover:translate-y-0.5 transition-transform duration-300">
            <ContactInfo />
          </div>

          {/* Row 2: Big Box (Key Strengths) & Small Box (Certifications) */}
          <div className="lg:col-span-8 transform hover:-translate-y-0.5 transition-transform duration-300">
            <KeyStrengths />
          </div>
          <div className="lg:col-span-4 transform hover:translate-y-0.5 transition-transform duration-300">
            <Certifications />
          </div>

          {/* Row 3: Education Timeline - Full Width */}
          <div className="lg:col-span-12">
            <EducationTimeline />
          </div>

        </div>
      </div>
    </PageShell>
  );
};

export default AboutPage;