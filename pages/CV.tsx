import React from 'react';
import { Download } from 'lucide-react';

const CV: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      
      {/* New Hero Banner Section */}
      <div className="max-w-5xl mx-auto mb-10">
        <div className="bg-primary rounded-2xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-6 shadow-md text-white">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2 tracking-tight">Curriculum Vitae</h1>
            <p className="text-white/70 text-sm font-medium uppercase tracking-wider">Last updated: February 2026</p>
          </div>
          <a 
            href="/placeholder-cv.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary px-8 py-3.5 rounded-lg font-bold shadow-sm hover:bg-gray-50 hover:scale-105 transition-all flex items-center gap-2.5"
          >
            <Download size={18} />
            Download PDF
          </a>
        </div>
      </div>

      {/* CV Document Container */}
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden text-gray-800 border border-gray-100">
        
        {/* Header Section */}
        <div className="p-8 md:p-12 border-b border-gray-100 flex flex-col md:flex-row gap-8 items-start justify-between bg-white">
          <div className="flex items-start gap-6 w-full">
             <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gray-50 shadow-sm flex-shrink-0">
                  <img 
                    src="/images/profile/profile.jpg?v=2" 
                    alt="Irfat Nur Aboni" 
                    className="w-full h-full object-cover" 
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null; // Prevent infinite loop
                      target.src = "https://placehold.co/200x200/e2e8f0/475569?text=Profile";
                    }}
                  />
             </div>
             <div className="flex-grow">
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 uppercase tracking-tight">Irfat Nur Aboni</h1>
                <div className="mt-4 space-y-1 text-gray-600">
                    <p className="flex flex-wrap items-center gap-2">
                       <span className="font-semibold text-gray-900">Email address:</span> 
                       <a href="mailto:aboni22205191017@diu.edu.bd" className="hover:text-primary underline decoration-gray-300 underline-offset-2 break-all">aboni22205191017@diu.edu.bd</a>
                    </p>
                </div>
             </div>
          </div>
        </div>

        <div className="p-8 md:p-12 space-y-10">
            
            {/* ABOUT MYSELF */}
            <section>
                <h2 className="text-lg font-extrabold text-blue-900 uppercase tracking-wider mb-6 flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-900"></span>
                    About Myself
                </h2>
                <div className="text-gray-700 leading-relaxed text-justify space-y-4">
                    <p>
                        I am a bachelor’s student in Information Technology and Management, with an academic background that combines applied information technology with management and project-based coursework. My studies focus on understanding how technology is used in business, organisational, and academic contexts.
                    </p>
                    <p>
                        Alongside my academic studies, I have actively participated in business case competitions and project management competitions, where I worked on structured problem-solving, case preparation, and solution presentation under evaluation settings. I am also involved in debate, which has helped me develop critical thinking, clear argumentation, and confident communication.
                    </p>
                    <p>
                        I have gained international exposure through an Erasmus+ exchange semester in Sweden, as well as participation in international programmes and training activities in Europe. In addition, I have been involved in academic mentoring, student leadership, and collaborative academic activities. My interests include developing sustainable infrastructure for businesses and exploring how technology can be made more adaptable to changing organisational and societal needs in the modern era
                    </p>
                </div>
            </section>

            {/* EDUCATION & TRAINING */}
            <section>
                <h2 className="text-lg font-extrabold text-blue-900 uppercase tracking-wider mb-6 flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-900"></span>
                    Education & Training
                </h2>
                
                <div className="space-y-8">
                    {/* Item 1 */}
                    <div>
                        <div className="text-sm text-gray-500 font-medium mb-1">01/07/2022 - Current | DHAKA, BANGLADESH</div>
                        <h3 className="text-lg font-bold text-gray-900">BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY AND MANAGEMENT</h3>
                        <div className="text-primary font-serif font-semibold mb-3">DAFFODIL INTERNATIONAL UNIVERSITY, BANGLADESH</div>
                        <p className="text-gray-700 mb-2">
                            Bachelor’s programme in Information Technology and Management, combining applied technology with management and project-based coursework.
                        </p>
                        <p className="text-gray-700 mb-2">
                            The curriculum focuses on management information systems, project management, business analytics, and organisational applications of IT, supported by foundational courses in accounting, economics, and statistics.
                        </p>
                        <div className="text-gray-800 font-medium bg-gray-50 inline-block px-3 py-1 rounded mt-1 text-sm">
                            Current CGPA: 3.92/4.00 | Expected graduation: June 2026.
                        </div>
                        <div className="text-sm text-gray-500 mt-2">Level in EQF: 6</div>
                    </div>

                    {/* Item 2 */}
                    <div>
                        <div className="text-sm text-gray-500 font-medium mb-1">10/01/2024 - 07/06/2024 | VÄSTERÅS, SWEDEN</div>
                        <h3 className="text-lg font-bold text-gray-900">ERASMUS+ INTERNATIONAL CREDIT MOBILITY (ICM) – EXCHANGE SEMESTER</h3>
                        <div className="text-primary font-serif font-semibold mb-3">MÄLARDALEN UNIVERSITY, SWEDEN</div>
                        <p className="text-gray-700 mb-2">
                            Completed a 30 ECTS exchange semester at Mälardalen University. Courses completed include Artificial Intelligence 2; The Internationalisation Process of Companies; Smart Digital Platforms, Cloud Computing, Security and Big Data; and Swedish for Foreign Students Level 1.
                        </p>
                        <div className="text-sm text-gray-500 mt-2">Level in EQF: 6</div>
                    </div>
                </div>
            </section>

             {/* WORK EXPERIENCE */}
             <section>
                <h2 className="text-lg font-extrabold text-blue-900 uppercase tracking-wider mb-6 flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-900"></span>
                    Work Experience
                </h2>
                
                <div className="space-y-8">
                    {/* Item 1 */}
                    <div>
                        <div className="text-sm text-gray-500 font-medium mb-1">10/01/2026 - CURRENT | DHAKA, BANGLADESH</div>
                        <h3 className="text-lg font-bold text-gray-900">ACADEMIC MENTOR</h3>
                        <div className="text-primary font-serif font-semibold mb-3">DEPARTMENT OF ITM, DAFFODIL INTERNATIONAL UNIVERSITY, BANGLADESH</div>
                        <p className="text-gray-700 mb-3">
                            Currently serve as an academic mentor in the Academic Mentorship Program under departmental supervision, dedicating approximately 18 hours per week. Responsibilities include:
                        </p>
                        <ul className="list-disc list-outside ml-4 text-gray-700 space-y-1">
                            <li>Deliver practice-based sessions on presentation design, case preparation, spoken English, and effective use of AI-based tools, aligned with ITM course requirements.</li>
                            <li>Provide individual mentoring and counselling on academic communication, presentation performance, and AI-supported academic projects and basic application development.</li>
                        </ul>
                    </div>

                    {/* Item 2 */}
                    <div>
                        <div className="text-sm text-gray-500 font-medium mb-1">20/11/2022 - 31/03/2023 | DHAKA, BANGLADESH</div>
                        <h3 className="text-lg font-bold text-gray-900">AFFILIATE MARKETING COORDINATOR</h3>
                        <div className="text-primary font-serif font-semibold mb-3">10 MINUTE SCHOOL</div>
                        <p className="text-gray-700 mb-3">
                            Served in the sales and marketing team of Bangladesh’s leading EdTech platform, coordinating affiliate partnerships and marketing activations. Responsibilities include:
                        </p>
                         <ul className="list-disc list-outside ml-4 text-gray-700 space-y-1">
                            <li>Managed affiliate relationships and supported daily social media listing and updates.</li>
                            <li>Coordinated 2–3 social media campaigns and ensured partner participation.</li>
                            <li>Attended meetings with platform owners to strengthen collaborations and meet activation goals.</li>
                            <li>Approached and onboarded new platform admins as affiliates to expand the network.</li>
                        </ul>
                    </div>

                    {/* Item 3 */}
                    <div>
                        <div className="text-sm text-gray-500 font-medium mb-1">20/11/2021 - 20/11/2023 | DHAKA, BANGLADESH</div>
                        <h3 className="text-lg font-bold text-gray-900">ONLINE CONTENT AND COMMUNITY MANAGER</h3>
                        <div className="text-primary font-serif font-semibold mb-3">GARENA FREE FIRE BANGLADESH</div>
                        <p className="text-gray-700 mb-3">
                            Worked closely with gamers to keep the team informed about trending topics and community needs. (Voluntary Role under the supervision of Country Management). Responsibilities include:
                        </p>
                         <ul className="list-disc list-outside ml-4 text-gray-700 space-y-1">
                            <li>Managed and moderated social media platforms, ensuring a positive and engaging environment for players.</li>
                            <li>Collected user feedback and shared key insights with the management team to improve campaigns and player experience.</li>
                            <li>Communicated with players through Facebook, WhatsApp, and Messenger to understand preferences and build trust.</li>
                            <li>Supported localisation projects, including translation, partner evaluation, and copywriting.</li>
                        </ul>
                    </div>
                </div>
             </section>

             {/* HONOURS AND AWARDS */}
             <section>
                <h2 className="text-lg font-extrabold text-blue-900 uppercase tracking-wider mb-6 flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-900"></span>
                    Honours and Awards
                </h2>
                <div className="space-y-6">
                    {/* 1 */}
                    <div className="flex flex-col sm:flex-row sm:gap-4 items-start">
                        <div className="min-w-[100px] text-sm text-gray-500 pt-1 font-medium sm:text-right">01/06/2024</div>
                        <div>
                             <h3 className="text-base font-bold text-gray-900">Participant, Sustainable Mindset Training, Hungary</h3>
                             <div className="text-sm text-gray-500 mb-1">ReCreativity Social Enterprise</div>
                             <p className="text-gray-700 text-sm">Participated in an international training focused on sustainability and environmental awareness. Contributed to group discussions, collaborative activities, and role-play-based presentations, including a short theatrical performance used to communicate sustainability-related themes. The training was completed with Youthpass certification.</p>
                        </div>
                    </div>
                     {/* 2 */}
                    <div className="flex flex-col sm:flex-row sm:gap-4 items-start">
                        <div className="min-w-[100px] text-sm text-gray-500 pt-1 font-medium sm:text-right">26/03/2024</div>
                        <div>
                             <h3 className="text-base font-bold text-gray-900">Participant, ASECU Youth Winter School, Poland</h3>
                             <div className="text-sm text-gray-500 mb-1">ASECU Youth | Association of Economics Students</div>
                             <p className="text-gray-700 text-sm">Participated in an international academic winter school focused on sustainability, regional cooperation, and development; collaborated with a global cohort to address complex regional challenges</p>
                        </div>
                    </div>
                     {/* 3 */}
                    <div className="flex flex-col sm:flex-row sm:gap-4 items-start">
                        <div className="min-w-[100px] text-sm text-gray-500 pt-1 font-medium sm:text-right">01/12/2025</div>
                        <div>
                             <h3 className="text-base font-bold text-gray-900">1st Runner-Up, AI Fest 2025 Project Showcase</h3>
                             <div className="text-sm text-gray-500 mb-1">Daffodil International University</div>
                             <p className="text-gray-700 text-sm">
                                Developed an AI powered web application integrating smart home features with a carbon footprint calculation system based on everyday usage. The project focused on sustainability-orientated design, AI based automation, and data-driven emission tracking. A live project demo is available at <a href="https://greend.vercel.app/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://greend.vercel.app/</a>, with additional integrations and external APIs enabled upon request.
                             </p>
                        </div>
                    </div>
                    {/* 4 */}
                    <div className="flex flex-col sm:flex-row sm:gap-4 items-start">
                        <div className="min-w-[100px] text-sm text-gray-500 pt-1 font-medium sm:text-right">02/08/2025</div>
                        <div>
                             <h3 className="text-base font-bold text-gray-900">1st Runner-Up, BrainMagneto – IT Project Management Case Competition</h3>
                             <div className="text-sm text-gray-500 mb-1">Daffodil International University</div>
                             <p className="text-gray-700 text-sm">Proposed an AI based carbon footprint tracking solution for smart city applications, with emphasis on sustainability, innovation, and project feasibility. The proposed solution was later developed by us.</p>
                        </div>
                    </div>
                     {/* 5 */}
                    <div className="flex flex-col sm:flex-row sm:gap-4 items-start">
                        <div className="min-w-[100px] text-sm text-gray-500 pt-1 font-medium sm:text-right">23/02/2025</div>
                        <div>
                             <h3 className="text-base font-bold text-gray-900">Champion, CIS Tech Business Case Competition</h3>
                             <div className="text-sm text-gray-500 mb-1">CIS Tech Ltd. & Department of ITM</div>
                             <p className="text-gray-700 text-sm">Designed and presented a business model addressing challenges faced by small-scale agricultural enterprises and farmers.</p>
                        </div>
                    </div>
                     {/* 6 */}
                    <div className="flex flex-col sm:flex-row sm:gap-4 items-start">
                        <div className="min-w-[100px] text-sm text-gray-500 pt-1 font-medium sm:text-right">04/03/2023</div>
                        <div>
                             <h3 className="text-base font-bold text-gray-900">Champion, BrainMagneto Project Management Case Competition</h3>
                             <div className="text-sm text-gray-500 mb-1">Daffodil International University</div>
                             <p className="text-gray-700 text-sm">Led a team to design and present a solution on audiobook market entry and project feasibility in Bangladesh.</p>
                        </div>
                    </div>
                     {/* 7 */}
                    <div className="flex flex-col sm:flex-row sm:gap-4 items-start">
                        <div className="min-w-[100px] text-sm text-gray-500 pt-1 font-medium sm:text-right">03/12/2022</div>
                        <div>
                             <h3 className="text-base font-bold text-gray-900">Champion, Savoy Ice Cream presents Business Case Competition</h3>
                             <div className="text-sm text-gray-500 mb-1">Savoy Ice Cream Factory Ltd.</div>
                             <p className="text-gray-700 text-sm">Developed practical and creative business strategies for complex and competitive market scenarios.</p>
                        </div>
                    </div>
                     {/* 8 */}
                    <div className="flex flex-col sm:flex-row sm:gap-4 items-start">
                        <div className="min-w-[100px] text-sm text-gray-500 pt-1 font-medium sm:text-right">24/05/2025</div>
                        <div>
                             <h3 className="text-base font-bold text-gray-900">Runner-Up, Inter-Department Debate Competition</h3>
                             <div className="text-sm text-gray-500 mb-1">Daffodil International University</div>
                             <p className="text-gray-700 text-sm">Reached the finals in a university-level debate tournament, strengthening argumentation, public speaking, and critical thinking skills.</p>
                        </div>
                    </div>
                </div>
             </section>

             {/* LANGUAGE SKILLS */}
             <section>
                 <h2 className="text-lg font-extrabold text-blue-900 uppercase tracking-wider mb-6 flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-900"></span>
                    Language Skills
                </h2>
                <div className="mb-4">
                     <span className="text-sm font-bold text-gray-500">Mother tongue(s):</span> <span className="text-gray-900 font-bold uppercase">BENGALI</span>
                </div>
                
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left border-collapse border border-gray-200 min-w-[600px]">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200">
                                <th className="p-2 border-r border-gray-200 w-1/4"></th>
                                <th className="p-2 border-r border-gray-200 text-center font-bold text-gray-700" colSpan={2}>UNDERSTANDING</th>
                                <th className="p-2 border-r border-gray-200 text-center font-bold text-gray-700" colSpan={2}>SPEAKING</th>
                                <th className="p-2 text-center font-bold text-gray-700">WRITING</th>
                            </tr>
                            <tr className="bg-gray-50 border-b border-gray-200 text-xs">
                                <th className="p-2 border-r border-gray-200"></th>
                                <th className="p-2 border-r border-gray-200 text-center font-normal">Listening</th>
                                <th className="p-2 border-r border-gray-200 text-center font-normal">Reading</th>
                                <th className="p-2 border-r border-gray-200 text-center font-normal">Spoken production</th>
                                <th className="p-2 border-r border-gray-200 text-center font-normal">Spoken interaction</th>
                                <th className="p-2 text-center font-normal"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-100">
                                <td className="p-3 font-bold text-gray-900 border-r border-gray-200 bg-gray-50/50">ENGLISH</td>
                                <td className="p-3 text-center border-r border-gray-200">C1</td>
                                <td className="p-3 text-center border-r border-gray-200">C1</td>
                                <td className="p-3 text-center border-r border-gray-200">C1</td>
                                <td className="p-3 text-center border-r border-gray-200">C1</td>
                                <td className="p-3 text-center">B2</td>
                            </tr>
                             <tr>
                                <td className="p-3 font-bold text-gray-900 border-r border-gray-200 bg-gray-50/50">SWEDISH</td>
                                <td className="p-3 text-center border-r border-gray-200">A1</td>
                                <td className="p-3 text-center border-r border-gray-200">A1</td>
                                <td className="p-3 text-center border-r border-gray-200">A1</td>
                                <td className="p-3 text-center border-r border-gray-200">A1</td>
                                <td className="p-3 text-center">A1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
             </section>

             {/* VOLUNTEERING */}
             <section>
                <h2 className="text-lg font-extrabold text-blue-900 uppercase tracking-wider mb-6 flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-900"></span>
                    Volunteering
                </h2>
                <div className="space-y-6">
                    {/* 1 */}
                    <div className="space-y-1">
                        <div className="flex justify-between items-baseline flex-wrap">
                            <h3 className="text-base font-bold text-gray-900">President, ITM Club, Daffodil International University</h3>
                            <span className="text-sm text-gray-500">07/12/2024 - 07/12/2025 | Dhaka</span>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Lead strategic planning, event organization, and student engagement initiatives. Successfully led the ITM Summit 2025, a national event, overseeing the entire process from planning to execution and ensuring its successful completion.
                        </p>
                    </div>
                    {/* 2 */}
                    <div className="space-y-1">
                        <div className="flex justify-between items-baseline flex-wrap">
                            <h3 className="text-base font-bold text-gray-900">Deputy Director (Content), National Debate Federation Bangladesh</h3>
                            <span className="text-sm text-gray-500">01/12/2023 - CURRENT | Dhaka</span>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Lead content development for special events, create social media posts, and assist in event proposals and scheduling. Progressed from District Ambassador to this leadership role over eight years
                        </p>
                    </div>
                     {/* 3 */}
                    <div className="space-y-1">
                        <div className="flex justify-between items-baseline flex-wrap">
                            <h3 className="text-base font-bold text-gray-900">Head of Public Relations, Higgsino Science Society</h3>
                            <span className="text-sm text-gray-500">03/08/2022 - 03/08/2023 | Bangladesh</span>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Led communication and public relations activities and built relationships with stakeholders and media. As an Organizing Committee Member of the National Biology Olympiad, achieved over 10,000 registrations.
                        </p>
                    </div>
                </div>
             </section>

             {/* REFERENCES */}
             <section>
                 <h2 className="text-lg font-extrabold text-blue-900 uppercase tracking-wider mb-6 flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-900"></span>
                    References
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                        <h3 className="font-bold text-gray-900">Dr Nusrat Jahan</h3>
                        <p className="text-sm text-gray-600 mb-2">Position: Assistant Professor and Head, Department of ITM.</p>
                        <p className="text-sm text-gray-600">Organization: Daffodil International University</p>
                        <p className="text-sm text-gray-600 mt-2">Email: <a href="mailto:headitm@daffodilvarsity.edu.bd" className="text-primary hover:underline">headitm@daffodilvarsity.edu.bd</a></p>
                        <p className="text-sm text-gray-600">Phone: +880 168174350</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                        <h3 className="font-bold text-gray-900">Mir Rasel Ahmed</h3>
                        <p className="text-sm text-gray-600 mb-2">Position: Digital Specialist, AstraZeneca; Ex-Associate at Garena Free Fire</p>
                        <p className="text-sm text-gray-600 mt-2">Email: <a href="mailto:mirraselbd@gmail.com" className="text-primary hover:underline">mirraselbd@gmail.com</a></p>
                        <p className="text-sm text-gray-600">Phone: +971 582869201</p>
                    </div>
                </div>
             </section>

        </div>
        
      </div>
    </div>
  );
};

export default CV;