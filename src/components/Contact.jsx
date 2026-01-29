import React from 'react';

function Contact({ sectionRef }) {
  return (
    <section className="section section-contact" ref={sectionRef}>
      <div className="contact-content">
        <div className="section-number">04</div>
        <h2>Let's work together</h2>
        
        <div className="contact-grid" data-observe="contact-grid">
          <div className="contact-text">
            <p className="contact-lead">
              I'm looking for opportunities where I can apply technical skills to 
              solve real problems—whether that's building user-facing products, 
              analyzing data for insights, or designing systems that scale.
            </p>
            
            <div className="contact-interests">
              <h4>Particularly interested in:</h4>
              <ul>
                <li>Early-stage product development</li>
                <li>Data-driven decision making</li>
                <li>User experience optimization</li>
                <li>Cross-functional team collaboration</li>
              </ul>
            </div>

            <div className="contact-availability">
              <div className="availability-indicator"></div>
              <span>Available for full-time roles starting immediately</span>
            </div>
          </div>

          <div className="contact-methods">
            <a href="mailto:your.email@example.com" className="contact-link">
              <span className="link-label">Email</span>
              <span className="link-value">your.email@example.com</span>
            </a>
            
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="link-label">GitHub</span>
              <span className="link-value">@yourusername</span>
            </a>
            
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="link-label">LinkedIn</span>
              <span className="link-value">/in/yourprofile</span>
            </a>
            
            <div className="contact-link">
              <span className="link-label">Location</span>
              <span className="link-value">Open to relocation</span>
            </div>

            <a href="/resume.pdf" download className="resume-download">
              Download Resume (PDF)
            </a>
          </div>
        </div>

        <div className="contact-footer">
          <p>This portfolio was designed and built from scratch. No templates, no shortcuts.</p>
          <p className="footer-tech">React + CSS + Determination</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;