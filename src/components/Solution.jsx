import React from 'react';

function Solution({ sectionRef }) {
  return (
    <section className="section section-solution" ref={sectionRef}>
      <div className="solution-grid">
        <div className="solution-header">
          <div className="section-number">02</div>
          <h2>The Solution</h2>
        </div>
        
        <div className="solution-profile" data-observe="solution-profile">
          <div className="profile-image">
  <div className="image-placeholder">
    {/* SVG FRAME */}
    <svg viewBox="0 0 200 200" className="profile-graphic">
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path
            d="M 20 0 L 0 0 0 20"
            fill="none"
            stroke="rgba(0,255,255,0.1)"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>

      <rect width="200" height="200" fill="url(#grid)" />
      <circle cx="100" cy="100" r="60" fill="none" stroke="var(--accent)" strokeWidth="2" />
      <circle cx="100" cy="100" r="40" fill="var(--accent)" opacity="0.1" />
    </svg>

    {/* YOUR IMAGE */}
    <img
      src="/profile.jpg"
      alt="Brian De Jesus"
      className="profile-photo"
    />

    {/* CAPTION */}
    
  </div>
</div>

          
          <div className="profile-info">
            <h3>Recent graduate. Active builder.</h3>
            <p>
              Four years of turning "wouldn't it be cool if..." into working software. 
              Specialized in taking messy, real-world problems and building clean solutions 
              that people actually use.
            </p>
            <p>
              Most comfortable in the space between design and engineering—where 
              user needs meet technical constraints and interesting problems emerge.
            </p>
          </div>
        </div>

        <div className="solution-capabilities" data-observe="solution-cap">
          <div className="capability-col">
            <h4>Primary Stack</h4>
            <ul className="tech-list">
              <li>React & Modern JavaScript</li>
              <li>Node.js & Express</li>
              <li>Python for data & scripting</li>
              <li>SQL & MongoDB</li>
              <li>Git & agile workflows</li>
            </ul>
          </div>
          
          <div className="capability-col">
            <h4>Learning Trajectory</h4>
            <div className="growth-chart">
              <div className="growth-bar" style={{ width: '60%' }}>
                <span>Web Dev</span>
              </div>
              <div className="growth-bar" style={{ width: '75%' }}>
                <span>Data Analytics</span>
              </div>
              <div className="growth-bar" style={{ width: '50%' }}>
                <span>System Design</span>
              </div>
              <div className="growth-bar" style={{ width: '85%' }}>
                <span>Problem Solving</span>
              </div>
            </div>
            <p className="growth-note">Based on project complexity over time</p>
          </div>
        </div>

        <div className="solution-approach" data-observe="solution-approach">
          <h4>How I work</h4>
          <div className="approach-steps">
            <div className="approach-step">
              <span className="step-num">1</span>
              <div>
                <strong>Understand the constraint</strong>
                <p>What's actually blocking progress? Why hasn't this been solved?</p>
              </div>
            </div>
            <div className="approach-step">
              <span className="step-num">2</span>
              <div>
                <strong>Design for reality</strong>
                <p>Solutions that work with real data, real users, real limitations.</p>
              </div>
            </div>
            <div className="approach-step">
              <span className="step-num">3</span>
              <div>
                <strong>Ship and measure</strong>
                <p>Launch quickly, gather feedback, iterate based on actual usage.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solution;