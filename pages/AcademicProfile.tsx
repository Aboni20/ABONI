import React, { useState } from 'react';
import { GraduationCap, Globe, FileText, X, ZoomIn, School, ChevronDown, ChevronUp } from 'lucide-react';

// Data Models
interface Document {
  id: string;
  title: string;
  type: string;
  thumbnailUrl: string;
  fullUrl: string;
}

interface AcademicSectionData {
  id: string;
  title: string;
  institution: string;
  duration?: string;
  summary: string;
  details?: string;
  gradeInfo?: string;
  icon: React.ElementType;
  iconColorClass: string;
  iconBgClass: string;
  documents: Document[];
}

// Content Configuration
const academicSections: AcademicSectionData[] = [
  {
    id: 'bachelor',
    title: 'Bachelor of Science in Information Technology and Management',
    institution: 'Daffodil International University, Bangladesh',
    duration: 'August 2022 – Present',
    gradeInfo: 'Current average CGPA: 3.92 / 4.00',
    summary: 'I am currently pursuing a Bachelor of Science in Information Technology and Management. My studies focus on understanding how digital systems and management practices support organizational decision-making.',
    details: `Through coursework and applied projects, I work with digital platforms and data-driven approaches to understand how organizations operate and make decisions. I am particularly interested in exploring how AI-driven solutions can be used to solve real-world problems in a more sustainable way.

Alongside my academic coursework, I am working on applied projects such as AI-supported sustainability initiatives, including projects like Green D, where I explore how technology can support environmentally responsible decision-making.`,
    icon: GraduationCap,
    iconColorClass: 'text-blue-900',
    iconBgClass: 'bg-blue-50 border-blue-100',
    documents: [
      {
        id: 'bach-transcript',
        title: 'Undergraduate Transcript',
        type: 'Academic Record',
        thumbnailUrl: 'https://placehold.co/150x210/f1f5f9/94a3b8?text=Transcript',
        fullUrl: 'https://placehold.co/600x840/ffffff/334155?text=Official+Transcript+(Bachelor)',
      },
      {
        id: 'bach-summary',
        title: 'Enrollment Summary',
        type: 'Official Record',
        thumbnailUrl: 'https://placehold.co/210x150/f1f5f9/94a3b8?text=Summary',
        fullUrl: 'https://placehold.co/800x600/ffffff/334155?text=Enrollment+Summary',
      }
    ]
  },
  {
    id: 'erasmus',
    title: 'Erasmus+ International Credit Mobility (ICM) — Exchange Semester',
    institution: 'Mälardalens University, Sweden',
    duration: 'January 2024 – June 2024',
    summary: 'During my Erasmus+ exchange semester at Mälardalens University, I studied at the School of Innovation, Design and Engineering (IDT). This experience allowed me to learn in an international academic environment and work closely with students from different countries.',
    details: `As part of my coursework, we worked on practical case-based projects. One of these focused on how a jute-based business could be developed by sourcing raw materials from Bangladesh and operating in a European market like Sweden. This project helped me understand internationalization, supply chains, and how sustainable local resources can be connected to global business models.

In my Artificial Intelligence course, I worked on a project related to bird identification, where I explored how AI techniques can be applied to recognize and classify bird species. This project helped me understand how AI can be used in environmental and ecological contexts.`,
    icon: Globe,
    iconColorClass: 'text-indigo-900',
    iconBgClass: 'bg-indigo-50 border-indigo-100',
    documents: [
      {
        id: 'erasmus-transcript',
        title: 'Erasmus Transcript',
        type: 'Academic Record',
        thumbnailUrl: 'https://placehold.co/150x210/f1f5f9/94a3b8?text=Transcript',
        fullUrl: 'https://placehold.co/600x840/ffffff/334155?text=Erasmus+Transcript',
      },
      {
        id: 'erasmus-cert',
        title: 'Participation Certificate',
        type: 'Certificate',
        thumbnailUrl: 'https://placehold.co/210x150/f1f5f9/94a3b8?text=Certificate',
        fullUrl: 'https://placehold.co/800x600/ffffff/334155?text=Participation+Certificate',
      }
    ]
  },
  {
    id: 'hsc',
    title: 'Higher Secondary School Certificate (Science)',
    institution: 'Chuadanga Government College, Bangladesh',
    duration: '2019 – 2022',
    gradeInfo: 'GPA: 5.00 / 5.00',
    summary: 'I completed my Higher Secondary Education in the Science stream at Chuadanga Government College.',
    details: 'This stage of my education built a strong foundation in scientific thinking, problem-solving, and analytical skills.',
    icon: School,
    iconColorClass: 'text-emerald-900',
    iconBgClass: 'bg-emerald-50 border-emerald-100',
    documents: [
      {
        id: 'hsc-cert',
        title: 'HSC Certificate',
        type: 'Certificate',
        thumbnailUrl: 'https://placehold.co/210x150/f1f5f9/94a3b8?text=Certificate',
        fullUrl: 'https://placehold.co/800x600/ffffff/334155?text=HSC+Certificate',
      },
      {
        id: 'hsc-transcript',
        title: 'HSC Transcript',
        type: 'Academic Record',
        thumbnailUrl: 'https://placehold.co/150x210/f1f5f9/94a3b8?text=Transcript',
        fullUrl: 'https://placehold.co/600x840/ffffff/334155?text=HSC+Transcript',
      }
    ]
  },
  {
    id: 'ssc',
    title: 'Secondary School Certificate (Science)',
    institution: 'Victoria Jubilee Government High School, Chuadanga, Bangladesh',
    duration: '2019',
    gradeInfo: 'GPA: 5.00 / 5.00',
    summary: 'I completed my Secondary School Education in Science at Victoria Jubilee Government High School, Chuadanga.',
    details: 'This period helped shape my interest in science and structured learning and prepared me for higher academic study.',
    icon: School,
    iconColorClass: 'text-amber-900',
    iconBgClass: 'bg-amber-50 border-amber-100',
    documents: [
      {
        id: 'ssc-cert',
        title: 'SSC Certificate',
        type: 'Certificate',
        thumbnailUrl: 'https://placehold.co/210x150/f1f5f9/94a3b8?text=Certificate',
        fullUrl: 'https://placehold.co/800x600/ffffff/334155?text=SSC+Certificate',
      },
      {
        id: 'ssc-transcript',
        title: 'SSC Transcript',
        type: 'Academic Record',
        thumbnailUrl: 'https://placehold.co/150x210/f1f5f9/94a3b8?text=Transcript',
        fullUrl: 'https://placehold.co/600x840/ffffff/334155?text=SSC+Transcript',
      }
    ]
  }
];

