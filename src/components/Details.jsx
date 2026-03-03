import React from 'react'
import { css } from 'emotion'
import { Link } from 'react-router-dom'
import resume from '../assets/resume.pdf'

const styles = css`
  display: flex;
  flex-direction: column;
  background: #fff;
  font-family: 'helvetica neue', helvetica, sans-serif;

  /* Sync with PrinterDashboard */
  max-width: 800px;
  margin: 0 auto;
  padding-top: 4rem;
  width: 100%;

  a {
    color: #111;
    transition: color 0.15s ease-in;
    text-decoration: none;
  }

  a:hover {
    color: #aaa;
  }

  .title {
    margin: 0;
    font-weight: 700;
    font-size: 2.25rem;
    line-height: 1.2;
    text-transform: uppercase;
    letter-spacing: -0.1rem;
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
        text-transform: lowercase;
      }
    }
  }

  .contact {
    font-weight: 700;
  }
`

const Details = () => {
  return (
    <section className={styles}>
      <h1 className="title">
        Brennan Glynn <br />
        Software Engineer
      </h1>

      <div className="links">
        <ul>
          <li>
            <a href="https://linkedin.com/in/brennanglynn">linkedin</a>
          </li>
          <li>
            <a href="https://github.com/brennanglynn">github</a>
          </li>
          <li>
            <a href={resume} target="_blank" rel="noopener noreferrer">
              resume
            </a>
          </li>
          <li>
            <Link to="/stream">3d print stream</Link>
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
