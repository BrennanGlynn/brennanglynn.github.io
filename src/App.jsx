import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { css } from 'emotion'
import Details from './components/Details'
import PrinterDashboard from './components/PrinterDashboard'

const styles = css`
  margin: 4rem;
  @media (max-width: 600px) {
    margin: 2rem;
  }
`

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Home Page */}
        <Route
          path="/"
          element={
            <article className={styles}>
              <Details />
            </article>
          }
        />

        {/* Dedicated Stream Page */}
        <Route
          path="/stream"
          element={
            <div
              className={css`
                background: #fff;
                min-height: 100vh;
                padding: 2rem;
              `}
            >
              <PrinterDashboard />
            </div>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
