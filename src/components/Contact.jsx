import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';


const Contact = ({ darkMode }) => {

    const contactInfo = [
        {
            icon: <Mail size={24} />,
            title: 'Email',
            value: 'iqbalmuhammad07015@gmail.com',
            link: 'mailto:iqbalmuhammad07015@gmail.com'
        },
        {
            icon: <Phone size={24} />,
            title: 'Phone',
            value: '+6283182346575',
            link: 'https://wa.me/6283182346575'
        },
        {
            icon: <MapPin size={24} />,
            title: 'Location',
            value: 'Padang, Indonesia',
            link: 'https://www.google.com/maps/place/Padang,+Kota+Padang,+Sumatera+Barat/@-0.9345797,100.2264568,11z/data=!3m1!4b1!4m6!3m5!1s0x2fd4b942e2b117bb:0xb8468cb5c3046ba5!8m2!3d-0.948041!4d100.3630901!16zL20vMDRndjVj?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D'
        }
    ];

    const socialLinks = [
        {
            icon: <Github size={24} />,
            name: 'GitHub',
            link: 'https://github.com/muhammadiqbal1210'
        },
        {
            icon: <Linkedin size={24} />,
            name: 'LinkedIn',
            link: 'https://linkedin.com/in/muhammadiqbal1210'
        },
        {
            icon: <Twitter size={24} />,
            name: 'Twitter',
            link: 'https://twitter.com'
        },
        {
            icon: <Instagram size={24} />,
            name: 'Instagram',
            link: 'https://www.instagram.com/muhammadlqbal__?igsh=MWx0dG1jNGpoNmYyYQ=='
        }

    ];

    return (
        <section id="contact" className={`py-20 px-6 transition-colors duration-500 ${darkMode ? 'bg-gray-950' : 'bg-white'}`}>
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className={`text-4xl lg:text-5xl font-bold mb-4 transition-all duration-500 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Get In{' '}
                        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${darkMode ? 'from-purple-400 to-orange-400' : 'from-orange-500 to-purple-600'}`}>Touch</span>
                    </h2>
                    <p className={`text-lg mb-8 transition-all duration-500 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Let's work together and bring your ideas to life
                    </p>
                    <div className={`w-24 h-1 bg-gradient-to-r mx-auto rounded-full transition-all duration-500 ${darkMode ? 'from-purple-400 to-orange-400' : 'from-orange-500 to-purple-600'}`}></div>
                </motion.div>

                <div className="max-w-4xl mx-auto text-center">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className={`text-3xl font-bold mb-6 transition-all duration-500 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                Let's Connect
                            </h3>
                            <p className={`text-lg mb-12 transition-all duration-500 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
                            </p>
                        </div>

                        {/* Contact Info Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.1 }}
                                    className={`flex flex-col items-center text-center p-6 rounded-2xl border shadow-lg transition-all duration-500
                                        ${darkMode
                                            ? 'bg-gray-900/60 border-gray-800 hover:bg-gray-800/80 hover:border-orange-500 shadow-purple-900/10'
                                            : 'bg-white border-gray-100 hover:bg-orange-50 hover:border-orange-500 shadow-orange-100'}
                                    `}
                                >
                                    <div className={`mb-4 transition-all duration-500 ${darkMode ? 'text-orange-400' : 'text-orange-700'}`}>{info.icon}</div>
                                    <div>
                                        <h4 className={`font-semibold mb-2 transition-all duration-500 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                            {info.title}
                                        </h4>
                                        <a
                                            href={info.link}
                                            className={`text-sm font-medium underline underline-offset-2 transition-all duration-500
                                                ${darkMode ? 'text-gray-300 hover:text-orange-400' : 'text-gray-600 hover:text-orange-600'}`}
                                        >
                                            {info.value}
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className={`text-xl font-semibold mb-6 transition-all duration-500 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                Follow Me
                            </h4>
                            <div className="flex justify-center space-x-6">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Kunjungi profil ${social.name} saya`}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.8, delay: index * 0.1 }}
                                        className={`p-4 rounded-xl border shadow-md transition-all duration-500
                                            ${darkMode
                                                ? 'bg-gray-900/60 border-gray-800 text-gray-300 hover:bg-purple-900/80 hover:text-orange-400 hover:border-orange-500 shadow-purple-900/10'
                                                : 'bg-white border-gray-100 text-gray-600 hover:bg-orange-50 hover:text-orange-600 hover:border-orange-500 shadow-orange-100'}
                                        `}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
