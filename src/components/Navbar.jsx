import React from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Tambahkan AnimatePresence

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [activeSection, setActiveSection] = React.useState('home');
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const navItems = [
        { name: 'Home', link: '#home' },
        { name: 'About', link: '#about' },
        { name: 'Skill', link: '#skills' },
        { name: 'Project', link: '#projects' },
        { name: 'Contact', link: '#contact' },
    ];

    const handleNavClick = (itemName) => {
        setActiveSection(itemName.toLowerCase());
        setIsMenuOpen(false);
    };

    const lightColors = {
        navBg: 'bg-gradient-to-br from-orange-200 to-white/90',
        textPrimary: 'text-gray-900',
        textSecondary: 'text-gray-800',
        textHover: 'hover:text-orange-500',
        textActive: 'text-orange-600',
        indicator: 'from-orange-500 to-amber-500',
        button: 'from-orange-500 to-purple-600',
    };

    const darkColors = {
        navBg: 'bg-gradient-to-br from-gray-800 via-purple-900 to-black/90',
        textPrimary: 'text-gray-100',
        textSecondary: 'text-gray-300',
        textHover: 'hover:text-purple-400',
        textActive: 'text-purple-500',
        indicator: 'from-purple-500 to-pink-500',
        button: 'from-purple-600 to-orange-500',
    };

    const colors = darkMode ? darkColors : lightColors;

    return (
        <div className="flex justify-center w-full fixed z-50 mt-4 px-4">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={`flex items-center justify-between w-full max-w-5xl ${colors.navBg} backdrop-blur-lg rounded-2xl px-6 py-2 shadow-lg border border-white/10`}
            >
                {/* Logo Section */}
                <motion.a href="/" whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
                    <span className={`font-bold text-xl ${colors.textPrimary}`}>
                        Muhammad Iqbal<span className="text-orange-500">.</span>
                    </span>
                </motion.a>

                {/* Desktop Navigation Links */}
                <div className="hidden lg:flex items-center space-x-6">
                    {navItems.map((item) => (
                        <a 
                            key={item.name} 
                            href={item.link}
                            onClick={() => handleNavClick(item.name)}
                            className="relative px-2 py-1"
                        >
                            <motion.span
                                className={`font-medium transition-colors duration-300 ${
                                    activeSection === item.name.toLowerCase() ? colors.textActive : `${colors.textSecondary} ${colors.textHover}`
                                }`}
                                whileHover={{ scale: 1.05 }}
                            >
                                {item.name}
                            </motion.span>
                            {activeSection === item.name.toLowerCase() && (
                                <motion.div layoutId="navbar-indicator" className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r rounded-full ${colors.indicator}`} />
                            )}
                        </a>
                    ))}
                </div>

                <div className="flex items-center space-x-4">
                    {/* Dark Mode Toggle */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleDarkMode}
                        className={`p-2 rounded-full ${darkMode ? 'bg-purple-600 text-yellow-300' : 'bg-yellow-400 text-purple-800'}`}
                    >
                        {darkMode ? '🌙' : '☀️'}
                    </motion.button>

                    {/* Hire Me Button */}
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`hidden lg:block px-6 py-2 font-semibold rounded-full bg-gradient-to-r ${colors.button} text-white shadow-md`}
                    >
                        Hire Me
                    </motion.a>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)} 
                            className={`p-2 rounded-lg ${colors.textPrimary}`}
                        >
                            <span className="text-2xl">{isMenuOpen ? '✕' : '☰'}</span>
                        </button>
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className={`absolute top-20 left-4 right-4 ${colors.navBg} backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 lg:hidden overflow-hidden z-40`}
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.link}
                                    onClick={() => handleNavClick(item.name)}
                                    className={`text-lg font-semibold ${
                                        activeSection === item.name.toLowerCase() ? colors.textActive : colors.textSecondary
                                    }`}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <hr className="opacity-10" />
                            <button className={`w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r ${colors.button}`}>
                                Hire Me
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;