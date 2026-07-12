import { Github } from 'lucide-react';
import './Projects.css';

const projects = [
    {
        id: 1,
        title: 'Sleep Tracker',
        description: 'A full-stack sleep tracking app — log sleep/wake times and the app auto-calculates total hours, keeps a history, and visualizes your weekly sleep pattern on a chart. Backend runs independently 24/7 on the cloud, so the app works from any network, not just the same WiFi as the dev machine. Handled timezone sync between client and server, and made the app resilient to network drops instead of crashing.',
        tags: ['Flutter', 'Riverpod', 'Node.js', 'Express', 'MongoDB Atlas'],
        gradient: 'linear-gradient(135deg, #0b0f2e 0%, #131a45 50%, #1e1054 100%)',
        accent: '#7c8cff',
        iconBg: 'linear-gradient(135deg, #5b4fe0, #7c8cff)',
        iconShadow: '#7c8cff',
        iconEmoji: '🌙',
        github: 'https://github.com/shariabbaxi72-ctrl/sleep-tracker',
        githubBackend: 'https://github.com/shariabbaxi72-ctrl/sleep-log-backend'
    },
    {
        id: 2,
        title: 'Repair Your Car (RYC)',
        description: 'A smart car-troubleshooting app providing step-by-step, expert-verified pictorial guides. Distinct dashboards for Users, Experts, and Admins, with safe data-deletion checks and a rating system.',
        tags: ['Flutter', 'Dart', 'C# ASP.NET', 'MS SQL Server'],
        gradient: 'linear-gradient(135deg, #1a0533 0%, #2d1b69 50%, #4c1d95 100%)',
        accent: '#8b5cf6',
        iconBg: 'linear-gradient(135deg, #4c1d95, #8b5cf6)',
        iconShadow: '#8b5cf6',
        iconEmoji: '🚗',
        github: 'https://github.com/shariabbaxi72-ctrl/ryc'
    },
    {
        id: 3,
        title: 'Clinic Management System',
        description: 'Patients search doctors by specialty, view real-time slot availability, and manage appointments with status tracking. Debounced multi-criteria search, scalable REST API with C#.NET Core and MongoDB.',
        tags: ['Flutter', 'Provider', 'C#.NET Core', 'MongoDB'],
        gradient: 'linear-gradient(135deg, #052e16 0%, #065f46 50%, #0d9488 100%)',
        accent: '#10b981',
        iconBg: 'linear-gradient(135deg, #065f46, #10b981)',
        iconShadow: '#10b981',
        iconEmoji: '🏥',
        github: 'https://github.com/shariabbaxi72-ctrl/clinic_mangement'
    },
    {
        id: 4,
        title: 'ShopFlow E-Commerce App',
        description: 'Dual-role (Customer/Admin) e-commerce app with real-time data sync using Firebase Auth and Cloud Firestore. Full shopping flow, custom real-time notification system, camera picker, and cities autocomplete.',
        tags: ['Flutter', 'Riverpod', 'Firebase', 'Cloud Firestore'],
        gradient: 'linear-gradient(135deg, #1c0a00 0%, #7c2d12 50%, #c2410c 100%)',
        accent: '#f97316',
        iconBg: 'linear-gradient(135deg, #7c2d12, #f97316)',
        iconShadow: '#f97316',
        iconEmoji: '🛒',
        github: 'https://github.com/shariabbaxi72-ctrl/Shop-Flow'
    },
    {
        id: 5,
        title: 'Workout Logger',
        description: 'A lightweight fitness app for gym-goers to track daily routines. Riverpod for predictable state management and Hive so users can log workouts instantly without waiting on network connectivity.',
        tags: ['Flutter', 'Dart', 'Riverpod', 'Hive'],
        gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        accent: '#3b82f6',
        iconBg: 'linear-gradient(135deg, #1e40af, #3b82f6)',
        iconShadow: '#3b82f6',
        iconEmoji: '🏋️',
        github: 'https://github.com/shariabbaxi72-ctrl/workout_logger'
    }
];

function Projects() {
    return (
        <section className="projects-section container" id="projects">
            <h2 className="section-title gradient-text" style={{ textAlign: 'center' }}>
  Technical Projects
</h2>

            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">

                        <div className="project-banner" style={{ background: project.gradient }}>
                            <div
                                className="project-icon-wrapper"
                                style={{
                                    background: project.iconBg,
                                    boxShadow: `0 8px 32px ${project.iconShadow}80, 0 0 0 1px ${project.iconShadow}30`,
                                }}
                            >
                                <span className="project-icon">{project.iconEmoji}</span>
                            </div>
                            <div className="banner-glow" style={{ background: project.accent }}></div>
                        </div>

                        <div className="project-body">
                            <h3 className="project-title" style={{ '--accent': project.accent }}>
                                {project.title}
                            </h3>
                            <p className="project-desc">{project.description}</p>

                            <div className="project-tags">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="tag" style={{ '--accent': project.accent }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="project-links" style={{ '--accent': project.accent }}>
                            <a
                                href={project.github}
                                className="proj-btn proj-btn-primary"
                                style={{ background: project.accent, boxShadow: `0 4px 14px ${project.accent}40` }}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Github size={16} />
                                Code
                            </a>
                            {project.githubBackend && (
                                <a
                                    href={project.githubBackend}
                                    className="proj-btn"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Github size={16} />
                                    Backend
                                </a>
                            )}
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;