import React, { useState } from 'react';
import { Globe, MapPin, BookOpen, Users, Compass, X, ZoomIn, ChevronDown, ChevronUp } from 'lucide-react';

// --- Data Models ---

type ExposureCategory = 'Mobility' | 'Program';

interface ExposureImage {
  id: string;
  url: string;
  caption?: string;
}

interface ExposureItem {
  id: string;
  title: string;
  institutionOrLocation: string;
  duration: string;
  category: ExposureCategory;
  content: string[]; // Paragraphs
  images?: ExposureImage[];
}

interface CountryExperience {
  id: string;
  name: string;
  flag: string;
  description: string;
  images: ExposureImage[];
}

// --- Content Data ---

const programItems: ExposureItem[] = [
  {
    id: 'erasmus-training',
    title: 'Erasmus+ Sustainable Mindset Training',
    institutionOrLocation: 'Hungary',
    duration: '2024',
    category: 'Program',
    content: [
      "I participated in the Erasmus+ Sustainable Mindset Training program, which focused on sustainability practices, youth engagement, and community-level impact. The program emphasized collaborative learning through workshops and group activities."
    ],
    images: [] // Optional images if needed, keeping empty for now based on prompt focus
  },
  {
    id: 'asecu-winter',
    title: 'ASECU Youth Winter School',
    institutionOrLocation: 'Poland',
    duration: '2024',
    category: 'Program',
    content: [
      "I participated in the ASECU Youth Winter School, an international program focused on sustainability and regional challenges. Working in international groups helped strengthen my ability to communicate ideas across cultures."
    ],
    images: []
  }
];

const mobilityItems: ExposureItem[] = [
  {
    id: 'erasmus-icm',
    title: 'Erasmus+ International Credit Mobility (ICM)',
    institutionOrLocation: 'Mälardalens University, Sweden',
    duration: 'January 2024 – June 2024',
    category: 'Mobility',
    content: [
      "I studied at Mälardalens University as part of the Erasmus+ ICM program. This academic exchange allowed me to learn in an international classroom environment and gain exposure to different academic approaches."
    ],
    images: [
      { id: 'img-icm-1', url: 'https://placehold.co/800x600/e2e8f0/475569?text=Campus+Architecture', caption: 'Mälardalens University Campus' },
      { id: 'img-icm-2', url: 'https://placehold.co/800x600/e2e8f0/475569?text=Lecture+Hall', caption: 'Academic session in progress' },
      { id: 'img-icm-3', url: 'https://placehold.co/800x600/e2e8f0/475569?text=Group+Work', caption: 'International collaboration project' }
    ]
  }
];

const countryPlaceholderText = "This experience provided insight into local culture, daily life, and social contexts. Observing differences across countries helped broaden my perspective and adaptability in international environments.";

// Define source data separately to avoid complex inline mapping syntax
const rawCountryList = [
  { name: "Sweden", flag: "🇸🇪" },
  { name: "Poland", flag: "🇵🇱" },
  { name: "Hungary", flag: "🇭🇺" },
  { name: "Switzerland", flag: "🇨🇭" },
  { name: "Austria", flag: "🇦🇹" },
  { name: "Germany", flag: "🇩🇪" },
  { name: "Denmark", flag: "🇩🇰" },
  { name: "France", flag: "🇫🇷" },
  { name: "Luxembourg", flag: "🇱🇺" },
  { name: "Netherlands", flag: "🇳🇱" },
  { name: "Qatar", flag: "🇶🇦" }
];

const countryData: CountryExperience[] = rawCountryList.map((c) => ({
  id: "country-" + c.name.toLowerCase(),
  name: c.name,
  flag: c.flag,
  description: countryPlaceholderText,
  images: [
     { 
       id: "img-" + c.name.toLowerCase() + "-1", 
       url: "https://placehold.co/600x400/f1f5f9/64748b?text=Street+View", 
       caption: "Street view in " + c.name 
     },
     { 
       id: "img-" + c.name.toLowerCase() + "-2", 
       url: "https://placehold.co/600x400/f1f5f9/64748b?text=Landmark", 
       caption: "Landmark in " + c.name 
     }
  ]
}));

// --- Component ---

