import React, { useState } from 'react';
import { motion } from 'framer-motion';
import project1 from '../assets/carbonfootprint.png'
import project2 from '../assets/webbem.png'
import project3 from '../assets/ecommerce.png'
import project4 from '../assets/hotelapp.png'
import sertif from '../assets/reactnative.png'
import sertif1 from '../assets/aws.png'
import sertif2 from '../assets/css.png'
import sertif3 from '../assets/iot.png'
import sertif4 from '../assets/juniorwebdeveloper.png'
import sertif5 from '../assets/manpro.png'
import sertif6 from '../assets/uiux.png'
import sertif7 from '../assets/microjuniorprogramer.png'

import { ExternalLink, Github, Code, Award, Layers } from 'lucide-react';

const Projects = ({ darkMode }) => {
    const [activeTab, setActiveTab] = useState('projects');
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const projects = [
        {
            title: 'Carbon Footprint Web Tracker',
            description: 'A dedicated web platform designed to calculate and monitor daily carbon emissions. It features an intuitive calculator to help users assess their environmental impact and promotes sustainable living through accurate data visualization.',
            technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
            image: project1,
            liveLink: 'https://github.com/muhammadIqbal1210/Carbon-Footprint',
            githubLink: 'https://github.com/muhammadIqbal1210/Carbon-Footprint'
        },
        {
            title: 'BEM Padang State Polytechnic Portal',
            description: 'An organizational management system developed for the Student Executive Board (BEM). This platform streamlines administrative workflows, simplifies information distribution, and enhances inter-departmental coordination.',
            technologies: ['CodeIgniter', 'PHP', 'Tailwind CSS', 'Bootstrap'],
            image: project2,
            liveLink: 'https://github.com/muhammadIqbal1210/Proyek_BEMPNP',
            githubLink: 'https://github.com/muhammadIqbal1210/Proyek_BEMPNP'
        },
        {
            title: 'Academic E-Commerce Simulation',
            description: 'A mobile-based shopping application developed as a college project to simulate the e-commerce experience. It implements core features such as product selection, real-time cart management, and a responsive checkout process.',
            technologies: ['Flutter', 'Kotlin', 'PHP', 'MySQL'],
            image: project3,
            liveLink: 'https://github.com/muhammadIqbal1210/shop_iqbal',
            githubLink: 'https://github.com/muhammadIqbal1210/shop_iqbal'
        },
        {
            title: 'Hotel Reservation System',
            description: 'A mobile application project focusing on hotel booking logic. Users can browse available rooms, view facility details, and simulate real-time reservations, showcasing clean UI/UX and efficient database management.',
            technologies: ['Flutter', 'MySQL', 'PHP'],
            image: project4,
            liveLink: 'https://github.com/muhammadIqbal1210/hotelApp',
            githubLink: 'https://github.com/muhammadIqbal1210/hotelApp'
        }
    ];

    const certificates = [
        {
            title: 'React Native with TypeScript',
            issuer: 'MySkill',
            description: 'Learned to build cross-platform mobile applications using React Native integrated with TypeScript for robust type-safety and better developer experience.',
            image: sertif,
            link: 'https://myskill.id/'
        },
        {
            title: 'AWS Academy Cloud Developing',
            issuer: 'AWS Academy',
            description: 'Acquired technical expertise in developing, deploying, and maintaining applications on the AWS platform, focusing on cloud architecture and best practices.',
            image: sertif1,
            link: 'https://aws.amazon.com/id/training/awsacademy/'
        },
        {
            title: 'Fundamental Junior Web Developer',
            issuer: 'Komdigi',
            description: 'Certified by Digitalent Komdigi for demonstrating fundamental skills in web development, including front-end styling and back-end logic implementation.',
            image: sertif4,
            link: 'https://digitalent.komdigi.go.id/'
        },
        {
            title: 'Micro Skill Programming',
            issuer: 'Komdigi',
            description: 'Completed intensive training focused on core programming logic, data structures, and algorithmic problem-solving techniques.',
            image: sertif7,
            link: 'https://digitalent.komdigi.go.id/'
        },
        {
            title: 'CSS Introduction',
            issuer: 'MySkill',
            description: 'Mastered the fundamentals of web styling, including layouts, Flexbox, Grid, and responsive design principles to create visually appealing interfaces.',
            image: sertif2,
            link: 'https://myskill.id'
        },
        {
            title: 'IoT for Industry',
            issuer: 'MySkill',
            description: 'Explored the implementation of Internet of Things (IoT) in industrial contexts, covering sensors, connectivity protocols, and data monitoring systems.',
            image: sertif3,
            link: 'https://myskill.id'
        },
        {
            title: 'Project Management',
            issuer: 'Dicoding',
            description: 'Understanding the software development life cycle (SDLC), project planning, and collaborative tools to manage tech projects effectively.',
            image: sertif5,
            link: 'https://www.dicoding.com/'
        },
        {
            title: 'UI UX Design',
            issuer: 'MySkill',
            description: 'Learned the principles of user-centered design, wireframing, and prototyping to create intuitive and engaging digital product experiences.',
            image: sertif6,
            link: 'https://myskill.id'
        }
    ];
    return (
        <section id="projects" className={`py-20 px-6 ${darkMode ? 'bg-gray-950' : 'bg-white'}`}>
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Portfolio <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">Showcase</span>
                    </h2>
                    <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Explore my journey through projects, certifications, and technical expertise
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-purple-600 mx-auto rounded-full"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex justify-center mb-12"
                >
                    <div className="flex flex-wrap justify-center gap-2 p-2 bg-gray-100 dark:bg-gray-800 rounded-lg max-w-full overflow-x-auto">
                        <button
                            onClick={() => setActiveTab('projects')}
                            className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base ${activeTab === 'projects'
                                ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white shadow-lg'
                                : `${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`
                                }`}
                        >
                            <Code size={18} className="sm:w-5 sm:h-5" />
                            <span className="whitespace-nowrap">Projects</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('certificates')}
                            className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base ${activeTab === 'certificates'
                                ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white shadow-lg'
                                : `${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`
                                }`}
                        >
                            <Award size={18} className="sm:w-5 sm:h-5" />
                            <span className="whitespace-nowrap">Certificates</span>
                        </button>
                    </div>
                </motion.div>

                {activeTab === 'projects' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'} group`}
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                <div className="p-4 sm:p-6">
                                    <h3 className={`text-lg sm:text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                        {project.title}
                                    </h3>
                                    <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-2 sm:px-3 py-1 text-xs font-medium bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                                        <button
                                            onClick={() => {
                                                setSelectedItem(project);
                                                setShowModal(true);
                                            }}
                                            className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors text-sm ${darkMode ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-700'}`}
                                        >
                                            <Layers size={16} />
                                            <span>View Details</span>
                                        </button>
                                        <a
                                            href={project.githubLink}
                                            className={`flex items-center justify-center sm:justify-start space-x-2 px-4 py-2 rounded-lg font-medium transition-colors text-sm ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}
                                        >
                                            <Github size={16} />
                                            <span>Code</span>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                {activeTab === 'certificates' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {certificates.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'} group`}
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                <div className="p-6">
                                    <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                        {cert.title}
                                    </h3>
                                    <p className={`text-sm font-medium mb-3 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                                        Issued by {cert.issuer}
                                    </p>
                                    <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                        {cert.description}
                                    </p>

                                    <button
                                        onClick={() => {
                                            setSelectedItem(cert);
                                            setShowModal(true);
                                        }}
                                        className={`flex items-center justify-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors bg-gradient-to-r from-orange-500 to-purple-600 text-white hover:shadow-lg`}
                                    >
                                        <Award size={16} />
                                        <span>View Details</span>
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                {showModal && selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                        onClick={() => setShowModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className={`relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setShowModal(false)}
                                className={`absolute top-4 right-4 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}
                            >
                                ✕
                            </button>

                            <div className="p-6">
                                <img
                                    src={selectedItem.image}
                                    alt={selectedItem.title}
                                    className="w-full h-64 object-cover rounded-xl mb-6"
                                />

                                <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                    {selectedItem.title}
                                </h3>

                                {selectedItem.issuer && (
                                    <p className={`text-lg font-medium mb-4 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                                        Issued by {selectedItem.issuer}
                                    </p>
                                )}

                                <p className={`text-base mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    {selectedItem.description}
                                </p>

                                {selectedItem.technologies && (
                                    <div className="mb-6">
                                        <h4 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                            Technologies Used
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedItem.technologies.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-3 py-1 text-sm font-medium bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {selectedItem.liveLink && selectedItem.githubLink && (
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <a
                                            href={selectedItem.liveLink}
                                            className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors text-sm ${darkMode ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-700'}`}
                                        >
                                            <ExternalLink size={18} />
                                            <span>Live Demo</span>
                                        </a>
                                        <a
                                            href={selectedItem.githubLink}
                                            className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors text-sm ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}
                                        >
                                            <Github size={18} />
                                            <span>View Code</span>
                                        </a>
                                    </div>
                                )}

                                {selectedItem.link && (
                                    <a
                                        href={selectedItem.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors bg-gradient-to-r from-orange-500 to-purple-600 text-white hover:shadow-lg"
                                    >
                                        <Award size={18} />
                                        <span>View Certificate</span>
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Projects;
