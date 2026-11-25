import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import Layout from './components/layout/Layout';
import HomePage from './pages/Home/HomePage';

const ProjectsPage = lazy(() => import('./pages/Projects/ProjectsPage'));
const ProjectDetailsPage = lazy(() => import('./pages/ProjectDetails/ProjectDetailsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFound/NotFoundPage'));

const PageFallback = () => (
  <div className="container-x flex min-h-[60vh] items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-2 border-line-strong border-t-accent" aria-label="Loading" />
  </div>
);

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </MotionConfig>
  );
}

export default App;
