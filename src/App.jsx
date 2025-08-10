// src/App.jsx

import React, { useState } from 'react'
import { css } from 'emotion'
import Details from './components/Details'
import Projects from './components/Projects'

const styles = css`
  margin: 4rem;
  margin-top: 10rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  h1 {
    font-weight: 700;
    font-size: 2.25rem;
    font-family: 'helvetica neue', helvetica, sans-serif;
    text-transform: uppercase;
    letter-spacing: -0.1rem;
    margin: 0;
  }

  .page-content {
    padding-top: 1rem;
  }
`

function App() {
  const [page, setPage] = useState('home')

  const navigateTo = targetPage => {
    setPage(targetPage)
    window.scrollTo(0, 0)
  }

  return (
    <article className={styles}>
      <h1>
        Brennan Glynn <br />
        Software Engineer
      </h1>

      <div className="page-content">
        {page === 'home' && <Details onNavigate={navigateTo} />}
        {page === 'projects' && <Projects onNavigate={navigateTo} />}
      </div>
    </article>
  )
}

export default App
