import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { css } from 'emotion'
import Details from './components/Details'
import PrinterDashboard from './components/PrinterDashboard'

// This is your "Source of Truth" for spacing
const pageLayout = css`
  max-width: 800px;
  margin: 4rem auto; /* Centered with 4rem top/bottom margin */
  padding: 0 2rem; /* Side padding for mobile safety */

  @media (max-width: 600px) {
    margin: 2rem auto;
    padding: 0 1.5rem;
  }
`

function App() {
  return (
    <Router>
      {/* Any style here applies to the whole background */}
      <div
        className={css`
          background: #fff;
          min-height: 100vh;
        `}
      >
        <article className={pageLayout}>
          <Routes>
            <Route path="/" element={<Details />} />
            <Route path="/stream" element={<PrinterDashboard />} />
          </Routes>
        </article>
      </div>
    </Router>
  )
}

export default App
