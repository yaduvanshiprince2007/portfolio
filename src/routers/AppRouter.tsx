import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Skills from '../pages/Skills';
import React from 'react';
import Loading from '../pages/Loading';


const Home = React.lazy(()=>import('../pages/Home'));
const PageNotFound = React.lazy(()=>import('../pages/PageNotFound'));
const InternshipsAndJobs = React.lazy(()=>import('../pages/IntershipsAndJobs'));
const Projects = React.lazy(()=>import('../pages/Projects'));
const AboutMe = React.lazy(()=>import('../pages/AboutPage'));
const ResumePage = React.lazy(()=>import('../pages/Resume'));



const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppRouter: React.FC = () => (
  <>
    <React.Suspense fallback={<Loading />}>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path='/work' element={<InternshipsAndJobs />} />
        <Route path='/projects' element={<Projects />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </React.Suspense>
  </>

);

export default AppRouter;
