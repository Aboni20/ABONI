import React, { useState } from 'react';
import { Briefcase, Users, ChevronDown, ChevronUp, Calendar } from 'lucide-react';

// --- Data Models ---

interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  duration: string;
  summary: string;
  details: string[];
}

// --- Content Data ---

const professionalData: ExperienceItem[] = [
  {
    id: 'garena',
    role: 'Community Moderator (Voluntary)',
    organization: 'Garena Free Fire – Bangladesh',
    duration: 'November 2021 – November 2023',
    summary: 'Worked with gaming communities to support engagement, moderation, and feedback collection for localized digital platforms.',
    details: [
      'Moderated online community platforms to maintain a positive and engaging environment for players.',
      'Collected user feedback and shared insights with internal teams to improve campaigns and user experience.',
      'Communicated with community members through social platforms to understand preferences and build trust.',
      'Supported localization tasks including translation, copywriting, and content adaptation.',
      'Acted as a bridge between the player community and internal teams.'
    ]
  },
  {
    id: 'pacemaker',
    role: 'Marketing and Strategic Executive',
    organization: 'Pacemaker Academic & Admission Care',
    duration: 'June 2023 – August 2023',
    summary: 'Supported marketing, content creation, and event-based engagement initiatives.',
    details: [
      'Created content for social media pages and student communities.',
      'Planned and organized engagement activities such as quizzes and contests.',
      'Assisted with online class coordination and announcements.',
      'Collected student feedback and monitored engagement.',
      'Researched competitor activities to support strategy improvement.'
    ]
  },
  {
    id: '10ms',
    role: 'Affiliate Marketing Coordinator',
    organization: '10 Minute School (EdTech Platform)',
    duration: 'November 2022 – March 2023',
    summary: 'Supported affiliate marketing activities and social media campaigns for a leading EdTech platform in Bangladesh.',
    details: [
      'Managed affiliate relationships and supported daily social media listings.',
      'Coordinated multiple social media campaigns and ensured partner participation.',
      'Attended meetings with platform owners to support growth targets.',
      'Onboarded new platform administrators as affiliates.'
    ]
  }
];

const volunteerData: ExperienceItem[] = [
  {
    id: 'itm-club',
    role: 'President',
    organization: 'ITM Club, Daffodil International University',
    duration: 'December 2024 – Present',
    summary: 'Leading departmental student organization activities and academic events.',
    details: [
      'Lead strategic planning and coordination of departmental initiatives.',
      'Organize academic and technology-focused events.',
      'Successfully led ITM Summit 2025, overseeing planning and execution of a national-level academic event.',
      'Coordinate teams and manage communication across stakeholders.'
    ]
  },
  {
    id: 'ndf',
    role: 'Deputy Director (Content)',
    organization: 'National Debate Federation Bangladesh',
    duration: 'December 2023 – Present',
    summary: 'Leading content development for debate events and academic initiatives.',
    details: [
      'Lead content planning for special events and national debate programs.',
      'Create structured social media and event-related content.',
      'Assist in event proposals, scheduling, and execution.',
      'Progressed through roles over an extended period, contributing to nationwide debate initiatives.'
    ]
  },
  {
    id: 'brighters',
    role: 'Volunteer Advocate',
    organization: 'Brighters Society Bangladesh',
    duration: 'December 2023 – Present',
    summary: 'Engaged in climate advocacy and sustainability-focused community initiatives.',
    details: [
      'Supported awareness campaigns on sustainability and climate action.',
      'Participated in advocacy initiatives promoting environmentally responsible practices.',
      'Contributed to youth engagement in climate-related discussions.'
    ]
  },
  {
    id: 'higgsino',
    role: 'Head of Public Relations',
    organization: 'Higgsino Science Society',
    duration: 'August 2022 – August 2023',
    summary: 'Led public relations and communication activities for a student science organization.',
    details: [
      'Managed communication strategies and stakeholder relationships.',
      'Coordinated media and outreach activities.',
      'Served as Organizing Committee Member for the National Biology Olympiad.',
      'Contributed to achieving over 10,000 participant registrations.'
    ]
  }
];

// --- Component ---

const ExperienceCard: React.FC<{ item: ExperienceItem }> = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`bg-white rounded-xl border transition-all duration-300 ${expanded ? 'border-primary/20 shadow-md' : 'border-gray-100 shadow-sm hover:border-gray-200'}`}>
      <div className="p-6 md:p-8">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-3">
          <div>
            <h3 className="text-xl font-serif font-bold text-primary">{item.role}</h3>
            <p className="text-base font-medium text-secondary mt-1">{item.organization}</p>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-gray-500 bg-stone-50 px-3 py-1 rounded-full border border-stone-100 whitespace-nowrap self-start">
            <Calendar size={14} />
            {item.duration}
          </div>
        </div>

        {/* Summary */}
        <p className="text-gray-600 leading-relaxed text-lg mb-2">
          {item.summary}
        </p>

        {/* Expanded Content */}
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
           <div className="pt-4 mt-2 border-t border-gray-50">
              <ul className="space-y-3">
                {item.details.map((detail, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-600 leading-relaxed text-base group">
                     <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2.5 flex-shrink-0 group-hover:bg-primary transition-colors"></span>
                     <span>{detail}</span>
                  </li>
                ))}
              </ul>
           </div>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 flex items-center gap-1 text-sm font-bold text-primary hover:text-secondary transition-colors uppercase tracking-wide"
        >
          {expanded ? (
            <>See less <ChevronUp size={14} /></>
          ) : (
            <>See more <ChevronDown size={14} /></>
          )}
        </button>
      </div>
    </div>
  );
};

const ProfessionalExperience: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in space-y-16">
      
      {/* Page Header */}
      <div className="border-b border-gray-100 pb-8">
        <h1 className="text-3xl font-serif font-bold text-primary mb-3">Experience</h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Professional experience and organizational involvement.
        </p>
      </div>

      {/* Section 1: Professional Experience */}
      <section className="space-y-8 animate-fade-in-up">
        <div className="flex items-center gap-3 text-primary border-b border-gray-100 pb-2 mb-6">
           <Briefcase size={22} className="text-indigo-600" />
           <h2 className="text-2xl font-serif font-bold">Professional Experience</h2>
        </div>
        <div className="space-y-6">
          {professionalData.map(item => (
            <ExperienceCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Section 2: Volunteer Work */}
      <section className="space-y-8 animate-fade-in-up delay-100">
        <div className="flex items-center gap-3 text-primary border-b border-gray-100 pb-2 mb-6">
           <Users size={22} className="text-emerald-600" />
           <h2 className="text-2xl font-serif font-bold">Volunteer Work & Organizational Involvement</h2>
        </div>
        <div className="space-y-6">
          {volunteerData.map(item => (
            <ExperienceCard key={item.id} item={item} />
          ))}
        </div>
      </section>

    </div>
  );
};

export default ProfessionalExperience;