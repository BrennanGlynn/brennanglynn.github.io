import React, { useState, useEffect } from 'react'
import { css, keyframes } from 'emotion' // Imported keyframes for the blinking animation
import { Link } from 'react-router-dom'

// Keyframe animation for the live dot to pulse on/off
const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`

const styles = css`
  display: flex;
  flex-direction: column;
  background: #fff;
  font-family: 'helvetica neue', helvetica, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding-top: 4rem; /* Matches Details.jsx padding */
  width: 100%;
  position: relative; /* Allows absolute positioning for the back link */

  .back-link {
    position: absolute;
    top: 1.5rem; /* Floats above the 4rem padding area */
    left: 0;

    a {
      display: inline-flex;
      color: #111;
      transition: color 0.15s ease-in;
      &:hover {
        color: #aaa;
      }
    }

    svg {
      width: 24px;
      height: 24px;
    }
  }

  .view-container {
    width: 100%;
    min-height: 200px;
    display: flex;
    flex-direction: column;
  }

  .header {
    margin-bottom: 1.5rem;
  }

  .title {
    margin: 0;
    font-weight: 700;
    font-size: 2.25rem; /* Matches your bio h1 size exactly */
    line-height: 1.2;
    text-transform: uppercase;
    letter-spacing: -0.1rem;
    color: #111;
  }

  .status-text {
    font-size: 0.875rem;
    text-transform: lowercase;
    color: #aaa;
    margin-top: 0.25rem;
  }

  .stream-container,
  .offline-placeholder {
    width: 100%;
    aspect-ratio: 16 / 9;
    background: #fdfdfd;
    border: 1px solid #eee;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative; /* Added relative positioning to anchor the absolute badge */
  }

  .offline-placeholder {
    flex-direction: column;
    color: #ccc;
    background: #fafafa;

    svg {
      width: 48px;
      height: 48px;
      margin-bottom: 1rem;
      opacity: 0.5;
    }

    p {
      text-transform: lowercase;
      font-size: 0.875rem;
      font-weight: 700;
      color: #111;
    }
  }

  .stream-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* Removed default grayscale filter */
    /* Removed transition properties as they are no longer needed without filters */
  }

  /* NEW CSS: Styling for the Live Badge overlay */
  .live-badge {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background: rgba(17, 17, 17, 0.7); /* Translucent background */
    color: #fff;
    padding: 0.4rem 0.6rem;
    display: flex;
    align-items: center;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    z-index: 10; /* Ensures it floats above the video feed */
    pointer-events: none; /* Allows user to click "through" the badge to the image on mobile */
  }

  /* NEW CSS: Styling for the red pulsing dot */
  .live-dot {
    height: 8px;
    width: 8px;
    background-color: #ff4136; /* Red color */
    border-radius: 50%;
    display: inline-block;
    margin-right: 0.5rem;
    animation: ${blink} 1.5s step-start infinite; /* Applied blinking keyframe animation */
  }

  .progress-section {
    margin-top: 1.5rem;
    height: 30px;
  }

  .progress-labels {
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
  }

  .progress-bar-bg {
    height: 1px;
    width: 100%;
    background: #eee;
  }

  .progress-bar-fill {
    height: 100%;
    background: #111;
    transition: width 1s ease-in-out;
  }
`

const PrinterDashboard = () => {
  const [printerData, setPrinterData] = useState({
    isOnline: false,
    isPrinting: false,
    status: 'connecting...',
    progress: 0,
  })

  // The proxy handles authorization for the main site data.
  const WORKER_URL = 'https://octoprint-status-proxy.glynnbrennan.workers.dev/'

  // The stream URL now handles authorization via the 'Octoprint Webcam' Zero Trust application.
  const STREAM_URL = 'https://cam.brennanglynn.com/?action=stream'

  useEffect(() => {
    const checkPrinter = async () => {
      try {
        const response = await fetch(WORKER_URL)
        if (!response.ok) throw new Error()
        const data = await response.json()

        setPrinterData({
          isOnline: data.isOnline,
          isPrinting: data.isPrinting,
          status: data.state.toLowerCase(),
          progress: parseFloat(data.progress) || 0,
        })
      } catch (err) {
        console.error('Error fetching printer status:', err)
        setPrinterData(prev => ({
          ...prev,
          isOnline: false,
          status: 'offline',
        }))
      }
    }
    checkPrinter()
    const interval = setInterval(checkPrinter, 15000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (!printerData.isOnline) {
      document.title = 'Workshop Offline | Brennan Glynn'
    } else if (printerData.isPrinting) {
      document.title = `Printing (${printerData.progress}%) | Brennan Glynn`
    } else {
      document.title = 'Workshop Live | Brennan Glynn'
    }
  }, [printerData])

  return (
    <section className={styles}>
      <div className="back-link">
        <Link to="/" aria-label="back to bio">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </Link>
      </div>

      <div className="view-container">
        {!printerData.isOnline ? (
          <div className="offline-view">
            <div className="header">
              <h2 className="title">Workshop Quiet</h2>
              <div className="status-text">
                ender 5 pro — {printerData.status}
              </div>
            </div>
            <div className="offline-placeholder">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
                <line x1="12" y1="2" x2="12" y2="12"></line>
              </svg>
              <p>offline</p>
            </div>
          </div>
        ) : (
          <div className="active-view">
            <div className="header">
              <h2 className="title">Workshop Live</h2>
              <div className="status-text">
                {printerData.status} — austin, tx
              </div>
            </div>
            <div className="stream-container">
              <div className="live-badge">
                <span className="live-dot" />
                Live
              </div>

              <img
                src={`${STREAM_URL}&${new Date().getTime()}`}
                alt="printer stream"
              />
            </div>
            <div className="progress-section">
              {printerData.isPrinting && (
                <>
                  <div className="progress-labels">
                    <span>progress</span>
                    <span>{printerData.progress}%</span>
                  </div>
                  <div className="progress-bar-bg">
                    {printerData.progress > 0 && (
                      <div
                        className="progress-bar-fill"
                        style={{ width: `${printerData.progress}%` }}
                      />
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default PrinterDashboard
