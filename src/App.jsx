import { useState, useEffect, useRef } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Brief from './components/Brief';
import Solution from './components/Solution';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleElements, setVisibleElements] = useState({});
  const sectionsRef = useRef([]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => ({
              ...prev,
              [entry.target.dataset.observe]: true
            }));
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('[data-observe]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll to section
  const scrollToSection = (index) => {
    sectionsRef.current[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Navigation onNavigate={scrollToSection} />
      
      <Brief 
        sectionRef={el => sectionsRef.current[0] = el}
        onNavigate={scrollToSection}
      />
      
      <Solution 
        sectionRef={el => sectionsRef.current[1] = el}
      />
      
      <Work 
        sectionRef={el => sectionsRef.current[2] = el}
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />
      
      <Contact 
        sectionRef={el => sectionsRef.current[3] = el}
      />
    </div>
  );
}

export default App;