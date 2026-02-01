import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import fotoSaya from '../assets/profile.png';

const Hero = ({ darkMode }) => {
    const roles = ['Web Developer', 'Mobile Developer', 'UI/UX Designer'];
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [typedText, setTypedText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const techStack = [
        {
            name: 'React.js',
            logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg',
            color: 'group-hover:border-blue-400 dark:group-hover:border-white-400'
        },
        {
            name: 'Tailwind',
            logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg',
            color: 'group-hover:border-purple-400'
        },
        {
            name: 'Laravel',
            logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/laravel.svg',
            color: 'group-hover:border-red-500'
        },
        {
            name: 'Flutter',
            logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/flutter.svg',
            color: 'group-hover:border-blue-500'
        }
    ];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const currentRole = roles[currentRoleIndex];
        let charIndex = 0;
        setTypedText('');
        setIsTyping(true);

        const typeInterval = setInterval(() => {
            if (charIndex < currentRole.length) {
                setTypedText(currentRole.slice(0, charIndex + 1));
                charIndex++;
            } else {
                clearInterval(typeInterval);
                setIsTyping(false);
                // Wait before switching to next role
                setTimeout(() => {
                    setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
                }, 2000); // Pause for 2 seconds before switching
            }
        }, 100); // Typing speed: 100ms per character

        return () => clearInterval(typeInterval);
    }, [currentRoleIndex]);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
            <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Ilustrasi/Foto (Kiri di Desktop) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative flex justify-center order-1 lg:order-1"
                >
                    <div className="w-72 h-72 lg:w-96 lg:h-96 bg-gradient-to-tr from-orange-500 to-purple-600 rounded-full blur-3xl opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>

                    {/* Pembungkus Gambar */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                        className="relative z-10"
                    >
                        <img
                            src={fotoSaya}
                            alt="My Profile"
                            className="w-72 lg:w-[450px] h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                        />
                        <div className={`absolute bottom-0 left-0 right-0 h-24 z-20 bg-gradient-to-t ${darkMode ? 'from-gray-950' : 'from-white'} to-transparent`} />
                    </motion.div>
                </motion.div>

                {/* Teks Konten (Kanan di Desktop) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="order-2 lg:order-2 text-center lg:text-left"
                >
                    <h2 className="text-orange-500 font-bold text-xl mb-2">Hi there, I'm</h2>
                    <h1 className={`text-3xl lg:text-5xl font-extrabold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Muhammad Iqbal
                    </h1>

                    {/* Alternating Roles */}
                    <div className={`text-xl lg:text-2xl font-semibold mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <span className="whitespace-nowrap">And I am </span>
                        <span style={{
                            background: 'linear-gradient(to right, #f97316, #a855f7)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            {typedText}
                        </span>
                        <span className={`inline-block w-1 h-5 bg-orange-500 ml-1 ${isTyping ? 'animate-pulse' : ''}`}></span>
                    </div>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
                        {techStack.map((tech) => (
                            <span
                                key={tech.name}
                                className={`group inline-flex items-center gap-2 px-3 py-1.5 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-700 dark:text-gray-200 text-sm font-medium rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-md ${tech.color}`}
                            >
                                <img
                                    src={tech.logo}
                                    alt={tech.name}
                                    className="w-4 h-4 object-contain transition-transform group-hover:scale-110 dark:invert-[0.8] dark:brightness-200"
                                // Catatan: dark:invert digunakan jika logo berwarna hitam agar terlihat di dark mode
                                />
                                {tech.name}
                            </span>
                        ))}
                    </div>

                    <p className={`text-lg mb-8 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        I help build interactive, responsive, high-performance websites and applications using modern technology.
                    </p>

                    {/* Social Media Icons */}
                    <div className="flex justify-center lg:justify-start gap-6 mb-8">
                        {/* Social Media Icons */}
                        <div className="flex justify-center lg:justify-start gap-6 mb-8">
                            {[
                                {
                                    label: "GitHub",
                                    href: "https://github.com/muhammadIqbal1210",
                                    icon: <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4M9 18c-4.51 2-5-2-7-2" />,
                                    hover: "hover:text-gray-900 dark:hover:text-white"
                                },
                                {
                                    label: "LinkedIn",
                                    href: "https://www.linkedin.com/in/muhammadiqbal1210",
                                    icon: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></>,
                                    hover: "hover:text-blue-600"
                                },
                                {
                                    label: "Email",
                                    href: "mailto:iqbalmuhammad07015@gmail.com",
                                    icon: <><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></>,
                                    hover: "hover:text-red-500"
                                }
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    whileHover={{ y: -3 }}
                                    className={`text-gray-600 dark:text-gray-400 transition-all duration-300 ${social.hover}`}
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        {social.icon}
                                    </svg>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Primary Actions */}
                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8">
                        <button onClick={() => scrollToSection('projects')} className="px-8 py-3 bg-orange-500 text-white rounded-full font-bold shadow-lg shadow-orange-500/30 hover:bg-orange-600 transition-all">
                            View Work
                        </button>
                        <button onClick={() => scrollToSection('contact')} className={`px-8 py-3 border-2 rounded-full font-bold transition-all ${darkMode ? 'border-gray-700 text-white hover:bg-gray-800' : 'border-gray-200 text-gray-900 hover:bg-gray-50'}`}>
                            Contact Me
                        </button>
                    </div>

                    {/* Secondary Actions (Resume/CV) */}
<div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm">
    {/* Link untuk melihat/buka di tab baru */}
    <a 
        href="/resume.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-1 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-orange-500 border border-gray-300 dark:border-gray-600 rounded-md transition-all"
    >
        📄 View Resume
    </a>

    {/* Link khusus untuk DOWNLOAD otomatis */}
    <a 
        href="/CV_Personal.pdf" 
        download="CV_Muhammad_Iqbal.pdf" // Memberikan nama file saat diunduh
        className="flex items-center gap-1 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-orange-500 border border-gray-300 dark:border-gray-600 rounded-md transition-all"
    >
        📥 Download CV
    </a>
</div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;