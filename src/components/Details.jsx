// src/components/Details.jsx

import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'
import resume from '../assets/resume.pdf'

const styles = css`
  a {
    color: #111;
    font-family: 'helvetica neue', helvetica, sans-serif;
    transition: color 0.15s ease-in;
    text-decoration: none;

    @media (prefers-color-scheme: dark) {
      color: #eee;
    }
  }

  a:hover {
    color: #aaa;

    @media (prefers-color-scheme: dark) {
      color: #555;
    }
  }

  .links {
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
    margin-bottom: 4rem;

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    li {
      margin-top: 0.5rem;
      a {
        font-weight: 400;
        transition: color 0.15s ease-in;
        text-decoration: none;
        text-transform: lowercase;
      }
    }
  }

  .contact {
    font-weight: 700;
  }
`

// eslint-disable-next-line no-unused-vars
const Details = ({ onNavigate }) => {
  return (
    <section className={styles}>
      <div className="links">
        <ul>
          <li>
            <a
              href="https://linkedin.com/in/brennanglynn"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
          </li>
          <li>
            <a
              href="https://github.com/brennanglynn"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
          </li>
          {/* <li>
            <a
              href="#projects"
              onClick={e => {
                e.preventDefault()
                onNavigate('projects')
              }}
            >
              projects
            </a>
          </li> */}
          <li>
            <a href={resume} target="_blank" rel="noopener noreferrer">
              resume
            </a>
          </li>
        </ul>
      </div>

      <section className="contact">
        <a href="mailto:glynnbrennan@gmail.com">contact</a>
      </section>
    </section>
  )
}

export default Details

Details.propTypes = {
  onNavigate: PropTypes.func.isRequired,
}
