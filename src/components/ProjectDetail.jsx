import React from 'react';

function DetailScene({ accent }) {
  return (
    <div className={`detail-media-scene scene-${accent}`} aria-label="Project media placeholder">
      <div className="detail-star s1" /><div className="detail-star s2" /><div className="detail-star s3" />
      <div className="detail-board">
        <span className="trace t1" /><span className="trace t2" /><span className="trace t3" />
        <div className="big-chip">SYS</div>
        <div className="led led-1" /><div className="led led-2" /><div className="led led-3" />
      </div>
      <div className="detail-cable cable-1" /><div className="detail-cable cable-2" />
    </div>
  );
}

function Architecture({ items }) {
  return (
    <div className="architecture">
      {items.map((item, idx) => (
        <React.Fragment key={item}>
          <div className="arch-node"><span>{String(idx + 1).padStart(2, '0')}</span>{item}</div>
          {idx < items.length - 1 && <div className="arch-arrow">→</div>}
        </React.Fragment>
      ))}
    </div>
  );
}

function MediaGrid({ project }) {
  const mediaItems = project.media;
  if (!mediaItems || mediaItems.length === 0) {
    return null;
  }

  return (
    <div className="media-grid">
      {mediaItems.map((item, idx) => {
        if (item.type === 'video') {
          if (item.url) {
            return (
              <div className="media-card media-video-card" key={idx}>
                <video src={item.url} controls muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <span>{item.label}</span>
              </div>
            );
          }
          return null;
        }


        if (item.url) {
          return (
            <div className="media-card" key={idx}>
              <img src={item.url} alt={item.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <span>{item.label}</span>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}

function ProjectLinks({ links }) {
  if (!links || links.length === 0) return null;

  const validLinks = links.filter((link) => link.url && !link.url.startsWith('[') && link.url !== '#');
  if (validLinks.length === 0) return null;

  return (
    <div className="detail-cta-row">
      {validLinks.map((link) => {
        return (
          <a
            key={link.label}
            href={link.url}
            className="pixel-button small"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label} <span>↗</span>
          </a>
        );
      })}
    </div>
  );
}

export default function ProjectDetail({ project, onClose }) {
  return (
    <article className={`detail-page accent-${project.accent}`}>
      <div className="container detail-topbar">
        <button className="back-button" onClick={onClose}>← BACK TO WORLD</button>
        <span className="detail-index">PROJECT {project.index}</span>
      </div>

      <div className="container detail-hero">
        <div className="detail-heading">
          <div className="section-code">{project.kicker} / {project.status}</div>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <div className="chip-row larger">
            {project.technologies.map((tech) => <span key={tech}>{tech}</span>)}
          </div>
        </div>
        {project.cover ? (
          <div className="detail-media-scene">
            <img src={project.cover} alt={`${project.title} cover`} style={{ width: '100%', height: '100%', objectFit: project.coverFit || 'cover' }} />
          </div>
        ) : (
          <DetailScene accent={project.accent} />
        )}
      </div>

      <div className="container detail-grid">
        <section className="detail-block full-width">
          <div className="detail-block-title"><span>01</span><h2>WHAT I WAS TRYING TO BUILD</h2></div>
          <p className="detail-intro">{project.description}</p>
          <div className="metric-strip">
            {project.metrics.map(([label, value]) => <div key={label}><small>{label}</small><strong>{value}</strong></div>)}
          </div>
        </section>

        <section className="detail-block full-width">
          <div className="detail-block-title"><span>02</span><h2>HOW IT WORKS</h2></div>
          <Architecture items={project.architecture} />
        </section>

        <section className="detail-block">
          <div className="detail-block-title"><span>03</span><h2>THE BUILD</h2></div>
          <p>{project.implementation}</p>
        </section>

        <section className="detail-block">
          <div className="detail-block-title"><span>04</span><h2>CHALLENGES</h2></div>
          <ul className="detail-list">{project.challenges.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>

        {project.media && project.media.length > 0 && (
          <section className="detail-block full-width">
            <div className="detail-block-title"><span>05</span><h2>MEDIA</h2></div>
            <MediaGrid project={project} />
          </section>
        )}

        <section className="detail-block">
          <div className="detail-block-title"><span>06</span><h2>WHAT I LEARNED</h2></div>
          <ul className="detail-list">{project.learned.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>

        <section className="detail-block">
          <div className="detail-block-title"><span>07</span><h2>RESULT</h2></div>
          <p>{project.result}</p>
          <ProjectLinks links={project.links} />
        </section>
      </div>
    </article>
  );
}
