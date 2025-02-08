import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogPost({ title, date, excerpt }) {
  return (
    <Link to="/post" className="block">
      <article className="group relative bg-white p-8 border-2 border-black shadow-brutal 
                      mb-12 hover:translate-x-1 hover:translate-y-1 hover:shadow-none 
                      transition-all cursor-pointer transform hover:-rotate-1">
        <div className="absolute -top-4 -right-4 bg-retro-pink px-4 py-2 
                    border-2 border-black rotate-3 group-hover:rotate-6 
                    transition-transform font-mono text-sm z-10">
          {date}
        </div>
        
        <div className="inset-shadow bg-[#f0f0f0] -mx-4 -mt-4 p-4 border border-black">
          <h2 className="text-3xl font-bold mb-2 font-mono" 
              style={{ textShadow: '1px 1px 0 #000' }}>
            {title}
          </h2>
        </div>

        <p className="mt-6 text-gray-800 leading-relaxed font-mono">
          {excerpt}
        </p>

        <div className="mt-6 flex gap-3">
          <span className="bg-retro-green px-3 py-1 border-2 border-black 
                         transform -rotate-2 text-sm font-bold">
            #retro
          </span>
          <span className="bg-retro-yellow px-3 py-1 border-2 border-black 
                         transform rotate-2 text-sm font-bold">
            #design
          </span>
        </div>

        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 
                      transition-opacity text-sm font-mono">
          → Read more
        </div>
      </article>
    </Link>
  )
}
