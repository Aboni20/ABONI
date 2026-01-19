import React from 'react';
import { Mail, Linkedin, Instagram, ArrowUpRight, School, Users } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in space-y-16">
      
      {/* Page Title & Intro */}
      <div className="space-y-6 border-b border-gray-100 pb-8">
        <h1 className="text-3xl font-serif font-bold text-primary">Contact</h1>
        <p className="text-xl text-gray-700 font-serif italic max-w-3xl leading-relaxed">
          I am open to academic discussions, research-related conversations, and meaningful
          professional connections. The best way to reach me is via email.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* LEFT COLUMN: Email Addresses & Quick Actions */}
        <div className="space-y-12">
            
            {/* SECTION 1: Email Addresses */}
            <section className="space-y-8">
              <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-2">
                Email Addresses
              </h2>
              
              <div className="space-y-8">
                {/* Personal */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-2">Personal Email</h3>
                  <a 
                    href="mailto:irfatnuraboni71@gmail.com" 
                    className="text-lg font-medium text-primary hover:text-indigo-600 transition-colors break-all flex items-center gap-2 group"
                  >
                    <Mail size={18} className="text-gray-400 group-hover:text-indigo-600" />
                    irfatnuraboni71@gmail.com
                  </a>
                </div>

                {/* Academic */}
                <div className="space-y-6">
                  <h3 className="text-sm font-semibold text-gray-500 border-b border-gray-50 pb-1 w-fit">Academic Emails</h3>
                  
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Daffodil International University</p>
                    <a 
                      href="mailto:aboni22205191017@diu.edu.bd" 
                      className="text-lg font-medium text-primary hover:text-indigo-600 transition-colors break-all"
                    >
                      aboni22205191017@diu.edu.bd
                    </a>
                  </div>

                  <div>
                    <p className="text-sm text-gray-400 mb-1">Mälardalen University, Sweden</p>
                    <a 
                      href="mailto:iai24002@student.mdu.se" 
                      className="text-lg font-medium text-primary hover:text-indigo-600 transition-colors break-all"
                    >
                      iai24002@student.mdu.se
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3: Quick Email Actions (Moved here for better PC balance) */}
            <section className="bg-stone-50 p-6 rounded-xl border border-stone-100">
                <h2 className="text-lg font-bold text-primary mb-5 flex items-center gap-2">
                Quick Email Actions
                </h2>
                <div className="flex flex-col gap-3">
                {/* Personal */}
                <a 
                    href="mailto:irfatnuraboni71@gmail.com?subject=Website%20Inquiry"
                    className="group flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300"
                >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Mail size={18} />
                    </div>
                    <div className="flex flex-col">
                    <span className="font-bold text-gray-800 group-hover:text-primary transition-colors">Email me (Personal)</span>
                    <span className="text-xs text-gray-500 font-medium">For general inquiries</span>
                    </div>
                </a>

                {/* Academic */}
                <a 
                    href="mailto:aboni22205191017@diu.edu.bd,iai24002@student.mdu.se?subject=Academic%20Inquiry"
                    className="group flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-indigo-300 transition-all duration-300"
                >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <School size={18} />
                    </div>
                    <div className="flex flex-col">
                    <span className="font-bold text-gray-800 group-hover:text-primary transition-colors">Email me (Academic)</span>
                    <span className="text-xs text-gray-500 font-medium">To both university addresses</span>
                    </div>
                </a>

                {/* CC All */}
                <a 
                    href="mailto:irfatnuraboni71@gmail.com?cc=aboni22205191017@diu.edu.bd,iai24002@student.mdu.se&subject=Academic%20and%20Professional%20Inquiry"
                    className="group flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-300"
                >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Users size={18} />
                    </div>
                    <div className="flex flex-col">
                    <span className="font-bold text-gray-800 group-hover:text-primary transition-colors">Email me (CC all)</span>
                    <span className="text-xs text-gray-500 font-medium">Copy all personal & academic</span>
                    </div>
                </a>
                </div>
            </section>

        </div>

        {/* RIGHT COLUMN: Social Profiles */}
        <div className="space-y-12">
          
          {/* SECTION 2: Social Profiles */}
          <section className="space-y-6">
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-2">
              Social Profiles
            </h2>
            <div className="space-y-4">
              <a 
                href="https://linkedin.com/in/irfatnuraboni" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl border border-gray-200 bg-white hover:border-blue-200 hover:shadow-sm transition-all group"
              >
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Linkedin size={24} />
                </div>
                <div className="flex-grow">
                    <span className="block font-bold text-primary text-lg group-hover:text-blue-700 transition-colors">LinkedIn</span>
                    <span className="text-sm text-gray-500">Professional Profile</span>
                </div>
                <ArrowUpRight size={18} className="text-gray-300 group-hover:text-blue-500 transition-colors" />
              </a>

              <a 
                href="https://www.instagram.com/aboni.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl border border-gray-200 bg-white hover:border-pink-200 hover:shadow-sm transition-all group"
              >
                <div className="w-12 h-12 bg-pink-50 text-pink-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                    <Instagram size={24} />
                </div>
                <div className="flex-grow">
                    <span className="block font-bold text-primary text-lg group-hover:text-pink-600 transition-colors">Instagram</span>
                    <span className="text-sm text-gray-500">@aboni.in</span>
                </div>
                <ArrowUpRight size={18} className="text-gray-300 group-hover:text-pink-500 transition-colors" />
              </a>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Contact;