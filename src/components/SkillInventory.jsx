import React, { useState } from 'react';

const skillCategories = [
  {
    name: 'EMBEDDED',
    skills: [
      ['C', 'systems language'], ['STM32', 'microcontrollers'], ['ESP32', 'wireless MCU'],
      ['ESP-IDF', 'ESP32 SDK'], ['STM32CUBE', 'STM32 tools'], ['GPIO', 'digital I/O'],
      ['ADC', 'analog input'], ['PWM', 'pulse-width mod'], ['RASPBERRY PI', 'linux sbc'],
    ],
  },
  {
    name: 'COMM TECH',
    skills: [
      ['UART', 'serial bus'], ['SPI', 'synchronous bus'], ['I2C', 'device bus'],
    ],
  },
  {
    name: 'ROBOTICS',
    skills: [
      ['ROS2', 'robot middleware'], ['GAZEBO', 'robot simulation'], ['RVIZ', 'robot visualization'],
      ['KINEMATICS', 'robot motion'], ['PID', 'control loops'], ['HOLONOMIC', 'omni-drive'],
    ],
  },
  {
    name: 'VISION',
    skills: [
      ['OPENCV', 'computer vision'], ['ARUCO', 'marker detection'], ['ESP32-CAM', 'embedded camera'],
    ],
  },
  {
    name: 'SIMULATION',
    skills: [
      ['RENODE', 'MCU emulation'], ['OPENMODELICA', 'system modelling'],
    ],
  },
  {
    name: 'PROGRAMMING',
    skills: [
      ['C', 'systems language'], ['PYTHON', 'automation + vision'], ['GIT', 'version control'],
    ],
  },
];

const totalSlots = skillCategories.reduce((sum, cat) => sum + cat.skills.length, 0);

export default function SkillInventory() {
  const [active, setActive] = useState(null);

  let globalIndex = 0;

  return (
    <section className="section container inventory-section" id="skills">
      <div className="section-heading">
        <div>
          <div className="section-code">03 / INVENTORY</div>
          <h2>ENGINEERING INVENTORY</h2>
        </div>
        <p>Tools, buses and platforms — organized by domain. Hover to inspect.</p>
      </div>
      <div className="inventory-frame">
        <div className="inventory-topbar"><span>WORKBENCH</span><span>{totalSlots} SLOTS</span></div>
        {skillCategories.map((category) => (
          <div key={category.name} className="inventory-category">
            <div className="inventory-category-label">{category.name}</div>
            <div className="inventory-grid">
              {category.skills.map(([name, hint]) => {
                const idx = globalIndex++;
                return (
                  <button
                    className={`inventory-slot ${active === idx ? 'is-active' : ''}`}
                    key={`${category.name}-${name}`}
                    onMouseEnter={() => setActive(idx)}
                    onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(idx)}
                    onBlur={() => setActive(null)}
                    title={hint}
                  >
                    <span className="slot-index">{String(idx + 1).padStart(2, '0')}</span>
                    <strong>{name}</strong>
                    <span className="slot-corner" />
                    {active === idx && <span className="slot-tooltip">{hint}</span>}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
