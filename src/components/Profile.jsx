import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Smartphone } from 'lucide-react';
import './Profile.css';

const roles = [
  'Flutter Developer',
  'Full-Stack Builder',
  'Cross-Platform Engineer',
  'Problem Solver',
];

function Profile() {
  const [displayed, setDisplayed] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];

    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1500);
        }
      } else {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, deleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section className="profile-section container animate-fade-in" id="profile">

      {/* ── Left Content ── */}
      <div className="profile-content">
        <p className="profile-eyebrow">Flutter Developer</p>
        <h1 className="name">Musharraf <em>Abbasi</em></h1>
        <div className="profile-divline"></div>

        {/* Typing Role */}
        <h3 className="role">
          {displayed}
          <span className="cursor-blink">|</span>
        </h3>

        <p className="bio text-muted">
          Flutter Developer with hands-on experience building clean, responsive, cross-platform
          mobile applications. Currently at MorosoftLabs, focused on advanced state management with
          Riverpod and Provider, offline-first architecture using Hive, and seamless REST API
          integration with C# ASP.NET. Comfortable across the full stack, including backend
          development and relational/NoSQL database management.
        </p>

        {/* Tech Tags */}
        <div className="profile-tags">
          <span className="profile-tag">Flutter</span>
          <span className="profile-tag">Dart</span>
          <span className="profile-tag">Riverpod</span>
          <span className="profile-tag">C# ASP.NET</span>
          <span className="profile-tag">MongoDB</span>
          <span className="profile-tag">Firebase</span>
        </div>

        {/* Buttons & Icons */}
        <div className="social-links">
          <a href="#contact" className="social-btn primary">
            <Mail size={18} /> Contact Me
          </a>
          <a href="/Musharraf_CV.pdf" download className="social-btn secondary">
            ↓ Download CV
          </a>
          <a href="https://github.com/shariabbaxi72-ctrl" className="social-icon" target="_blank" rel="noreferrer">
            <Github size={22} />
          </a>
          <a href="https://linkedin.com/in/musharraf-abbasi-096126365" className="social-icon" target="_blank" rel="noreferrer">
            <Linkedin size={22} />
          </a>
          <a href="tel:+923300358438" className="social-icon">
            <Smartphone size={22} />
          </a>
        </div>
      </div>

      {/* ── Right — Circular Image ── */}
      <div className="profile-image-container animate-float">
        <div className="image-wrapper glow-effect">
          <div className="animated-border"></div>
          <div className="avatar-placeholder" style={{ padding: '6px' }}>
            <img
              src="/profile.jpeg"
              alt="Musharraf Mehmood Abbasi"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
            />
          </div>
        </div>
        <div className="floating-badge badge-1 glass-card">
          <span>📱</span> Mobile Developer
        </div>
        <div className="floating-badge badge-2 glass-card">
          <span>⚡</span> Flutter
        </div>
      </div>

    </section>
  );
}

export default Profile;
