import React from 'react'

export default function Layout(props) {
  const { children } = props

  const header = (
    <header>
      <h1 className='text-gradient'>The Brogram</h1>
      <p><strong>The 30 Simple Workouts Programme</strong></p>
    </header>
  )

  const footer = (
    <footer>
      <p>Built by <a href='' target='_blank'>Tom Hennessy</a></p>
    </footer>
  )

  // https://YOUR_USERNAME.netlify.app

  return (
    <>
      {header}
      {children}
      {footer}
    </>
  )
}
