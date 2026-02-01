import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Mail, Phone, MessageSquare, Instagram } from 'lucide-react';

const ChatWidget = ({ darkMode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const contactOptions = [
        {
            icon: <Mail size={20} />,
            title: 'Email',
            description: 'Send me an email',
            link: 'mailto:iqbalmuhammad07015@gmail.com',
            color: 'bg-blue-500'
        },
        {
            icon: <Phone size={20} />,
            title: 'Phone',
            description: 'Call me directly',
            link: 'tel:+62284927737',
            color: 'bg-green-500'
        },
        {
            icon: <MessageSquare size={20} />,
            title: 'WhatsApp',
            description: 'Chat on WhatsApp',
            link: 'https://wa.me/6283182346575',
            color: 'bg-green-600'
        },
        {
            icon: <Instagram size={20} />,
            title: 'Instagram',
            description: 'DM on Instagram',
            link: 'https://www.instagram.com/muhammadlqbal__?igsh=MWx0dG1jNGpoNmYyYQ==',
            color: 'bg-pink-500'
        }
    ];

    return (
        <>
            {/* Chat Widget Button */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="fixed bottom-6 right-6 z-50"
            >
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white transition-all duration-300 ${
                        isOpen
                            ? 'bg-red-500 hover:bg-red-600'
                            : 'bg-gradient-to-r from-orange-500 to-purple-600 hover:shadow-xl'
                    }`}
                >
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X size={24} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="chat"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <MessageCircle size={24} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </motion.div>

            {/* Chat Widget Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed bottom-24 right-6 w-80 z-40"
                    >
                        <div className={`rounded-2xl shadow-2xl border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                            {/* Header */}
                            <div className={`p-4 rounded-t-2xl ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} border-b ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                                <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                    Let's Connect! 💬
                                </h3>
                                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    Choose how you'd like to reach me
                                </p>
                            </div>

                            {/* Contact Options */}
                            <div className="p-4 space-y-3">
                                {contactOptions.map((option, index) => (
                                    <motion.a
                                        key={index}
                                        href={option.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1, duration: 0.3 }}
                                        className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                                            darkMode
                                                ? 'hover:bg-gray-700 text-gray-300 hover:text-white'
                                                : 'hover:bg-gray-50 text-gray-700 hover:text-gray-900'
                                        }`}
                                    >
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${option.color}`}>
                                            {option.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                                {option.title}
                                            </h4>
                                            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                                {option.description}
                                            </p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>

                            {/* Footer */}
                            <div className={`p-4 rounded-b-2xl ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} border-t ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                                <p className={`text-xs text-center ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                    Available for new projects • Quick response guaranteed
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ChatWidget;
