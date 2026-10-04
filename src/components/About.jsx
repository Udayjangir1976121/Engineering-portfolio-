import React from 'react';

export default function About() {
  return (
    <section className="section container about-section" id="about">
      <div className="section-heading">
        <div>
          <div className="section-code">04 / PERSON</div>
          <h2>ABOUT THE BUILDER</h2>
        </div>
        <p>Student, builder and systems learner working across electronics, embedded systems and robotics.</p>
      </div>

      <div className="about-layout">
        <div className="about-copy">
          <p className="about-lede">I am an Electronics &amp; Computer Engineering student at MBM University, Jodhpur, interested in building systems that connect software with the physical world.</p>
          <p>My projects have taken me from physical robotics and embedded controllers to ROS2-based robots, computer vision, sensor systems and simulation-driven embedded systems.</p>
          <p>I have worked with robotic arms, combat robots, ESP32 systems, ROS2 and holonomic robots, and I am currently exploring deeper embedded-system design through an STM32-based battery-management simulation.</p>
          <p>I am particularly interested in understanding how sensors, firmware, communication, control algorithms and physical systems interact — rather than treating each technology as an isolated tool.</p>
        </div>

        <div className="about-quote">
          <span className="quote-mark">"</span>
          <p>I like understanding machines from the signal level up — from microcontroller firmware and sensors to robot motion, perception and system-level behaviour.</p>
          <div className="quote-line" />
          <span>WORKING PRINCIPLE / ANSHU</span>
        </div>
      </div>

      <div className="about-info-grid">
        <div className="info-card">
          <span className="info-label">EDUCATION</span>
          <strong>Electronics &amp; Computer Engineering</strong>
          <p>MBM University · Jodhpur · 4th year</p>
        </div>
        <div className="info-card">
          <span className="info-label">CURRENT DIRECTION</span>
          <strong>Embedded Systems + Robotics</strong>
          <p>Building depth in microcontrollers, control, sensing, communications and robot software.</p>
        </div>
        <div className="info-card">
          <span className="info-label">INDUSTRY EXPOSURE</span>
          <strong>Railway S&amp;T Internship</strong>
          <p>Railway Signalling &amp; Telecommunications exposure. [ADD INTERNSHIP DETAILS]</p>
        </div>
      </div>
    </section>
  );
}
