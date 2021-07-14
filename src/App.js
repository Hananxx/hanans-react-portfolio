import React from 'react'
import Hero from './components/Hero'
import Nav from './components/Nav'
export default function App() {
  return (
    <div className="border border-gray-700 mt-4 h-screen">
      <Nav />
      <Hero />
      <hr className="border-black" />
    </div>
  )
}
