import React from 'react'
import { css } from 'emotion'
import { Typography } from '@mui/material'
import resume from '../assets/resume.pdf'

const styles = css`
  display: flex;
  flex-direction: column;
  padding-top: 4rem;

  a {
    color: #111;
    font-family: helvetica neue, helvetica, sans-serif;
    transition: color 0.15s ease-in;
    text-decoration: none;
  }

  a:hover {
    color: #aaa;
  }

  .MuiTypography-h3 {
    font-weight: 700;
    font-size: 2.25rem;
    font-family: helvetica neue, helvetica, sans-serif;
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
      <Typography variant="h3">
        Brennan Glynn <br />
        Software Engineer
      </Typography>

      <div className="links">
        <ul>
          <li>
            <a href="https://linkedin.com/in/brennanglynn">linkedin</a>
          </li>
          <li>
            <a href="https://github.com/brennanglynn">github</a>
          </li>
          <li>
            <a href={resume}>resume</a>
          </li>
        </ul>
      </div>

      <section className="contact">
        <a className="contact" href="mailto:glynnbrennan@gmail.com">
          contact
        </a>
      </section>
    </section>
  )
}

export default Details
