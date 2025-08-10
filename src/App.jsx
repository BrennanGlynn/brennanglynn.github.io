import React from 'react'
import { css } from 'emotion'
import Details from './components/Details'

const styles = css`
  margin: 4rem;
`

function App() {
  return (
    <article className={styles}>
      <Details />
    </article>
  )
}

export default App
