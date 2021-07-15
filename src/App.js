import React from 'react'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Projects from './components/Projects'
export default function App() {
  return (
    <div className="overflow-hidden">
      <Nav />
      <Hero />
      <hr className="border-black" />
      <Projects/>
    </div>
  )
}
