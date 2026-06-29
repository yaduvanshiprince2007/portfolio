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
      <div className="mx-auto max-w-4xl mt-10 space-y-8">
        <AboutHeader />
        <ContactInfo />
        <ProfessionalSummary />
        <KeyStrengths />
        <Certifications />
        <EducationTimeline />
      </div>
    </PageShell>
  );
};

export default AboutPage;