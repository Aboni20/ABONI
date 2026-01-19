import React from 'react';
import { ExternalLink, Github, Layers } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  link?: string;
  image: string;
}

const projectData: Project[] = [
  {
    title: "Urban Eco-Monitor",
    category: "IoT & Data Science",
    description: "A prototype system utilizing IoT sensors to monitor real-time air quality indices across university campus zones. The data is visualized on a dashboard to help administration optimize traffic flow and green spaces.",
    technologies: ["Python", "React", "Raspberry Pi", "Data Viz"],
    image: "https://picsum.photos/800/600?random=1"
  },
  {
    title: "SupplyChain Guard",
    category: "Blockchain",
    description: "Developed a smart contract based proof-of-concept to track pharmaceutical shipments transparently. Aims to reduce counterfeit drugs in the supply chain by providing an immutable ledger history.",
    technologies: ["Solidity", "Ethereum", "Web3.js"],
    image: "https://picsum.photos/800/600?random=2"
  },
  {
    title: "Market Insight AI",
    category: "Machine Learning",
    description: "An academic research tool that performs sentiment analysis on financial news headlines to correlate public sentiment with stock market volatility indices.",
    technologies: ["NLP", "TensorFlow", "Pandas"],
    image: "https://picsum.photos/800/600?random=3"
  }
];

const Projects: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 border-b border-gray-100 pb-8">
        <h1 className="text-3xl font-serif font-bold text-primary mb-4">Selected Projects</h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          A showcase of technical and research-oriented projects demonstrating practical application of theoretical concepts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <div key={index} className="group bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-full hover:shadow-md transition-all duration-300">
            <div className="h-48 overflow-hidden relative">
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <Layers size={14} className="text-secondary" />
                <span className="text-xs font-bold uppercase tracking-wider text-secondary">{project.category}</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{project.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span key={tech} className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded border border-gray-100">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-gray-50">
                   <button className="text-sm font-medium text-primary hover:text-secondary flex items-center gap-1 transition-colors">
                     <Github size={16} /> View Code
                   </button>
                   <button className="text-sm font-medium text-primary hover:text-secondary flex items-center gap-1 transition-colors">
                     <ExternalLink size={16} /> Live Demo
                   </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;