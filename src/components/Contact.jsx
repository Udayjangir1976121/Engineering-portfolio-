import React from 'react';

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container contact-inner">
        <div>
          <div className="section-code">05 / SIGNAL</div>
          <h2>LET'S BUILD SOMETHING</h2>
          <p>Interested in embedded systems, robotics or engineering projects? Reach out through any of the links below.</p>
        </div>
        <div className="contact-links">
          <a href="[ADD GITHUB URL]">GitHub <span>↗</span></a>
          <a href="[ADD LINKEDIN URL]">LinkedIn <span>↗</span></a>
          <a href="mailto:[ADD EMAIL]">Email <span>↗</span></a>
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
