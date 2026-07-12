// import './Skills.css';

// const categories = [
//     {
//         title: 'Mobile Development',
//         color: '#22d3ee',
//         bg: 'rgba(34,211,238,0.1)',
//         border: 'rgba(34,211,238,0.25)',
//         badgeBg: 'rgba(34,211,238,0.12)',
//         badgeBorder: 'rgba(34,211,238,0.3)',
//         skills: [
//             { name: 'Flutter',     emoji: '💙', level: 'Expert' },
//             { name: 'Dart',        emoji: '🎯', level: 'Expert' },
//             { name: 'iOS & Android', emoji: '📱', level: 'Expert' },
//         ]
//     },
//     {
//         title: 'State Management & Architecture',
//         color: '#a78bfa',
//         bg: 'rgba(139,92,246,0.1)',
//         border: 'rgba(139,92,246,0.25)',
//         badgeBg: 'rgba(139,92,246,0.12)',
//         badgeBorder: 'rgba(139,92,246,0.3)',
//         skills: [
//             { name: 'Riverpod',        emoji: '🔄', level: 'Expert' },
//             { name: 'Provider',        emoji: '🧩', level: 'Expert' },
//             { name: 'Offline-First',   emoji: '📶', level: 'Expert' },
//             { name: 'Clean Architecture', emoji: '🏗️', level: 'Mid' },
//         ]
//     },
//     {
//         title: 'Backend & APIs',
//         color: '#34d399',
//         bg: 'rgba(16,185,129,0.1)',
//         border: 'rgba(16,185,129,0.25)',
//         badgeBg: 'rgba(16,185,129,0.12)',
//         badgeBorder: 'rgba(16,185,129,0.3)',
//         skills: [
//             { name: 'C# ASP.NET',  emoji: '🟣', level: 'Expert' },
//             { name: '.NET Core',   emoji: '⚙️', level: 'Expert' },
//             { name: 'REST APIs',   emoji: '🔌', level: 'Expert' },
//             { name: 'Node.js',     emoji: '🟩', level: 'Mid'    },
//         ]
//     },
//     {
//         title: 'Databases',
//         color: '#fb923c',
//         bg: 'rgba(249,115,22,0.1)',
//         border: 'rgba(249,115,22,0.25)',
//         badgeBg: 'rgba(249,115,22,0.12)',
//         badgeBorder: 'rgba(249,115,22,0.3)',
//         skills: [
//             { name: 'MS SQL Server', emoji: '🗄️', level: 'Expert' },
//             { name: 'MongoDB',       emoji: '🍃', level: 'Expert' },
//             { name: 'Hive (Local DB)', emoji: '🐝', level: 'Expert' },
//         ]
//     },
//     {
//         title: 'Cloud & Tools',
//         color: '#60a5fa',
//         bg: 'rgba(59,130,246,0.1)',
//         border: 'rgba(59,130,246,0.25)',
//         badgeBg: 'rgba(59,130,246,0.12)',
//         badgeBorder: 'rgba(59,130,246,0.3)',
//         skills: [
//             { name: 'Firebase',      emoji: '🔥', level: 'Expert' },
//             { name: 'Git/GitHub',    emoji: '🐙', level: 'Expert' },
//             { name: 'Postman',       emoji: '📮', level: 'Mid'    },
//             { name: 'Android Studio', emoji: '🤖', level: 'Expert' },
//         ]
//     },
//     {
//         title: 'Security Awareness',
//         color: '#f87171',
//         bg: 'rgba(248,113,113,0.1)',
//         border: 'rgba(248,113,113,0.25)',
//         badgeBg: 'rgba(248,113,113,0.12)',
//         badgeBorder: 'rgba(248,113,113,0.3)',
//         skills: [
//             { name: 'Kali Linux',      emoji: '🐧', level: 'Mid' },
//             { name: 'DVWA',            emoji: '🛡️', level: 'Mid' },
//             { name: 'Network Scanning', emoji: '📡', level: 'Mid' },
//         ]
//     },
// ];

// function Skills() {
//     return (
//         <section className="skills-section container" id="skills" style={{ textAlign: 'center' }}>
//             <h2 className="section-title gradient-text" style={{ textAlign: 'center' }}>
//   Technical Skills
// </h2>

//             <div className="skills-categories">
//                 {categories.map((cat, ci) => (
//                     <div key={ci} className="skill-category">

//                         {/* Category header */}
//                         <div className="cat-header">
//                             <span className="cat-title" style={{ color: cat.color }}>
//                                 {cat.title}
//                             </span>
//                             <div
//                                 className="cat-line"
//                                 style={{ background: `linear-gradient(90deg, ${cat.color}66, transparent)` }}
//                             ></div>
//                             <span
//                                 className="cat-count"
//                                 style={{ color: cat.color, background: cat.badgeBg, borderColor: cat.border }}
//                             >
//                                 {cat.skills.length} skills
//                             </span>
//                         </div>

//                         {/* Skill cards */}
//                         <div className="skills-grid">
//                             {cat.skills.map((skill, si) => (
//                                 <div
//                                     key={si}
//                                     className="skill-card"
//                                     style={{
//                                         background: cat.bg,
//                                         borderColor: cat.border,
//                                         animationDelay: `${(ci * 0.1) + (si * 0.05)}s`
//                                     }}
//                                 >
//                                     <div className="skill-emoji">{skill.emoji}</div>
//                                     <div className="skill-name">{skill.name}</div>
//                                     <div
//                                         className="skill-badge"
//                                         style={{
//                                             color: cat.color,
//                                             background: cat.badgeBg,
//                                             borderColor: cat.badgeBorder
//                                         }}
//                                     >
//                                         {skill.level}
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>

