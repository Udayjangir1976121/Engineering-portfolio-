import React from 'react';

export default function Navbar() {
  return (
    <header className="nav-wrap">
      <nav className="nav container" aria-label="Primary">
        <a className="brand" href="#top" aria-label="Anshu home">
          ANSHU<span className="brand-dot">_</span>
        </a>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <span className="nav-pulse" aria-label="Prototype status"><i /> BUILD MODE</span>
      </nav>
    </header>
  );
}
