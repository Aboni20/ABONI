import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Globe, Award, Briefcase, Download, Layers } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      
      {/* Introduction Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start animate-fade-in-up">
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 text-stone-600 text-xs font-semibold tracking-wider uppercase rounded-full border border-stone-200">
             <Layers size={12} /> Academic Portfolio
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight">
            Exploring how technology and management shape sustainable systems.
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl border-l-4 border-stone-200 pl-6">
            I am a final-year undergraduate student of Information Technology and Management. My academic work focuses on understanding how digital systems and managerial frameworks can be applied to sustainability-oriented challenges. Through coursework, applied projects, and international academic exposure, I explore how technology can support informed and responsible decision-making in complex organizational contexts.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
             <Link 
              to="/academic-profile" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-slate-700 transition-all shadow-sm hover:shadow-md"
            >
              View Academic Profile <ArrowRight size={16} />
            </Link>
             <Link 
              to="/projects" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 text-primary font-medium rounded-lg hover:bg-gray-50 transition-all shadow-sm hover:shadow-md"
            >
              View Projects <ArrowRight size={16} />
            </Link>
            <a 
              href="/placeholder-cv.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-stone-600 hover:text-primary font-medium transition-colors"
            >
              <Download size={16} /> Download CV
            </a>
          </div>
        </div>
        
        {/* Right Sidebar: Profile Image & Research Focus */}
        <div className="lg:col-span-5 space-y-8">
           {/* Profile Image Card */}
           <div className="relative group w-full max-w-xs mx-auto lg:ml-auto">
              <div className="absolute inset-0 bg-primary/5 transform translate-x-3 translate-y-3 rounded-xl transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
              <div className="relative rounded-xl overflow-hidden border border-gray-100 shadow-lg aspect-[3/4] lg:aspect-[4/5] bg-gray-100">
                <img 
                  src="/images/profile/profile.jpg" 
                  alt="Irfat Nur Aboni" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback if image isn't loaded yet
                    const target = e.target as HTMLImageElement;
                    target.onerror = null; // Prevent infinite loop
                    target.src = "https://placehold.co/600x800/e2e8f0/475569?text=Profile+Image";
                  }}
                />
              </div>
           </div>

           {/* Research Focus Box */}
           <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 shadow-sm">
             <h3 className="font-serif font-semibold text-lg text-primary mb-4 pb-2 border-b border-stone-200">
               Research & Focus
             </h3>
             <ul className="space-y-4 text-sm text-stone-700">
               <li className="flex gap-3 items-start group">
                 <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                 <span className="leading-relaxed">Digital and information systems in organizational contexts.</span>
               </li>
               <li className="flex gap-3 items-start group">
                 <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                 <span className="leading-relaxed">Technology-supported sustainability initiatives.</span>
               </li>
               <li className="flex gap-3 items-start group">
                 <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                 <span className="leading-relaxed">Intersections of technology, strategy, and social impact.</span>
               </li>
             </ul>
          </div>
        </div>
      </section>

      {/* Dashboard Grid */}
      <section>
        <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-serif font-bold text-primary">Overview</h2>
            <div className="h-px bg-gray-100 flex-grow ml-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Academic Snapshot */}
            <Link to="/academic-profile" className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-primary/20 transition-all group h-full flex flex-col">
            <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 bg-blue-50 text-blue-900 rounded-lg flex items-center justify-center">
                    <BookOpen size={20} />
                </div>
                <ArrowRight size={16} className="text-gray-300 group-hover:text-primary transition-colors" />
            </div>
            <h3 className="font-serif font-bold text-lg text-primary mb-2">Academic Profile</h3>
            <p className="text-sm text-gray-500 mb-6 flex-grow leading-relaxed">
                Comprehensive records of coursework, curricular focus, and performance metrics in IT & Management.
            </p>
            <span className="text-xs font-bold text-secondary uppercase tracking-wider">View Details</span>
            </Link>

            {/* Projects Snapshot */}
            <Link to="/projects" className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-primary/20 transition-all group h-full flex flex-col">
            <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-900 rounded-lg flex items-center justify-center">
                    <Briefcase size={20} />
                </div>
                <ArrowRight size={16} className="text-gray-300 group-hover:text-primary transition-colors" />
            </div>
            <h3 className="font-serif font-bold text-lg text-primary mb-2">Projects</h3>
            <p className="text-sm text-gray-500 mb-6 flex-grow leading-relaxed">
                Applied research projects ranging from smart city IoT simulations to sustainable digital platforms.
            </p>
            <span className="text-xs font-bold text-secondary uppercase tracking-wider">View Portfolio</span>
            </Link>

            {/* Achievements Snapshot */}
            <Link to="/achievements" className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-primary/20 transition-all group h-full flex flex-col">
            <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 bg-amber-50 text-amber-900 rounded-lg flex items-center justify-center">
                    <Award size={20} />
                </div>
                <ArrowRight size={16} className="text-gray-300 group-hover:text-primary transition-colors" />
            </div>
            <h3 className="font-serif font-bold text-lg text-primary mb-2">Achievements</h3>
            <p className="text-sm text-gray-500 mb-6 flex-grow leading-relaxed">
                Recognition for academic excellence, hackathon contributions, and research publications.
            </p>
            <span className="text-xs font-bold text-secondary uppercase tracking-wider">View Honors</span>
            </Link>

            {/* Global Exposure Snapshot */}
            <Link to="/global-exposure" className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-primary/20 transition-all group h-full flex flex-col">
            <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 bg-indigo-50 text-indigo-900 rounded-lg flex items-center justify-center">
                    <Globe size={20} />
                </div>
                <ArrowRight size={16} className="text-gray-300 group-hover:text-primary transition-colors" />
            </div>
            <h3 className="font-serif font-bold text-lg text-primary mb-2">Global Exposure</h3>
            <p className="text-sm text-gray-500 mb-6 flex-grow leading-relaxed">
                International academic engagements and cross-cultural experiences in Germany and Asia.
            </p>
            <span className="text-xs font-bold text-secondary uppercase tracking-wider">View Timeline</span>
            </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;