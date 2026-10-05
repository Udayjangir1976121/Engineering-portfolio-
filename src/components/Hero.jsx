import React from 'react';

function HeroScene({ onRobotClick }) {
  return (
    <div className="hero-scene" aria-label="Decorative pixel engineering scene">
      <div className="scene-sky">
        <span className="pixel-star star-1" />
        <span className="pixel-star star-2" />
        <span className="pixel-star star-3" />
        <span className="pixel-star star-4" />
        <span className="cloud cloud-1" />
        <span className="cloud cloud-2" />
        <div className="scene-sign">LAB 07 // ONLINE</div>
      </div>

      <div className="scene-ground">
        <span className="ground-block block-1" />
        <span className="ground-block block-2" />
        <span className="ground-block block-3" />
      </div>

      <div className="scene-console">
        <div className="console-top" />
        <div className="console-screen"><span>01</span><b>OK</b></div>
        <div className="console-dots"><i /></div>
        <div className="console-leg leg-a" />
        <div className="console-leg leg-b" />
      </div>

      <span className="pixel-flower flower-a" />
      <span className="pixel-flower flower-b" />

      <div className="pixel-bot" onClick={onRobotClick} style={{ cursor: 'pointer', zIndex: 10 }} title="?">
        <div className="bot-antenna" />
        <div className="bot-head"><span /><span /><div className="bot-mouth" /></div>
        <div className="bot-arm arm-a" />
        <div className="bot-arm arm-b" />
        <div className="bot-body"><i /><i /><i /></div>
        <div className="bot-foot foot-a" />
        <div className="bot-foot foot-b" />
      </div>
    </div>
  );
}

export default function Hero({ onRobotClick }) {
  return (
    <section className="hero container" id="top">
      <div className="hero-copy">
        <div className="eyebrow"><span>001</span> PERSONAL ENGINEERING WORLD</div>
        <h1>Electronics <em>×</em> Embedded <em>×</em> Robotics</h1>
        <p className="hero-lede">Electronics &amp; Computer Engineering student building at the intersection of embedded systems, robotics and intelligent machines.</p>
        <div className="hero-actions">
          <a href="#projects" className="pixel-button">EXPLORE BUILDS <span>→</span></a>
          <span className="hero-note">real projects · portfolio build</span>
        </div>
        <div className="hero-stats">
          <span><b>06</b> builds</span>
          <span><b>05</b> focus areas</span>
          <span><b>∞</b> experiments</span>
        </div>
      </div>
      <HeroScene onRobotClick={onRobotClick} />
    </section>
  );
}
