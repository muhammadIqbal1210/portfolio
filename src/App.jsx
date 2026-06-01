import React, { useState, useEffect,lazy, Suspense   } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
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
    <div className={`min-h-screen transition-colors duration-700 ${darkMode ? 'bg-gray-950' : 'bg-white'}`}>
      <header>
        <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      </header>
      <main id="main-content">
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        
        <Suspense fallback={
          <div className={`py-20 text-center ${darkMode ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>
            Loading...
          </div>
        }>
          <Experience darkMode={darkMode} />
          <Projects darkMode={darkMode} />
          <Skills darkMode={darkMode} />
          <Contact darkMode={darkMode} />
        </Suspense>
      </main>
      <ChatWidget darkMode={darkMode} />
    </div>
  );
}

export default App;