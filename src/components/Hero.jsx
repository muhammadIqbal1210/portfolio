import React from 'react';
import { motion } from 'framer-motion';
import fotoSaya from '../assets/profile.png';

const Hero = ({ darkMode }) => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
            <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Ilustrasi/Foto Kiri */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative flex justify-center"
                >
                    <div className="w-72 h-72 lg:w-96 lg:h-96 bg-gradient-to-tr from-orange-500 to-purple-600 rounded-full blur-3xl opacity-20 absolute animate-pulse"></div>
                    <img
                        src={fotoSaya}
                        alt="My Profile"
                        className="relative z-10 w-72 lg:w-96 drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform duration-500"
                    />
                </motion.div>
                {/* Teks Kanan */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-orange-500 font-bold text-xl mb-4 ">Hi there, I'm</h2>
                    <h1 className={`text-5xl lg:text-7xl font-extrabold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">Developer</span>
                    </h1>
                    <p className={`text-lg mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Saya membantu membangun website yang interaktif, responsif, dan berperforma tinggi menggunakan teknologi modern.
                    </p>
                    <div className="flex space-x-4">
                        <button className="px-8 py-3 bg-orange-500 text-white rounded-full font-bold shadow-lg shadow-orange-500/30 hover:bg-orange-600 transition-all">
                            View Work
                        </button>
                        <button className={`px-8 py-3 border-2 rounded-full font-bold transition-all ${darkMode ? 'border-gray-700 text-white hover:bg-gray-800' : 'border-gray-200 text-gray-900 hover:bg-gray-50'}`}>
                            Contact Me
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;