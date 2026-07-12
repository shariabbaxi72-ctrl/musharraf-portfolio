import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section className="edu-section" id="education">
      <h2 className="section-title gradient-text" style={{ textAlign: 'center' }}>
        Education
      </h2>

      <div className="edu-wrapper">
        <div className="edu-card">

          {/* Top Accent Bar */}
          <div className="edu-accent-bar"></div>

          <div className="edu-body">

            {/* Icon + Degree */}
            <div className="edu-icon-wrap">
              <div className="edu-icon-box">
                <i className="ti ti-school" aria-hidden="true"></i>
              </div>
              <h3 className="edu-degree">
                Bachelor of Science in Computer Science (BSCS)
              </h3>
            </div>

            {/* Year Badge */}
            <span className="edu-year-badge">2022 – 2026</span>

            {/* University */}
            <p className="edu-uni">
              Barani Institute of Information Technology (BIIT), Rawalpindi, Punjab, Pakistan
            </p>

            <div className="edu-divider"></div>

            {/* Coursework */}
            <p className="edu-cw-label">Spoken Languages</p>
            <div className="edu-tags">
              <span className="edu-tag">Urdu — Native / Full Professional</span>
              <span className="edu-tag">English — Professional Working Proficiency</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
