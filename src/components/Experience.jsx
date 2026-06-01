import React from 'react';

const Experience = ({ darkMode }) => {
  const experiences = [
    {
      company: 'PT. Electatech Indonesia',
      role: 'Blockchain & Fullstack Developer',
      period: 'May 2026 - Present', 
      description: 'Developed and deployed secure decentralized applications (dApps) and integrated real-time data solutions for enterprise use cases.',
      bullets: [
        'Engineered, tested, and deployed secure smart contracts on blockchain networks to handle automated transactions.',
        'Built and optimized web interfaces for real-time IoT device monitoring and telemetry tracking.',
        'Crafted responsive frontends and robust backend integrations to ensure smooth user experiences.'
      ]
    },
    {
      company: 'Universitas Andalas',
      role: 'IT Support Specialist Intern',
      period: 'Feb 2026 - July 2026', 
      description: 'Maintained institutional digital infrastructure, enhanced web security postures, and streamlined content management systems.',
      bullets: [
        'Successfully planned and executed data and database migrations for university web portals with zero downtime.',
        'Conducted security auditing by scanning and removing backdoors, malware, and critical exploits.',
        'Built, customized, and maintained university sub-sites using WordPress with responsive layouts.'
      ]
    },
    {
      company: 'Udacoding',
      role: 'Graphic Designer Intern',
      period: 'Feb 2026 - May 2026', 
      description: 'Created visually compelling digital assets to elevate brand identity and support technical marketing campaigns.',
      bullets: [
        'Conceptualized and produced high-quality graphics for social media, promotional materials, and branding.',
        'Partnered with marketing and development teams to translate complex tech concepts into engaging visual layouts.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className={`text-4xl lg:text-5xl text-center font-bold mb-16 transition-all duration-700 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          <span className={`text-transparent mx-4 bg-clip-text bg-gradient-to-r transition-all duration-700 ${darkMode ? 'from-purple-400 to-orange-400' : 'from-orange-500 to-purple-600'}`}>My</span>
              Experience
        </h2>

        {/* Container Utama Timeline */}
        <div className="relative border-l-2 border-orange-500 ml-4 md:ml-6">
          {experiences.map((exp, i) => (
            <div key={i} className="mb-10 ml-8">
              {/* Dot Indikator di Garis */}
              <span className="absolute flex items-center justify-center w-6 h-6 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full -left-[13px] ring-4 ring-white dark:ring-gray-900">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </span>

              {/* Card Konten */}
              <div
                className={`p-6 rounded-xl border transition-all duration-300 transform hover:-translate-y-1 ${
                  darkMode 
                    ? 'bg-gray-900 border-gray-700 hover:shadow-[0_10px_30px_-15px_rgba(59,130,246,0.3)]' 
                    : 'bg-white border-gray-200 hover:shadow-xl'
                }`}
              >
                <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
                  <div>
                    <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {exp.role}
                    </h3>
                    <p className="text-blue-500 font-medium">{exp.company}</p>
                  </div>
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {exp.period}
                  </span>
                </div>

                <p className={`mb-4 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {exp.description}
                </p>

                <ul className="space-y-2">
                  {exp.bullets.map((b, idx) => (
                    <li key={idx} className={`flex items-start text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      <span className="mr-2 text-blue-500">•</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;