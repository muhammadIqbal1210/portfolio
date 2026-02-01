import React from 'react';
import { motion } from 'framer-motion';

const Skills = ({ darkMode }) => {
    const getIcon = (slug) => `https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${slug}.svg`;

    const skills = [
        {
            category: 'Frontend Development',
            technologies: [
                { name: 'React', level: 70, icon: getIcon('react') },
                { name: 'JavaScript', level: 75, icon: getIcon('javascript') },
                { name: 'HTML5', level: 95, icon: getIcon('html5') },
                { name: 'CSS3', level: 90, icon: getIcon('css3') },
                { name: 'Tailwind CSS', level: 75, icon: getIcon('tailwindcss') }
            ]
        },
        {
            category: 'Backend Development',
            technologies: [
                { name: 'MySQL', level: 90, icon: getIcon('mysql') },
                { name: 'PHP', level: 85, icon: getIcon('php') },
                { name: 'Python', level: 60, icon: getIcon('python') },
                { name: 'Java', level: 75, icon: getIcon('openjdk') },
                { name: 'Firebase', level: 50, icon: getIcon('firebase') }
            ]
        },
        {
            category: 'Tools & Others',
            technologies: [
                { name: 'Git', level: 85, icon: getIcon('git') },
                { name: 'VS Code', level: 90, icon: getIcon('visualstudiocode') },
                { name: 'Figma', level: 85, icon: getIcon('figma') },
                { name: 'Docker', level: 60, icon: getIcon('docker') },
                { name: 'Linux', level: 40, icon: getIcon('linux') }
            ]
        }
    ];

    return (
        <section id="skills" className={`py-20 px-6 transition-colors duration-500 ${darkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">Skills</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-purple-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skillCategory, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                            viewport={{ once: true }}
                            className={`rounded-3xl p-8 border ${
                                darkMode 
                                ? 'bg-gray-900/50 border-gray-800 shadow-2xl shadow-purple-900/10' 
                                : 'bg-white border-gray-100 shadow-xl'
                            } hover:border-orange-500/50 transition-colors duration-300`}
                        >
                            <h3 className={`text-xl font-bold mb-8 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                {skillCategory.category}
                            </h3>

                            <div className="space-y-6">
                                {skillCategory.technologies.map((tech, techIndex) => (
                                    <div key={techIndex} className="group">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-3">
                                                {/* Container Logo dengan Filter Dark Mode */}
                                                <div className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} group-hover:scale-110 transition-transform duration-300`}>
                                                    <img 
                                                        src={tech.icon} 
                                                        alt={tech.name}
                                                        className={`w-5 h-5 object-contain ${darkMode ? 'invert brightness-200' : ''}`}
                                                    />
                                                </div>
                                                <span className={`text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                                    {tech.name}
                                                </span>
                                            </div>
                                            <span className={`text-xs font-bold ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>
                                                {tech.level}%
                                            </span>
                                        </div>
                                        
                                        {/* Progress Bar Area */}
                                        <div className="relative w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${tech.level}%` }}
                                                transition={{ duration: 1.5, ease: "easeOut" }}
                                                viewport={{ once: true }}
                                                className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange-500 to-purple-600 rounded-full"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;