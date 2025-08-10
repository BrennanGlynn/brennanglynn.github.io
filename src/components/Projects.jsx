import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'
import PlateCalculatorScreenshots from '../assets/PlateCalcScreenshots.png'

const projectData = [
  {
    id: 1,
    title: 'Plate Calculator',
    description:
      'A utility app for Wear OS with a companion phone app for deep customization of plate inventory, barbell weights, and user preferences.',
    stack: ['Kotlin', 'Jetpack Compose', 'Wear OS', 'Android Studio'],
    imageUrl: PlateCalculatorScreenshots,
    links: [
      {
        text: 'Play Store',
        url: '#', // Replace with your link
      },
      {
        text: 'Source Code',
        url: 'https://github.com/BrennanGlynn/PlateCalculator',
      },
    ],
  },
]

const sectionStyles = css`
  width: 100%;
  h2 {
    font-family: 'helvetica neue', helvetica, sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    border-bottom: 1px solid #eee;
    padding-bottom: 0.5rem;
    margin-bottom: 2rem;
  }
`

const backLinkStyles = css`
  display: block;
  margin-bottom: 2rem;
  font-weight: 700;
  text-decoration: none;
  font-family: 'helvetica neue', helvetica, sans-serif;
  color: #333;

  &:hover {
    color: #111;
  }
`

const projectCardStyles = css`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .project-image-wrapper {
    flex: 1;
    min-width: 200px;
  }

  .project-text-content {
    flex: 1.5;
  }

  .project-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
  }

  h3 {
    font-family: 'helvetica neue', helvetica, sans-serif;
    font-size: 1.25rem;
    margin: 0 0 0.5rem 0;
  }

  p {
    color: #333;
    line-height: 1.6;
    margin: 0 0 1rem 0;
  }

  .stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;

    span {
      background-color: #f0f0f0;
      padding: 0.25rem 0.75rem;
      border-radius: 4px;
      font-size: 0.8rem;
      font-family: 'SF Mono', 'Menlo', 'monospace';
    }
  }

  .links a {
    margin-right: 1.5rem;
    font-weight: 700;
    font-size: 0.9rem;
  }
`

const Projects = ({ onNavigate }) => {
  return (
    <section className={sectionStyles}>
      <a
        href="#home"
        className={backLinkStyles}
        onClick={e => {
          e.preventDefault()
          onNavigate('home')
        }}
      >
        &larr; Back to Home
      </a>

      <h2>Projects</h2>
      {projectData.map(project => (
        <article key={project.id} className={projectCardStyles}>
          <div className="project-image-wrapper">
            {project.imageUrl && (
              <img
                src={project.imageUrl}
                alt={`${project.title} screenshot`}
                className="project-image"
              />
            )}
          </div>

          <div className="project-text-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="stack">
              {project.stack.map(tech => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <div className="links">
              {project.links.map(link => (
                <a
                  key={link.text}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}

export default Projects

Projects.propTypes = {
  onNavigate: PropTypes.func.isRequired,
}
