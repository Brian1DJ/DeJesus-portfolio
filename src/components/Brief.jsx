import React from 'react';

function Brief({ sectionRef, onNavigate }) {
  return (
    <section className="section section-brief" ref={sectionRef}>
      <div className="brief-content">
        <div className="brief-number" data-observe="brief-num">01</div>
        <h1 className="brief-title" data-observe="brief-title">
          The Brief
        </h1>
        <div className="brief-text" data-observe="brief-text">
          <p className="brief-lead">
            Client needs a Computer Science graduate who can transform abstract problems into functional digital products.
          </p>
          <div className="brief-requirements">
            <div className="requirement">
              <span className="req-label">Must have:</span>
              <span className="req-value">Full-stack web development capabilities</span>
            </div>
            <div className="requirement">
              <span className="req-label">Must have:</span>
              <span className="req-value">Data analysis and visualization skills</span>
            </div>
            <div className="requirement">
              <span className="req-label">Must have:</span>
              <span className="req-value">System design thinking</span>
            </div>
            <div className="requirement">
              <span className="req-label">Must have:</span>
              <span className="req-value">Proven track record of shipping</span>
            </div>
          </div>
          <p className="brief-footer">
            This portfolio documents the solution.
          </p>
        </div>
      </div>
      <div className="scroll-indicator" onClick={() => onNavigate(1)}>
        <span>Continue</span>
        <div className="scroll-arrow">↓</div>
      </div>
    </section>
  );
}

export default Brief;