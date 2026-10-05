import React from 'react';

export default function Contact({ onOpenContact }) {
  return (
    <section className="contact-section" id="contact">
      <div className="container contact-inner">
        <div>
          <div className="section-code">05 / SIGNAL</div>
          <h2>LET'S BUILD SOMETHING</h2>
          <p>Interested in embedded systems, robotics or engineering projects? Get in touch.</p>
        </div>
        <div className="contact-links">
          <button className="pixel-button" onClick={onOpenContact}>
            OPEN CONTACTS <span>→</span>
          </button>
        </div>
      </div>
      <div className="contact-scene" aria-hidden="true">
        <div className="contact-moon" />
        <div className="contact-hill hill-a" /><div className="contact-hill hill-b" />
        <div className="contact-tower"><span /><span /><span /></div>
        <div className="contact-ground" />
      </div>
    </section>
  );
}
