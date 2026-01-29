import React from 'react';
import { projects } from '../data/projects';

function Work({ sectionRef, selectedProject, setSelectedProject }) {
  return (
    <section className="section section-work" ref={sectionRef}>
      <div className="work-header">
        <div className="section-number">03</div>
        <h2>The Work</h2>
        <p className="work-subtitle">Five projects. Real problems. Measurable results.</p>
      </div>

      <div className="timeline">
        <div className="timeline-line"></div>
        {projects.map((project, index) => (
          <div 
            key={project.id}
            className={`timeline-item ${selectedProject?.id === project.id ? 'active' : ''}`}
            data-observe={`project-${project.id}`}
            onClick={() => setSelectedProject(selectedProject?.id === project.id ? null : project)}
          >
            <div className="timeline-marker">
              <div className="marker-dot"></div>
              <div className="marker-label">{project.quarter} {project.year}</div>
            </div>
            
            <div className="project-card">
              <div className="project-header">
                <div className="project-type">{project.type}</div>
                <h3>{project.title}</h3>
              </div>
              
              {selectedProject?.id === project.id && (
                <div className="project-details">
                  <div className="detail-section">
                    <label>Problem</label>
                    <p>{project.problem}</p>
                  </div>
                  
                  <div className="detail-section">
                    <label>Solution</label>
                    <p>{project.solution}</p>
                  </div>
                  
                  <div className="detail-section">
                    <label>Result</label>
                    <p>{project.result}</p>
                  </div>
                  <div className="project-actions">
                        {project.previewable && project.liveUrl && (
                          <button
                            className="action-btn primary"
                            onClick={(e) => {
                              e.stopPropagation();
                              // for now: just open the site in a new tab
                              window.open(project.liveUrl, "_blank", "noopener,noreferrer");
                            }}
                          >
                            Preview
                          </button>
                        )}

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="action-btn"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Open Live
                          </a>
                        )}

                        {project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="action-btn"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Code
                          </a>
                        )}
                      </div>

                  <div className="project-tech">
                    {project.tech.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="project-metrics">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="metric">
                        <span className="metric-value">{value}</span>
                        <span className="metric-label">{key}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

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