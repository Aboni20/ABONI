import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Award, Globe, Calendar, Filter, ChevronDown, ChevronUp, ZoomIn, X, MapPin } from 'lucide-react';

// --- Data Models ---

type AchievementType = 'International' | 'Home';

interface AchievementImage {
  id: string;
  url: string;
  caption: string;
}

interface Achievement {
  id: string;
  title: string;
  institution: string;
  location?: string; // e.g. "Sweden", "Poland"
  year: string; // Used for filtering
  displayDate: string; // Used for display
  type: AchievementType;
  summary: string;
  description: React.ReactNode;
  images: AchievementImage[];
}

// --- Content Data ---

const achievementsData: Achievement[] = [
  // International
  {
    id: 'erasmus-icm',
    title: 'Erasmus+ International Credit Mobility (ICM) Scholar',
    institution: 'Mälardalens University',
    location: 'Sweden',
    year: '2024',
    displayDate: 'January 2024 – June 2024',
    type: 'International',
    summary: 'Awarded the Erasmus+ ICM scholarship to study at Mälardalens University, Sweden, as part of an international academic exchange program.',
    description: 'This fully funded mobility program allowed me to study in an international academic environment and engage with students and faculty from diverse backgrounds. The experience strengthened my understanding of global academic systems and cross-cultural collaboration.',
    images: [
      { id: 'img-erasmus-1', url: 'https://placehold.co/800x600/e2e8f0/475569?text=Campus+Activity', caption: 'Academic engagement at Mälardalens University' },
      { id: 'img-erasmus-2', url: 'https://placehold.co/800x600/e2e8f0/475569?text=Exchange+Group', caption: 'International student cohort' }
    ]
  },
  {
    id: 'asecu-winter',
    title: 'ASECU Youth Winter School — Participant',
    institution: 'ASECU',
    location: 'Poland',
    year: '2024',
    displayDate: '2024',
    type: 'International',
    summary: 'Participated in the ASECU Youth Winter School focused on sustainability and climate resilience.',
    description: (
      <>
        Worked in international groups to discuss sustainability challenges and policy approaches related to climate resilience and regional development. For more details about this experience, see the <Link to="/global-exposure" className="text-primary font-semibold hover:underline">Global Exposure</Link> section.
      </>
    ),
    images: [
      { id: 'img-asecu-1', url: 'https://placehold.co/800x600/e2e8f0/475569?text=Workshop+Session', caption: 'Group discussion on sustainability policies' }
    ]
  },
  {
    id: 'erasmus-training',
    title: 'Erasmus+ Sustainable Mindset Training — Participant',
    institution: 'Erasmus+ Program',
    location: 'Hungary',
    year: '2024',
    displayDate: '2024',
    type: 'International',
    summary: 'Completed an Erasmus+ training program focused on sustainability practices and youth engagement.',
    description: (
      <>
        Participated in workshops and group activities centered on sustainability, leadership, and community-level impact. For more details about this experience, see the <Link to="/global-exposure" className="text-primary font-semibold hover:underline">Global Exposure</Link> section.
      </>
    ),
    images: [
      { id: 'img-training-1', url: 'https://placehold.co/800x600/e2e8f0/475569?text=Training+Activity', caption: 'Leadership workshop participation' }
    ]
  },
  // Home (formerly National)
  {
    id: 'brainmagneto-2025',
    title: 'Runner-Up — BrainMagneto IT Project Management Case Competition',
    institution: 'National Tech Carnival',
    year: '2025',
    displayDate: '2025',
    type: 'Home',
    summary: 'Developed a case solution focused on an AI-powered carbon footprint tracker for smart city contexts.',
    description: 'The case emphasized sustainability-driven decision-making and the role of technology in addressing environmental challenges.',
    images: [
      { id: 'img-brain-2025', url: 'https://placehold.co/800x600/f1f5f9/64748b?text=Presentation', caption: 'Final round presentation' }
    ]
  },
  {
    id: 'debate-2025',
    title: 'Runner-Up — Inter-Department Debate Competition',
    institution: 'University Debating Society',
    year: '2025',
    displayDate: '2025',
    type: 'Home',
    summary: 'Reached the finals in a university-level debate competition.',
    description: 'The competition strengthened my argumentation skills, critical thinking, and public speaking abilities.',
    images: [] // Optional images
  },
  {
    id: 'cis-tech-2025',
    title: 'Champion — CIS Tech Business Case Competition',
    institution: 'Computer Information Club',
    year: '2025',
    displayDate: '2025',
    type: 'Home',
    summary: 'Designed a sustainability-focused business model addressing challenges faced by small-scale farmers.',
    description: 'The case emphasized innovation, feasibility, and practical application of technology-supported solutions.',
    images: [
      { id: 'img-cis-2025', url: 'https://placehold.co/800x600/f1f5f9/64748b?text=Winning+Team', caption: 'Award ceremony' }
    ]
  },
  {
    id: 'brainmagneto-2023',
    title: 'Champion — BrainMagneto Project Management Case Competition',
    institution: 'Management Society',
    year: '2023',
    displayDate: '2023',
    type: 'Home',
    summary: 'Led a team to present a market entry strategy for an audiobook platform in Bangladesh.',
    description: 'The competition required structured problem-solving, teamwork, and clear presentation under time constraints.',
    images: [
      { id: 'img-brain-2023', url: 'https://placehold.co/800x600/f1f5f9/64748b?text=Award+Photo', caption: 'Receiving the championship award' }
    ]
  },
  {
    id: 'savoy-2022',
    title: 'Champion — Savoy Ice Cream Business Case Competition',
    institution: 'Marketing Club',
    year: '2022',
    displayDate: '2022',
    type: 'Home',
    summary: 'Presented innovative business strategies for complex market scenarios.',
    description: 'Focused on strategic analysis, creativity, and decision-making in business contexts.',
    images: []
  }
];

