import React, { useState, useEffect,lazy, Suspense   } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Contact = lazy(() => import('./components/Contact'));
import ChatWidget from './components/ChatWidget';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    
    // Menangani class dark di tingkat root (HTML)
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-gray-950' : 'bg-white'}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Suspense fallback={<div>Loading...</div>}>
        <Projects />
        <Skills />
        <Contact />
      </Suspense>
      <ChatWidget darkMode={darkMode} />
    </div>
  );
}

export default App;