const AcademicProfile: React.FC = () => {
  // We track the globally active document ID to ensure only one viewer is open at a time
  const [activeDocId, setActiveDocId] = useState<string | null>(null);
  
  // Track expanded state for text descriptions
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (id: string) => {
    setExpandedSections(prev => ({...prev, [id]: !prev[id]}));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in space-y-20">
      
      {/* Page Header */}
      <div className="border-b border-gray-100 pb-8">
        <h1 className="text-3xl font-serif font-bold text-primary mb-3">Academic Profile</h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          An overview of my formal education and international academic engagements.
        </p>
      </div>

      {/* Sections Loop */}
      <div className="space-y-24">
        {academicSections.map((section) => {
          // Check if this section contains the currently active document
          const activeDoc = section.documents.find(doc => doc.id === activeDocId);
          const Icon = section.icon;
          const isExpanded = !!expandedSections[section.id];

          return (
            <div key={section.id} className="group">
              
              {/* Contextual Grid */}
              <div className="grid lg:grid-cols-12 gap-12 items-start">
                
                {/* LEFT COLUMN: Academic Narrative (~70%) */}
                <div className="lg:col-span-8 space-y-8">
                  <div className="flex gap-5 items-start">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border ${section.iconBgClass} ${section.iconColorClass}`}>
                      <Icon size={24} />
                    </div>
                    <div className="space-y-2 flex-grow">
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <h2 className="text-2xl font-serif font-bold text-primary leading-tight">
                            {section.title}
                          </h2>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 mt-1.5 text-secondary font-medium text-lg">
                            <p>{section.institution}</p>
                            {section.duration && (
                                <>
                                <span className="hidden sm:inline text-gray-300">•</span>
                                <p className="text-sm text-gray-500">{section.duration}</p>
                                </>
                            )}
                        </div>

                        {section.gradeInfo && (
                          <div className="mt-2">
                             <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-100">
                               {section.gradeInfo}
                             </span>
                          </div>
                        )}
                      </div>
                      
                      <div className="pt-3">
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {section.summary}
                        </p>
                        
                        {section.details && (
                          <>
                            <div className={`mt-4 text-gray-600 leading-relaxed text-lg whitespace-pre-line overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'opacity-100 max-h-[1000px]' : 'opacity-0 max-h-0'}`}>
                              {section.details}
                            </div>
                            <button 
                              onClick={() => toggleSection(section.id)}
                              className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-secondary transition-colors group/btn"
                            >
                              {isExpanded ? (
                                <>Read less <ChevronUp size={14} /></>
                              ) : (
                                <>Read more <ChevronDown size={14} /></>
                              )}
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* INLINE VIEWER (Conditionally Rendered within Left Column) */}
                  {activeDoc && (
                    <div className="mt-8 bg-stone-50 border border-stone-200 rounded-xl p-6 shadow-inner animate-in fade-in slide-in-from-top-4 duration-300">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-2 text-primary font-bold">
                          <FileText size={18} />
                          <span>{activeDoc.title}</span>
                        </div>
                        <button 
                          onClick={() => setActiveDocId(null)}
                          className="flex items-center gap-1 text-sm text-gray-500 hover:text-primary transition-colors px-3 py-1.5 rounded-full hover:bg-gray-200"
                        >
                          <X size={16} /> Close Preview
                        </button>
                      </div>
                      <div className="bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden flex justify-center p-8">
                        <img 
                          src={activeDoc.fullUrl} 
                          alt={`Full preview of ${activeDoc.title}`} 
                          className="max-w-full h-auto object-contain max-h-[600px] shadow-lg"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* RIGHT COLUMN: Contextual Attachments (~30%) */}
                <div className="lg:col-span-4 pl-0 lg:pl-8 lg:border-l lg:border-gray-100">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-6 flex items-center gap-2">
                    <FileText size={14} /> Relevant Documents
                  </h3>
                  
                  <div className="space-y-4">
                    {section.documents.map((doc) => (
                      <button
                        key={doc.id}
                        onClick={() => setActiveDocId(activeDocId === doc.id ? null : doc.id)}
                        className={`w-full text-left p-3 rounded-lg border transition-all duration-200 group/item flex items-start gap-4 ${
                          activeDocId === doc.id 
                            ? 'bg-blue-50/50 border-blue-200 ring-1 ring-blue-100' 
                            : 'bg-white border-gray-100 hover:border-gray-300 hover:shadow-sm'
                        }`}
                      >
                        {/* Thumbnail */}
                        <div className="w-14 h-16 bg-gray-50 border border-gray-200 rounded overflow-hidden flex-shrink-0 relative">
                          <img 
                            src={doc.thumbnailUrl} 
                            alt="" 
                            className="w-full h-full object-cover opacity-90 group-hover/item:opacity-100 transition-opacity" 
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover/item:bg-black/5 transition-colors">
                             {activeDocId !== doc.id && <ZoomIn size={16} className="text-gray-600 opacity-0 group-hover/item:opacity-100 transform scale-75 group-hover/item:scale-100 transition-all" />}
                          </div>
                        </div>

                        {/* Text */}
                        <div className="py-1">
                          <h4 className={`text-sm font-bold leading-tight transition-colors ${
                            activeDocId === doc.id ? 'text-primary' : 'text-gray-700 group-hover/item:text-primary'
                          }`}>
                            {doc.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">{doc.type}</p>
                          {activeDocId === doc.id && (
                            <span className="text-xs text-blue-600 font-medium mt-2 block animate-pulse">
                              Viewing inline...
                            </span>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
      
    </div>
  );
};

export default AcademicProfile;