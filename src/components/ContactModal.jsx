import React, { useState } from 'react';

export default function ContactModal({ onClose }) {
    const [emailRevealed, setEmailRevealed] = useState(false);

    return (
        <div className="contact-modal-backdrop" onClick={onClose}>
            <div className="contact-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label="Contact">
                <button className="contact-modal-close" onClick={onClose} aria-label="Close">✕</button>
                <div className="contact-modal-code">05 / SIGNAL</div>
                <h2 className="contact-modal-title">LET'S BUILD SOMETHING</h2>
                <p className="contact-modal-sub">Reach out through any of the links below.</p>

                <div className="contact-modal-links">
                    <a
                        href="https://github.com/Udayjangir1976121"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-link-btn"
                    >
                        <span className="contact-link-icon">⌥</span>
                        GitHub
                        <span className="contact-link-arrow">↗</span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/uday-jangir-45ab61287/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-link-btn"
                    >
                        <span className="contact-link-icon">◈</span>
                        LinkedIn
                        <span className="contact-link-arrow">↗</span>
                    </a>

                    {emailRevealed ? (
                        <a
                            href="mailto:udayjangir553@gmail.com"
                            className="contact-link-btn contact-link-email revealed"
                        >
                            <span className="contact-link-icon">@</span>
                            udayjangir553@gmail.com
                            <span className="contact-link-arrow">↗</span>
                        </a>
                    ) : (
                        <button
                            className="contact-link-btn contact-link-email"
                            onClick={() => setEmailRevealed(true)}
                        >
                            <span className="contact-link-icon">@</span>
                            Reveal email
                            <span className="contact-link-arrow">→</span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
