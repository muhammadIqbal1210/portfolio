import React from 'react';
import { motion } from 'framer-motion';

const About = ({ darkMode }) => {

    return (
        <section id="about" className="py-20 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Judul Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">Me</span>
                    </h2>
                    <p className={`text-lg mb-4  ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        "Unlearning, learning, and growing." 
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-purple-600 mx-auto rounded-full"></div>
                </motion.div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Kotak 1: Cerita Utama (Besar) */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className={`md:col-span-2 p-8 rounded-3xl border ${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-100'} shadow-xl`}
                    >
                        <h3 className="text-xl font-bold mb-4 text-orange-500">The Journey</h3>
                        <p className={`leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Hello! I'm Muhammad Iqbal, a tech enthusiast who believes that code is an
                            art form for solving problems. Although I'm just starting my professional
                            career, I've dedicated my time to building functional web and mobile applications.
                            I really enjoy the process of learning new things, from complex backend logic to
                            interactive frontend animations.
                        </p>
                    </motion.div>


                    {/* Kotak : Pendidikan/Education */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className={`p-8 rounded-3xl border ${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-100'} shadow-xl`}
                    >
                        <h3 className="text-lg font-bold mb-3 text-purple-500">Education</h3>
                        <div className={`space-y-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            <div>
                                <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                    D4 Software Engineering
                                </h4>
                                <p className="text-sm">Politeknik Negeri Padang</p>
                                <p className="text-sm text-purple-500">Expected Graduation: 2027</p>
                            </div>
                            <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                                <p className="text-sm">
                                    <span className="font-medium">Department:</span> Information Technology
                                </p>
                                <p className="text-sm">
                                    <span className="font-medium">Focus:</span> Software Development & Engineering
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Kotak 3: Leadership Experience */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className={`flex flex-col p-8 rounded-3xl border ${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-100'} shadow-xl`}
                    >
                        <h3 className="text-lg font-bold mb-4 text-blue-500">Leadership Experience</h3>
                        <div className={`space-y-4 flex-grow ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            <div>
                                <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Head of Communication & Information</h4>
                                <p className="text-sm">Student Organization</p>
                            </div>
                            <div>
                                <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Vice President of Students</h4>
                                <p className="text-sm">Politeknik Negeri Padang</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Kotak 4: Keahlian Lain/Hobi (Sedang) */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className={`md:col-span-2 p-8 rounded-3xl border ${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-100'} shadow-xl flex items-center justify-between`}
                    >
                        <div>
                            <h3 className="text-lg font-bold mb-2 text-orange-500">Beyond Coding</h3>
                            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                When I'm not in front of a screen, I enjoy exploring UI/UX design, 
                                contributing to the community, or simply seeking inspiration from 
                                the latest technology. These activities help me keep my creativity 
                                fresh, allowing me to gain new perspectives for solving complex 
                                problems. I am always open to collaborating on innovative ideas 
                                and connecting with fellow tech enthusiasts to create a positive i
                                impact together.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;