// import React from 'react';
// import { Briefcase } from 'lucide-react';
// import './Experience.css';

// const Experience = () => {
//   return (
//     <section className="experience-section" id="experience">
//       <h2 className="section-title gradient-text" style={{ textAlign: 'center' }}>
//   Professional Experience
// </h2>
//       <div className="timeline">
//         <div className="timeline-item">

//           {/* Top Accent Bar */}
//           <div className="card-accent-bar"></div>

//           <div className="card-body">

//             {/* Header Row */}
//             <div className="job-header">
//               <h3 className="job-title">Flutter Developer</h3>
//               <div className="live-badge">
//                 <span className="live-dot"></span>
//                 <span>Live</span>
//               </div>
//             </div>

//             <p className="company">
//               MorosoftLabs
//             </p>

//             <div className="card-divider"></div>

//             {/* Date Row */}
//             <div className="date-row">
//               <span className="duration">2025 – Present</span>
//               <span className="date-right">2025 – Present</span>
//             </div>

//             {/* Tech Tags */}
//             <div className="tech-row">
//               <span className="tech-tag tag-react">Flutter</span>
//               <span className="tech-tag tag-node">Riverpod</span>
//               <span className="tech-tag tag-mongo">Hive</span>
//               <span className="tech-tag tag-express">C# ASP.NET</span>
//             </div>

//             {/* Description */}
//             <ul className="job-description">
//               <li>Develop and maintain high-performance cross-platform mobile applications using Flutter and Dart</li>
//               <li>Manage complex app state, async caching, and efficient UI rebuilding using Riverpod and Provider</li>
//               <li>Build offline-first mobile workflows using Hive for local storage, syncing seamlessly to the cloud</li>
//               <li>Integrate and consume secure RESTful Web APIs built with C# ASP.NET, focusing on clean architecture</li>
//               <li>Work with Firebase services (Authentication, Firestore, Cloud Storage)</li>
//               <li>Manage data across relational (MS SQL Server) and NoSQL (MongoDB) databases</li>
//               <li>Write security-conscious API and backend code, backed by basic penetration-testing exposure</li>
//               <li>Collaborate via Git/GitHub, delivering scalable, maintainable digital products</li>
//             </ul>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;

import React from 'react';
import { Briefcase } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <h2 className="section-title gradient-text" style={{ textAlign: 'center' }}>
  Professional Experience
</h2>
      <div className="timeline">
        <div className="timeline-item">

          {/* Top Accent Bar */}
          <div className="card-accent-bar"></div>

          <div className="card-body">

            {/* Header Row */}
            <div className="job-header">
              <h3 className="job-title">Flutter Developer</h3>
              <div className="live-badge">
                <span className="live-dot"></span>
                <span>Live</span>
              </div>
            </div>

            <p className="company">
              MorosoftLabs
            </p>

            <div className="card-divider"></div>

            {/* Date Row */}
            <div className="date-row">
              <span className="duration">2025 – Present</span>
              <span className="date-right">2025 – Present</span>
            </div>

            {/* Tech Tags */}
            <div className="tech-row">
              <span className="tech-tag tag-react">Flutter</span>
              <span className="tech-tag tag-node">Riverpod</span>
              <span className="tech-tag tag-mongo">Hive</span>
              <span className="tech-tag tag-express">C# ASP.NET</span>
              <span className="tech-tag tag-node">Node.js</span>
              <span className="tech-tag tag-express">Express.js</span>
              <span className="tech-tag tag-mongo">MongoDB Atlas</span>
              <span className="tech-tag tag-react">Cloud Deployment</span>
            </div>

            {/* Description */}
            <ul className="job-description">
              <li>Develop and maintain high-performance cross-platform mobile applications using Flutter and Dart</li>
              <li>Manage complex app state, async caching, and efficient UI rebuilding using Riverpod and Provider</li>
              <li>Build offline-first mobile workflows using Hive for local storage, syncing seamlessly to the cloud</li>
              <li>Integrate and consume secure RESTful Web APIs built with C# ASP.NET, focusing on clean architecture</li>
              <li>Build lightweight backend services with Node.js and Express, deployed independently to the cloud for 24/7 uptime</li>
              <li>Work with Firebase services (Authentication, Firestore, Cloud Storage)</li>
              <li>Manage data across relational (MS SQL Server) and NoSQL (MongoDB, MongoDB Atlas) databases</li>
              <li>Write security-conscious API and backend code, backed by basic penetration-testing exposure</li>
              <li>Collaborate via Git/GitHub, delivering scalable, maintainable digital products</li>
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
