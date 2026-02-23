import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import AcademicProfile from './pages/AcademicProfile';
import Projects from './pages/Projects';
import ProfessionalExperience from './pages/ProfessionalExperience';
import Achievements from './pages/Achievements';
import GlobalExposure from './pages/GlobalExposure';
import CV from './pages/CV';
import Contact from './pages/Contact';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/academic-profile", element: <AcademicProfile /> },
      { path: "/projects", element: <Projects /> },
      { path: "/professional-experience", element: <ProfessionalExperience /> },
      { path: "/achievements", element: <Achievements /> },
      { path: "/global-exposure", element: <GlobalExposure /> },
      { path: "/cv", element: <CV /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);