// --- Component ---

const Achievements: React.FC = () => {
  // Filters State
  const [filterType, setFilterType] = useState<'All' | AchievementType>('All');
  const [filterYear, setFilterYear] = useState<string>('All');

  // Interaction State
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});
  const [viewingImage, setViewingImage] = useState<{achievementId: string, image: AchievementImage} | null>(null);

  // Toggle Description
  const toggleExpand = (id: string) => {
    setExpandedIds(prev => ({ ...prev, [id]: !prev[id] }));
    // If collapsing, also close image viewer for that item if open
    if (expandedIds[id] && viewingImage?.achievementId === id) {
      setViewingImage(null);
    }
  };

  // Filter Logic
  const filteredAchievements = useMemo(() => {
    return achievementsData.filter(item => {
      const matchType = filterType === 'All' || item.type === filterType;
      const matchYear = filterYear === 'All' || item.year === filterYear;
      return matchType && matchYear;
    });
  }, [filterType, filterYear]);

  // Grouping for Display Priority
  const internationalItems = filteredAchievements.filter(a => a.type === 'International');
  const homeItems = filteredAchievements.filter(a => a.type === 'Home');

  const showInternational = internationalItems.length > 0;
  const showHome = homeItems.length > 0;

  // Reusable Card Component
  const AchievementCard = ({ item }: { item: Achievement }) => {
    const isExpanded = !!expandedIds[item.id];
    const isViewingImage = viewingImage?.achievementId === item.id;

    return (
      <div className={`bg-white rounded-xl border transition-all duration-300 ${
        isExpanded ? 'border-primary/20 shadow-md' : 'border-gray-100 shadow-sm hover:border-gray-200'
      }`}>
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
            <div>
              <div className="flex items-center gap-3 text-sm font-bold text-secondary uppercase tracking-wider mb-2">
                 <span className={`inline-flex items-center gap-1 ${item.type === 'International' ? 'text-indigo-600' : 'text-emerald-600'}`}>
                   {item.type === 'International' ? <Globe size={14} /> : <Award size={14} />}
                   {item.type}
                 </span>
                 <span className="text-gray-300">•</span>
                 <span className="flex items-center gap-1 text-gray-500">
                   <Calendar size={14} /> {item.displayDate}
                 </span>
              </div>
              <h3 className="text-xl font-serif font-bold text-primary leading-tight">
                {item.title}
              </h3>
              <p className="text-gray-500 font-medium mt-1 flex items-center gap-2">
                {item.institution}
                {item.location && (
                  <>
                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                    <span className="text-gray-400 flex items-center gap-1 text-sm font-normal"><MapPin size={12} /> {item.location}</span>
                  </>
                )}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {/* Summary / Description */}
            <div className="text-gray-600 leading-relaxed text-lg">
              <p>{item.summary}</p>
              
              <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                  <div className="pt-4 border-t border-gray-50 mt-4 text-gray-600">
                    {item.description}
                  </div>
                </div>
              </div>
            </div>

            {/* Inline Image Viewer */}
            {isViewingImage && viewingImage && (
              <div className="mt-6 bg-stone-50 border border-stone-200 rounded-lg p-4 animate-in fade-in zoom-in-95 duration-200 relative">
                 <button 
                  onClick={() => setViewingImage(null)}
                  className="absolute top-2 right-2 p-1.5 bg-white text-gray-400 hover:text-red-500 rounded-full border border-gray-200 hover:border-red-100 transition-colors z-10"
                >
                  <X size={16} />
                </button>
                <div className="flex flex-col items-center">
                  <img 
                    src={viewingImage.image.url} 
                    alt={viewingImage.image.caption} 
                    className="max-w-full max-h-[500px] object-contain rounded shadow-sm"
                  />
                  {viewingImage.image.caption && (
                    <p className="mt-3 text-sm text-gray-500 italic text-center">
                      {viewingImage.image.caption}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Thumbnails & Toggle Action */}
            <div className="flex items-end justify-between mt-6 pt-2">
               
               {/* Thumbnails Area */}
               <div className="flex gap-3">
                 {item.images.map((img) => {
                   // If this image is currently being viewed, we can dim the thumbnail or highlight it.
                   const isActive = viewingImage?.image.id === img.id;
                   
                   return (
                     <button
                       key={img.id}
                       onClick={() => {
                         // Open expand view if not already open to provide context
                         if (!isExpanded) setExpandedIds(prev => ({ ...prev, [item.id]: true }));
                         setViewingImage({ achievementId: item.id, image: img });
                       }}
                       className={`relative group overflow-hidden rounded-lg border transition-all duration-300 ${
                         isExpanded ? 'w-24 h-24' : 'w-16 h-16'
                       } ${isActive ? 'ring-2 ring-primary border-transparent opacity-100' : 'border-gray-200 opacity-90 hover:opacity-100'}`}
                       aria-label="View image"
                     >
                        <img src={img.url} alt="" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                          {!isActive && <ZoomIn size={16} className="text-white opacity-0 group-hover:opacity-100 drop-shadow-md" />}
                        </div>
                     </button>
                   );
                 })}
               </div>

               {/* Read More / Less Toggle */}
               <button 
                 onClick={() => toggleExpand(item.id)}
                 className="flex items-center gap-1 text-sm font-semibold text-primary hover:text-secondary transition-colors pl-4 py-2"
               >
                 {isExpanded ? (
                   <>Read less <ChevronUp size={14} /></>
                 ) : (
                   <>Read more <ChevronDown size={14} /></>
                 )}
               </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in min-h-screen">
      
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl font-serif font-bold text-primary mb-2">Achievements</h1>
        <p className="text-lg text-gray-600">
          Academic, competitive, and international recognitions.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="sticky top-20 z-30 bg-background/95 backdrop-blur-sm border-b border-gray-100 py-4 mb-12 flex flex-wrap gap-6 items-center">
        <div className="flex items-center gap-2 text-sm font-medium text-gray-500 mr-2">
          <Filter size={16} /> Filters:
        </div>
        
        {/* Type Filter */}
        <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-lg">
          {(['All', 'International', 'Home'] as const).map((type) => (
             <button
               key={type}
               onClick={() => setFilterType(type)}
               className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                 filterType === type 
                   ? 'bg-white text-primary shadow-sm' 
                   : 'text-gray-500 hover:text-gray-700'
               }`}
             >
               {type}
             </button>
          ))}
        </div>

        {/* Year Filter */}
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar mask-gradient-r">
          {(['All', '2025', '2024', '2023', '2022'] as const).map((year) => (
             <button
               key={year}
               onClick={() => setFilterYear(year)}
               className={`px-3 py-1.5 rounded-full text-xs font-bold border transition-all duration-200 whitespace-nowrap ${
                 filterYear === year 
                   ? 'bg-primary text-white border-primary' 
                   : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300'
               }`}
             >
               {year === 'All' ? 'All Years' : year}
             </button>
          ))}
        </div>
      </div>

      {/* Content Sections */}
      <div className="space-y-16">
        
        {/* No Results State */}
        {filteredAchievements.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg">No achievements found for the selected filters.</p>
          </div>
        )}

        {/* International Section (Priority) */}
        {showInternational && (
          <section className="animate-fade-in-up">
            <div className="flex items-center gap-3 mb-6">
               <Globe className="text-indigo-600" size={20} />
               <h2 className="text-xl font-bold text-primary">International Achievements</h2>
            </div>
            <div className="space-y-6">
              {internationalItems.map(item => (
                <AchievementCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        )}

        {/* Home Section */}
        {showHome && (
          <section className="animate-fade-in-up delay-100">
             <div className="flex items-center gap-3 mb-6">
               <Award className="text-emerald-600" size={20} />
               <h2 className="text-xl font-bold text-primary">Home Achievements</h2>
            </div>
            <div className="space-y-6">
              {homeItems.map(item => (
                <AchievementCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
};

export default Achievements;