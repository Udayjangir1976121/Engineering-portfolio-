import React from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectGrid({ projects, onOpen }) {
  return (
    <section className="section container projects-section" id="projects">
      <div className="section-heading">
        <div>
          <div className="section-code">02 / BUILD LOG</div>
          <h2>THINGS I'VE BUILT</h2>
        </div>
        <p>The work is the story. The interface just gets out of the way.</p>
      </div>
      <div className="project-grid">
        {projects.map((project) => <ProjectCard key={project.id} project={project} onOpen={onOpen} />)}
      </div>
    </section>
  );
}
