import PageShell from '../components/PageShell';
import AISkillsDetailSection from '../components/AISkillsDetailSection';
import TechnologiesDetails from '../components/TechnologiesPage';
import { PAGE_THEMES } from '../AppConstraint';

const Skills = () => {
    return (
        <PageShell theme={PAGE_THEMES.skills}>
            <TechnologiesDetails />
            <AISkillsDetailSection />
        </PageShell>
    );
};

export default Skills;