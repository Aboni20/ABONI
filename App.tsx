import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AcademicProfile from './pages/AcademicProfile';
import Projects from './pages/Projects';
import ProfessionalExperience from './pages/ProfessionalExperience';
import Achievements from './pages/Achievements';
import GlobalExposure from './pages/GlobalExposure';
import CV from './pages/CV';
import Contact from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen text-text bg-background font-sans selection:bg-primary selection:text-white">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/academic-profile" element={<AcademicProfile />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/professional-experience" element={<ProfessionalExperience />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/global-exposure" element={<GlobalExposure />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;