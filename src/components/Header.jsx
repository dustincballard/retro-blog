import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="relative z-10">
      <div className="noise"></div>
      <div className="bg-white border-b-4 border-black mb-8">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <nav className="flex justify-between items-center">
            <Link to="/" className="text-5xl font-bold tracking-tight font-mono"
                style={{ 
                  textShadow: '2px 2px 0 #000, 4px 4px 0 #ff69b4'
                }}>
              RetroLog
            </Link>
            <div className="space-x-4">
              <Link to="/" className="px-6 py-3 bg-retro-yellow border-2 border-black shadow-brutal 
                               hover:translate-x-1 hover:translate-y-1 hover:shadow-none 
                               transition-all font-bold text-lg transform -rotate-1 inline-block">
                Home
              </Link>
              <Link to="/post" className="px-6 py-3 bg-retro-pink border-2 border-black shadow-brutal 
                               hover:translate-x-1 hover:translate-y-1 hover:shadow-none 
                               transition-all font-bold text-lg transform rotate-1 inline-block">
                Sample Post
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
