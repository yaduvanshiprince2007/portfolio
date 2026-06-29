import PageShell from '../components/PageShell';
import { ProjectsShowcaseLarge } from '../components/ProjectsShowcase';
import { PAGE_THEMES } from '../AppConstraint';

const Projects = () => {
  return (
    <PageShell theme={PAGE_THEMES.projects}>
      <ProjectsShowcaseLarge />
    </PageShell>
  )
}

export default Projects
