import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { css } from 'emotion'
import Details from './components/Details'
import Projects from './components/Projects'
import PrinterDashboard from './components/PrinterDashboard'

// This is your "Source of Truth" for spacing
const pageLayout = css`
  max-width: 800px;
  margin: 4rem auto; /* Centered with 4rem top/bottom margin */
  padding: 0 2rem; /* Side padding for mobile safety */
  color: #000;

  @media (prefers-color-scheme: dark) {
    color: #fff;
  }

  @media (max-width: 600px) {
    margin: 2rem auto;
    padding: 0 1.5rem;
  }
`

const wrapperStyles = css`
  background: #fff;
  min-height: 100vh;
  transition: background-color 0.15s ease-in, color 0.15s ease-in;

  @media (prefers-color-scheme: dark) {
    background: #000;
  }
`

function App() {
  return (
    <Router>
      {/* Any style here applies to the whole background */}
      <div className={wrapperStyles}>
        <article className={pageLayout}>
          <Routes>
            <Route path="/index.html" element={<Navigate to="/" replace />} />
            <Route path="/" element={<Details />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/stream" element={<PrinterDashboard />} />
          </Routes>
        </article>
      </div>
    </Router>
  )
}

export default App
