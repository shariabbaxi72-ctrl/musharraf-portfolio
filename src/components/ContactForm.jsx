import React, { useState } from 'react';
import { Send, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

// EmailJS credentials (dashboard.emailjs.com se liye gaye)
const SERVICE_ID = 'service_771l7ol';
const TEMPLATE_ID = 'template_e2irxpj';
const PUBLIC_KEY = 'O9R5ZTjW9YH8dIQ-X';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Template variables — inke naam EmailJS template ke {{...}} fields se match hone chahiye
        const templateParams = {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            time: new Date().toLocaleString(),
        };

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setStatus('success');
                setFormData({ name: '', email: '', message: '' }); // Form fields clear karein
                setTimeout(() => setStatus(''), 3000);
            })
            .catch((err) => {
                console.error('FAILED...', err);
                setStatus('error');
                setTimeout(() => setStatus(''), 3000);
            });
    };

    const currentYear = new Date().getFullYear();

    return (
        <section className="contact-section container" id="contact">
            <h2 className="section-title gradient-text" style={{ textAlign: 'center' }}>
  Get In Touch
</h2>

            <div className="contact-container">
                <div className="contact-info glass-card">
                    <h3>Let's build something amazing together!</h3>
                    <p className="text-muted mb-4">
                        Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="direct-contact">
                        <a
                            href="https://wa.me/923300358438"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="whatsapp-btn"
                        >
                            <MessageCircle size={24} />
                            Chat on WhatsApp
                        </a>
                    </div>

                    <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--text-muted)' }}>
                        <p><strong>Email:</strong> shariabbaxi72@gmail.com</p>
                        <p><strong>Phone:</strong> +92-330-0358438</p>
                        <p><strong>Location:</strong> Rawalpindi, Punjab, Pakistan</p>
                    </div>
                </div>

                <form className="contact-form glass-card" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your.email@example.com"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell me about your project..."
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className={`submit-btn ${status === 'sending' ? 'sending' : ''} ${status === 'success' ? 'success' : ''} ${status === 'error' ? 'error' : ''}`}
                        disabled={status === 'sending' || status === 'success'}
                    >
                        {status === 'sending' ? 'Sending...' : 
                         status === 'success' ? 'Message Sent!' : 
                         status === 'error' ? 'Failed! Try Again' : (
                            <>
                                <Send size={18} /> Send Message
                            </>
                        )}
                    </button>
                </form>
            </div>

            <footer className="footer">
                <p className="text-muted">© {currentYear} Musharraf Mehmood Abbasi. All rights reserved.</p>
                <p className="text-muted small">Flutter Developer</p>
            </footer>
        </section>
    );
};

export default ContactForm;