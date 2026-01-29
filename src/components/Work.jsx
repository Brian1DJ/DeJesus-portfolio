import React, { useState, useEffect } from 'react';
import { projects } from '../data/projects';

function Work({ sectionRef }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedDetails, setExpandedDetails] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const currentProject = projects[currentIndex];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentIndex]);

  // Navigation functions
  const goToNext = () => {
    setExpandedDetails(false);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const goToPrevious = () => {
    setExpandedDetails(false);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index) => {
    setExpandedDetails(false);
    setCurrentIndex(index);
  };

  // Touch handlers for mobile swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  return (
    <section className="section section-work" ref={sectionRef}>
      <div className="work-header">
        <div className="section-number">03</div>
        <h2>The Work</h2>
        <p className="work-subtitle">Five projects. Real problems. Measurable results.</p>
      </div>

      <div 
        className="project-slider"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Background image with gradient overlay */}
        <div 
          className="slider-background"
          style={{
            backgroundImage: `url(${currentProject.image})`,
          }}
        >
          <div className="slider-gradient"></div>
        </div>

        {/* Navigation arrows */}
        <button 
          className="slider-nav slider-nav-prev" 
          onClick={goToPrevious}
          aria-label="Previous project"
        >
          ←
        </button>
        
        <button 
          className="slider-nav slider-nav-next" 
          onClick={goToNext}
          aria-label="Next project"
        >
          →
        </button>

        {/* Content panel */}
        <div className="slider-content">
          <div className="slider-panel">
            {/* Header info */}
            <div className="slider-header">
              <div className="slider-meta">
                <span className="slider-type">{currentProject.type}</span>
                <span className="slider-date">{currentProject.quarter} {currentProject.year}</span>
              </div>
              <h3 className="slider-title">{currentProject.title}</h3>
            </div>

            {/* Summary view (always visible) */}
            <div className="slider-summary">
              <div className="summary-item">
                <label>Problem</label>
                <p>{currentProject.problem}</p>
              </div>
              
              <div className="summary-item">
                <label>Result</label>
                <p>{currentProject.result}</p>
              </div>
            </div>

            {/* Expanded details (toggle) */}
            {expandedDetails && (
              <div className="slider-details">
                <div className="detail-item">
                  <label>Solution</label>
                  <p>{currentProject.solution}</p>
                </div>

                <div className="detail-tech">
                  <label>Technologies</label>
                  <div className="tech-tags">
                    {currentProject.tech.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="detail-metrics">
                  {Object.entries(currentProject.metrics).map(([key, value]) => (
                    <div key={key} className="metric-item">
                      <span className="metric-value">{value}</span>
                      <span className="metric-label">{key}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="slider-actions">
              <button 
                className="action-expand"
                onClick={() => setExpandedDetails(!expandedDetails)}
              >
                {expandedDetails ? 'Show less' : 'Expand details'}
              </button>

              <div className="action-links">
                {currentProject.liveUrl && (
                  <a 
                    href={currentProject.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="action-link"
                  >
                    Live
                  </a>
                )}
                
                {currentProject.repoUrl && (
                  <a 
                    href={currentProject.repoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="action-link"
                  >
                    Code
                  </a>
                )}
                
                {currentProject.previewable && currentProject.liveUrl && (
                  <a 
                    href={currentProject.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="action-link action-link-primary"
                  >
                    Preview →
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Progress indicator dots */}
        <div className="slider-dots">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="slider-counter">
          <span className="counter-current">{String(currentIndex + 1).padStart(2, '0')}</span>
          <span className="counter-separator">/</span>
          <span className="counter-total">{String(projects.length).padStart(2, '0')}</span>
        </div>
      </div>

      {/* Summary statistics */}
      <div className="work-summary" data-observe="work-summary">
        <div className="summary-stat">
          <div className="stat-number">5</div>
          <div className="stat-label">Shipped projects</div>
        </div>
        <div className="summary-stat">
          <div className="stat-number">14k+</div>
          <div className="stat-label">Total users</div>
        </div>
        <div className="summary-stat">
          <div className="stat-number">200+</div>
          <div className="stat-label">Hours saved</div>
        </div>
      </div>
    </section>
  );
}

export default Work;