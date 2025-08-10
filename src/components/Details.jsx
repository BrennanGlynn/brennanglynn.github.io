// Details.jsx (Emotion Only)

import React from 'react'
import { css } from 'emotion'
import resume from '../assets/resume.pdf'

const styles = css`
  display: flex;
  flex-direction: column;
  padding-top: 4rem;

  a {
    color: #111;
    font-family: 'helvetica neue', helvetica, sans-serif;
    transition: color 0.15s ease-in;
    text-decoration: none;
  }

  a:hover {
    color: #aaa;
  }

  .title {
    /* These styles replicate the MUI h3 variant and your overrides */
    margin: 0; /* h1 has default margins, so we reset them */
    font-family: 'helvetica neue', helvetica, sans-serif;
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
        </ul>
      </div>

      <section className="contact">
        <a href="mailto:glynnbrennan@gmail.com">contact</a>
      </section>
    </section>
  )
}

export default Details
