import React, { useState, useEffect } from 'react';
import './EasterEgg.css';

export default function EasterEgg({ onClose }) {
    const [gameState, setGameState] = useState('running'); // running, gift, opening, revealed
    const [jump, setJump] = useState(false);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setPrefersReducedMotion(mediaQuery.matches);
        const onChange = (e) => setPrefersReducedMotion(e.matches);
        mediaQuery.addEventListener('change', onChange);
        return () => mediaQuery.removeEventListener('change', onChange);
    }, []);

    const triggerJump = () => {
        if (gameState !== 'running') return;
        if (!jump) {
            setJump(true);
            setTimeout(() => setJump(false), 550);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
            if ((e.key === ' ' || e.key === 'ArrowUp') && gameState === 'running') {
                e.preventDefault();
                triggerJump();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [gameState, jump, onClose]);

    useEffect(() => {
        if (gameState === 'running') {
            if (prefersReducedMotion) {
                setGameState('gift'); // Skip to gift if reduced motion
                return;
            }
            const t = setTimeout(() => {
                setGameState('gift');
            }, 5000);
            return () => clearTimeout(t);
        }
    }, [gameState, prefersReducedMotion]);

    const onCollectGift = () => {
        setGameState('opening');
        if (prefersReducedMotion) {
            setGameState('revealed');
        } else {
            setTimeout(() => setGameState('revealed'), 2500);
        }
    };

    return (
        <div className={`ee-overlay ${gameState}`}>
            <button className="ee-close pixel-button" onClick={onClose}>✕ EXIT</button>

            {(gameState === 'running' || gameState === 'gift') && (
                <div className="ee-game-area" onClick={triggerJump}>
                    <div className="ee-floor"></div>
                    <div className={`ee-scenery ${gameState === 'gift' ? 'paused' : ''}`}>
                        <span className="ee-trace ee-t1"></span>
                        <span className="ee-trace ee-t2"></span>
                        <span className="ee-trace ee-t3"></span>
                        <div className="ee-label ee-l1">UART</div>
                        <div className="ee-label ee-l2">STM32</div>
                        <div className="ee-label ee-l3">ROS2</div>
                        <div className="ee-label ee-l4">SPI</div>
                        <div className="ee-label ee-l5">ESP32</div>
                    </div>

                    <div className={`pixel-bot ee-bot ${jump ? 'ee-jump' : ''} ${gameState === 'running' && !jump ? 'ee-run' : ''}`}>
                        <div className="bot-antenna" />
                        <div className="bot-head"><span /><span /><div className="bot-mouth" /></div>
                        <div className="bot-arm arm-a" />
                        <div className="bot-arm arm-b" />
                        <div className="bot-body"><i /><i /><i /></div>
                        <div className="bot-foot foot-a" />
                        <div className="bot-foot foot-b" />
                    </div>

                    {gameState === 'gift' && (
                        <button className="ee-gift-chest" onClick={(e) => { e.stopPropagation(); onCollectGift(); }}>
                            <div className="ee-gift-icon">⭐</div>
                            <div className="ee-gift-text">SPECIAL DELIVERY DETECTED<br />CLICK TO COLLECT</div>
                        </button>
                    )}

                    {gameState === 'running' && (
                        <div className="ee-mobile-jump">TAP OR SPACE TO JUMP</div>
                    )}
                </div>
            )}

            {gameState === 'opening' && (
                <div className="ee-opening-anim">
                    <div className="ee-particles"></div>
                    <div className="ee-gift-big">⭐</div>
                </div>
            )}

            {gameState === 'revealed' && (
                <div className="ee-card-container">
                    <div className="ee-win-title">
                        ✦ YOU WON ✦<br /><span>SPECIAL GIFT FROM THE CREATOR</span>
                    </div>

                    <div className="ee-card">
                        <div className="ee-card-header">
                            <h1>UDAY JANGIR</h1>
                            <div className="ee-card-position">ELECTRONICS × EMBEDDED × ROBOTICS</div>
                            <p className="ee-card-profile">Electronics &amp; Computer Engineering student focused on embedded systems, IoT, and hardware-software integration.</p>
                        </div>

                        <div className="ee-card-grid">
                            <div className="ee-card-col">
                                <section>
                                    <h3>EDUCATION</h3>
                                    <div><strong>B.E. Electronics &amp; Computer Engineering</strong></div>
                                    <div>MBM University</div>
                                </section>
                                <section>
                                    <h3>EXPERIENCE</h3>
                                    <div className="ee-exp-item">
                                        <strong>Railway, Signaling &amp; Telecommunications Department</strong>
                                        <div>Internship — 06/2026–07/2026</div>
                                    </div>
                                    <div className="ee-exp-item">
                                        <strong>Jaipur Metro Rail Corporation (JMRC)</strong>
                                        <div>Internship — 06/2025–07/2025</div>
                                    </div>
                                    <div className="ee-exp-item">
                                        <strong>Embedded Systems &amp; Robotics Club (ESRC), MBMU</strong>
                                        <div>Coordinator — 2024–2026</div>
                                    </div>
                                </section>
                                <section>
                                    <h3>CONTACT</h3>
                                    <div className="ee-links">
                                        <a href="mailto:udayjangir1976121@gmail.com" target="_blank" rel="noreferrer">Email</a>
                                        <a href="https://linkedin.com/in/uday-jangir-45ab61287" target="_blank" rel="noreferrer">LinkedIn</a>
                                        <a href="https://github.com/Udayjangir1976121" target="_blank" rel="noreferrer">GitHub</a>
                                    </div>
                                </section>
                            </div>

                            <div className="ee-card-col">
                                <section>
                                    <h3>TECHNICAL SKILLS</h3>
                                    <ul className="ee-skills-list">
                                        <li><strong>Embedded:</strong> ESP32, Microcontrollers, GPIO, PWM, Sensor Integration, Real-Time Systems</li>
                                        <li><strong>Programming:</strong> C, Python, OpenCV</li>
                                        <li><strong>Communication:</strong> UART, I²C, SPI</li>
                                        <li><strong>Robotics &amp; Vision:</strong> ROS 2 Humble, RViz, Gazebo, Computer Vision, ArUco</li>
                                        <li><strong>Tools:</strong> Fusion 360, Proteus, Multisim, DipTrace, Renode, OpenModelica</li>
                                    </ul>
                                </section>
                                <section>
                                    <h3>SELECTED PROJECTS</h3>
                                    <ul className="ee-projects-list">
                                        <li>
                                            <strong>4-DOF Robotic Arm Control System</strong>
                                            <div>C • Microcontroller • PWM • Wi-Fi • Web Interface</div>
                                        </li>
                                        <li>
                                            <strong>Low-Cost 3D Mapping via Stereo Vision &amp; LiDAR Fusion</strong>
                                            <div>ESP32-CAM • Python • OpenCV • ROS 2 Humble • LiDAR</div>
                                        </li>
                                        <li>
                                            <strong>e-Yantra Robotics Competition — Simulation</strong>
                                            <div>Python • ROS 2 • Gazebo • PID Control • ArUco</div>
                                        </li>
                                        <li>
                                            <strong>15 kg BattleBot</strong>
                                            <div>Mechanical Design • High-Torque Drive • Failure Analysis</div>
                                        </li>
                                    </ul>
                                </section>
                            </div>
                        </div>

                        <div className="ee-card-footer">
                            <span className="ee-bar-code">|| ||| | ||| || |||</span>
                            <span>ACCESS GRANTED</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
