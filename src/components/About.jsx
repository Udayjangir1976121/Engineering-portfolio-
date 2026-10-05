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
          <p className="about-lede">Electronics &amp; Computer Engineering student at MBM University, Jodhpur. I build things with microcontrollers, sensors and robots.</p>
          <p>Main areas: embedded firmware (STM32, ESP32), ROS2 robotics, motor control, computer vision and hardware-software integration. Currently working on a simulation-based BMS and a low-cost mapping robot.</p>
          <p>I have built a 4-DOF robotic arm, a 15 kg battlebot, a holonomic ROS2 robot for e-Yantra and spent time understanding ESP32 and ESP-IDF from scratch. I also had a Railway S&amp;T internship covering signalling and telecoms.</p>
          <p>I care about understanding how systems actually work — from the signal and register level up — not just getting code to run.</p>
        </div>

        <div className="about-quote">
          <span className="quote-mark">"</span>
          <p>From the register level up.</p>
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
          <p>Railway Signalling &amp; Telecommunications exposure.</p>
        </div>
      </div>
    </section>
  );
}