const GlobalExposure: React.FC = () => {
  // State for inline image viewing (Main Sections)
  const [viewingImage, setViewingImage] = useState<{itemId: string, image: ExposureImage} | null>(null);

  // State for expanded country text
  const [expandedCountryIds, setExpandedCountryIds] = useState<Record<string, boolean>>({});

  const toggleCountry = (id: string) => {
    setExpandedCountryIds(prev => ({...prev, [id]: !prev[id]}));
  };

  // Helper to render main sections (Mobility & Programs)
  const renderItem = (item: ExposureItem, Icon: React.ElementType) => {
    const isViewing = viewingImage?.itemId === item.id;

    return (
      <div key={item.id} className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 transition-all hover:shadow-md">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          
          {/* Icon Column */}
          <div className="hidden md:flex flex-shrink-0 w-12 h-12 bg-stone-50 text-primary rounded-lg items-center justify-center border border-stone-100">
            <Icon size={24} />
          </div>

          {/* Content Column */}
          <div className="flex-grow space-y-4">
            {/* Header */}
            <div>
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                <h3 className="text-xl font-serif font-bold text-primary">{item.title}</h3>
                <span className="text-sm font-medium text-gray-500 bg-stone-50 px-3 py-1 rounded-full border border-stone-100 whitespace-nowrap mt-2 md:mt-0 w-fit">
                   {item.duration}
                </span>
              </div>
              <div className="flex items-center gap-2 text-secondary font-medium">
                <MapPin size={16} />
                {item.institutionOrLocation}
              </div>
            </div>

            {/* Paragraphs */}
            <div className="text-gray-600 leading-relaxed text-lg space-y-4">
              {item.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Visuals Area (If present) */}
            {item.images && item.images.length > 0 && (
              <div className="mt-8 pt-6 border-t border-gray-50">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Visual Context</h4>
                
                {/* Thumbnails */}
                <div className="flex flex-wrap gap-4">
                  {item.images.map((img) => {
                    const isActive = viewingImage?.image.id === img.id;
                    return (
                      <button
                        key={img.id}
                        onClick={() => setViewingImage({ itemId: item.id, image: img })}
                        className={`relative group overflow-hidden rounded-lg border transition-all duration-300 w-32 h-24 ${
                           isActive ? 'ring-2 ring-primary ring-offset-2 border-transparent' : 'border-gray-200 hover:border-gray-300 hover:opacity-100 opacity-90'
                        }`}
                      >
                        <img src={img.url} alt={img.caption || ''} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                           {!isActive && <ZoomIn size={16} className="text-white opacity-0 group-hover:opacity-100 drop-shadow-md" />}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Inline Viewer */}
                {isViewing && viewingImage && (
                  <div className="mt-6 bg-stone-50 border border-stone-200 rounded-lg p-6 animate-in fade-in slide-in-from-top-4 duration-300 relative">
                    <button 
                      onClick={() => setViewingImage(null)}
                      className="absolute top-4 right-4 p-2 bg-white text-gray-400 hover:text-red-500 rounded-full border border-gray-200 shadow-sm transition-colors z-10"
                      aria-label="Close image"
                    >
                      <X size={18} />
                    </button>
                    <div className="flex flex-col items-center">
                      <img 
                        src={viewingImage.image.url} 
                        alt={viewingImage.image.caption || ''} 
                        className="max-w-full max-h-[600px] object-contain rounded shadow-lg"
                      />
                      <p className="mt-4 text-sm text-gray-500 italic font-medium bg-white px-4 py-2 rounded-full border border-gray-100">
                        {viewingImage.image.caption}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Helper for Country Blocks (Travel Section)
  const renderCountryBlock = (country: CountryExperience) => {
    const isExpanded = !!expandedCountryIds[country.id];

    return (
      <div key={country.id} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-gray-200 transition-all duration-300 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
             <h3 className="text-lg font-serif font-bold text-primary">{country.name}</h3>
             <span className="text-xl" role="img" aria-label={`Flag of ${country.name}`}>{country.flag}</span>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex flex-wrap gap-3 mb-4">
           {country.images.map(img => (
              <div 
                key={img.id}
                className={`relative rounded-md overflow-hidden border border-gray-200 transition-all duration-500 ease-in-out ${
                  isExpanded ? 'w-32 h-24' : 'w-16 h-12'
                }`}
              >
                 <img src={img.url} alt={img.caption || 'Travel photo'} className="w-full h-full object-cover" />
              </div>
           ))}
        </div>

        {/* Collapsible Description */}
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-3 mb-4">
              {country.description}
            </p>
        </div>

        {/* View More / Less Button */}
        <button 
          onClick={() => toggleCountry(country.id)}
          className="mt-auto self-start text-xs font-bold text-primary hover:text-secondary uppercase tracking-wider flex items-center gap-1 transition-colors"
        >
          {isExpanded ? (
            <>View less <ChevronUp size={12} /></>
          ) : (
            <>View more <ChevronDown size={12} /></>
          )}
        </button>
      </div>
    );
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in space-y-20">
      
      {/* Header */}
      <div className="border-b border-gray-100 pb-8">
        <h1 className="text-3xl font-serif font-bold text-primary mb-3">Global Exposure</h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          International academic, cultural, and experiential learning.
        </p>
      </div>

      {/* Section 1: Cross-Cultural Travel Experiences (Moved to Top) */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 text-primary border-b border-gray-100 pb-2 mb-6">
           <Compass size={20} className="text-amber-600" />
           <h2 className="text-2xl font-serif font-bold">Cross-Cultural Travel Experiences</h2>
        </div>
        
        {/* Intro Text */}
        <div className="bg-amber-50/50 rounded-lg p-6 border border-amber-100/50">
           <p className="text-lg text-gray-700 leading-relaxed font-serif italic">
            I have independently explored 11 countries across different regions. These experiences helped me develop cultural awareness and understand differences in daily life, social norms, and public systems across countries.
           </p>
        </div>

        {/* Country Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {countryData.map(country => renderCountryBlock(country))}
        </div>
      </section>

      {/* Section 2: International Programs & Training */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 text-primary border-b border-gray-100 pb-2 mb-6">
           <Users size={20} className="text-emerald-600" />
           <h2 className="text-2xl font-serif font-bold">International Programs & Training</h2>
        </div>
        <div className="space-y-8">
          {programItems.map(item => renderItem(item, Users))}
        </div>
      </section>

      {/* Section 3: Academic Mobility (Moved to Last) */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 text-primary border-b border-gray-100 pb-2 mb-6">
           <BookOpen size={20} className="text-indigo-600" />
           <h2 className="text-2xl font-serif font-bold">Academic Mobility</h2>
        </div>
        <div className="space-y-8">
          {mobilityItems.map(item => renderItem(item, Globe))}
        </div>
      </section>

    </div>
  );
};

export default GlobalExposure;