//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }

// export default Skills;

import './Skills.css';

const categories = [
    {
        title: 'Mobile Development',
        color: '#22d3ee',
        bg: 'rgba(34,211,238,0.1)',
        border: 'rgba(34,211,238,0.25)',
        badgeBg: 'rgba(34,211,238,0.12)',
        badgeBorder: 'rgba(34,211,238,0.3)',
        skills: [
            { name: 'Flutter',     emoji: '💙', level: 'Expert' },
            { name: 'Dart',        emoji: '🎯', level: 'Expert' },
            { name: 'iOS & Android', emoji: '📱', level: 'Expert' },
        ]
    },
    {
        title: 'State Management & Architecture',
        color: '#a78bfa',
        bg: 'rgba(139,92,246,0.1)',
        border: 'rgba(139,92,246,0.25)',
        badgeBg: 'rgba(139,92,246,0.12)',
        badgeBorder: 'rgba(139,92,246,0.3)',
        skills: [
            { name: 'Riverpod',        emoji: '🔄', level: 'Expert' },
            { name: 'Provider',        emoji: '🧩', level: 'Expert' },
            { name: 'Offline-First',   emoji: '📶', level: 'Expert' },
            { name: 'Clean Architecture', emoji: '🏗️', level: 'Mid' },
        ]
    },
    {
        title: 'Backend & APIs',
        color: '#34d399',
        bg: 'rgba(16,185,129,0.1)',
        border: 'rgba(16,185,129,0.25)',
        badgeBg: 'rgba(16,185,129,0.12)',
        badgeBorder: 'rgba(16,185,129,0.3)',
        skills: [
            { name: 'C# ASP.NET',  emoji: '🟣', level: 'Expert' },
            { name: '.NET Core',   emoji: '⚙️', level: 'Expert' },
            { name: 'REST APIs',   emoji: '🔌', level: 'Expert' },
            { name: 'Node.js',     emoji: '🟩', level: 'Mid'    },
            { name: 'Express.js',  emoji: '🚂', level: 'Mid'    },
        ]
    },
    {
        title: 'Databases',
        color: '#fb923c',
        bg: 'rgba(249,115,22,0.1)',
        border: 'rgba(249,115,22,0.25)',
        badgeBg: 'rgba(249,115,22,0.12)',
        badgeBorder: 'rgba(249,115,22,0.3)',
        skills: [
            { name: 'MS SQL Server', emoji: '🗄️', level: 'Expert' },
            { name: 'MongoDB',       emoji: '🍃', level: 'Expert' },
            { name: 'MongoDB Atlas', emoji: '☁️', level: 'Mid'    },
            { name: 'Hive (Local DB)', emoji: '🐝', level: 'Expert' },
        ]
    },
    {
        title: 'Cloud & Tools',
        color: '#60a5fa',
        bg: 'rgba(59,130,246,0.1)',
        border: 'rgba(59,130,246,0.25)',
        badgeBg: 'rgba(59,130,246,0.12)',
        badgeBorder: 'rgba(59,130,246,0.3)',
        skills: [
            { name: 'Firebase',      emoji: '🔥', level: 'Expert' },
            { name: 'Cloud Deployment', emoji: '☁️', level: 'Mid' },
            { name: 'Git/GitHub',    emoji: '🐙', level: 'Expert' },
            { name: 'Postman',       emoji: '📮', level: 'Mid'    },
            { name: 'Android Studio', emoji: '🤖', level: 'Expert' },
        ]
    },
    {
        title: 'Security Awareness',
        color: '#f87171',
        bg: 'rgba(248,113,113,0.1)',
        border: 'rgba(248,113,113,0.25)',
        badgeBg: 'rgba(248,113,113,0.12)',
        badgeBorder: 'rgba(248,113,113,0.3)',
        skills: [
            { name: 'Kali Linux',      emoji: '🐧', level: 'Mid' },
            { name: 'DVWA',            emoji: '🛡️', level: 'Mid' },
            { name: 'Network Scanning', emoji: '📡', level: 'Mid' },
        ]
    },
];

function Skills() {
    return (
        <section className="skills-section container" id="skills" style={{ textAlign: 'center' }}>
            <h2 className="section-title gradient-text" style={{ textAlign: 'center' }}>
  Technical Skills
</h2>

            <div className="skills-categories">
                {categories.map((cat, ci) => (
                    <div key={ci} className="skill-category">

                        {/* Category header */}
                        <div className="cat-header">
                            <span className="cat-title" style={{ color: cat.color }}>
                                {cat.title}
                            </span>
                            <div
                                className="cat-line"
                                style={{ background: cat.color }}
                            ></div>
                            <span
                                className="cat-count"
                                style={{ color: cat.color, background: cat.badgeBg, borderColor: cat.border }}
                            >
                                {cat.skills.length} skills
                            </span>
                        </div>

                        {/* Skill cards */}
                        <div className="skills-grid">
                            {cat.skills.map((skill, si) => (
                                <div
                                    key={si}
                                    className="skill-card"
                                    style={{
                                        background: cat.bg,
                                        borderColor: cat.border,
                                        animationDelay: `${(ci * 0.1) + (si * 0.05)}s`
                                    }}
                                >
                                    <div className="skill-emoji">{skill.emoji}</div>
                                    <div className="skill-name">{skill.name}</div>
                                    <div
                                        className="skill-badge"
                                        style={{
                                            color: cat.color,
                                            background: cat.badgeBg,
                                            borderColor: cat.badgeBorder
                                        }}
                                    >
                                        {skill.level}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;