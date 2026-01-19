import React from 'react';
import { Download, FileText } from 'lucide-react';

const CV: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      <div className="bg-primary text-white p-8 md:p-12 rounded-2xl shadow-lg mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-serif font-bold mb-2">Curriculum Vitae</h1>
          <p className="text-gray-300">
            Last updated: October 2024
          </p>
        </div>
        <a 
          href="/placeholder-cv.pdf" 
          target="_blank"
          className="flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-md"
        >
          <Download size={20} /> Download PDF
        </a>
      </div>

      <div className="bg-white p-8 md:p-16 border border-gray-200 shadow-sm rounded-xl min-h-[800px] relative">
        {/* CV Preview Placeholder - Simulating a Paper Look */}
        <div className="max-w-3xl mx-auto space-y-10 text-gray-800">
          
          {/* Header */}
          <div className="border-b border-gray-200 pb-8 text-center md:text-left">
            <h2 className="text-3xl font-serif font-bold text-gray-900">Irfat Nur Aboni</h2>
            <p className="text-gray-600 mt-2">irfat.aboni@student.university.edu | +123 456 7890 | linkedin.com/in/irfatnuraboni</p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">Education</h3>
            <div className="mb-4">
              <div className="flex justify-between font-bold text-gray-800">
                <span>University of Technology</span>
                <span>2021 — Present</span>
              </div>
              <div className="flex justify-between text-gray-600 italic">
                <span>B.Sc in Information Technology & Management</span>
                <span>GPA: 3.8/4.0</span>
              </div>
            </div>
             <div className="mb-4">
              <div className="flex justify-between font-bold text-gray-800">
                <span>Technical University of Munich (Exchange)</span>
                <span>Sep 2023 — Feb 2024</span>
              </div>
              <div className="text-gray-600 italic">
                Focus: Management & Technology
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">Experience</h3>
            <div className="mb-6">
              <div className="flex justify-between font-bold text-gray-800">
                <span>Data Analyst Intern, Global FinTech Solutions</span>
                <span>Summer 2024</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 text-sm">
                <li>Analyzed 500k+ transaction records to identify fraud patterns using Python.</li>
                <li>Automated reporting workflows, saving 10 hours/week.</li>
              </ul>
            </div>
            <div className="mb-6">
              <div className="flex justify-between font-bold text-gray-800">
                <span>Software Eng. Intern, TechStart Innovations</span>
                <span>Summer 2023</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 text-sm">
                <li>Developed React components for the main client dashboard.</li>
                <li>Collaborated in an Agile environment with daily standups.</li>
              </ul>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">Skills</h3>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <span className="font-bold">Languages:</span> Python, Java, JavaScript, SQL
              </div>
              <div>
                <span className="font-bold">Tools:</span> Tableau, Git, AWS, Docker
              </div>
               <div>
                <span className="font-bold">Soft Skills:</span> Cross-cultural Communication, Technical Writing
              </div>
               <div>
                <span className="font-bold">Languages:</span> English (C1), German (A2)
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">Projects</h3>
             <div className="mb-4">
              <div className="font-bold text-gray-800">Urban Eco-Monitor</div>
              <p className="text-sm text-gray-700 mt-1">IoT based air quality monitoring system utilizing Raspberry Pi and React dashboard.</p>
            </div>
          </div>

        </div>
        
        {/* Overlay for "Preview" effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent h-32 bottom-0 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default CV;