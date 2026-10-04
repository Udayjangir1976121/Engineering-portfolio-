import React from 'react';

function Scene({ accent, index }) {
  return (
    <div className={`project-scene scene-${accent}`} aria-hidden="true">
      <div className="scene-line line-a" /><div className="scene-line line-b" />
      <div className="scene-chip">{index}</div>
      <div className="scene-panel">
        <span className="panel-dot" /><span className="panel-bar" /><span className="panel-bar short" />
      </div>
      <div className="scene-node node-a" /><div className="scene-node node-b" /><span className="scene-pixel px1" /><span className="scene-pixel px2" /><span className="scene-pixel px3" />
      <div className="scene-object" />
      <div className="scene-groundline" />
    </div>
  );
}

export default function ProjectCard({ project, onOpen }) {
  return (
    <article className={`project-card accent-${project.accent}`}>
      <button className="project-card-button" onClick={() => onOpen(project.id)} aria-label={`Open ${project.title}`}>
        {project.cover ? (
          <div className="project-scene">
            <img src={project.cover} alt={`${project.title} thumbnail`} style={{ width: '100%', height: '100%', objectFit: project.coverFit || 'cover', display: 'block' }} />
          </div>
        ) : (
          <Scene accent={project.accent} index={project.index} />
        )}
        <div className="project-body">
          <div className="project-meta"><span>{project.index}</span><span>{project.kicker}</span></div>
          <h3>{project.title}</h3>
          <p>{project.short}</p>
          <div className="chip-row">
            {project.chips.map((chip) => <span key={chip}>{chip}</span>)}
          </div>
          <span className="explore">Explore <b>→</b></span>
        </div>
      </button>
    </article>
  );
}
