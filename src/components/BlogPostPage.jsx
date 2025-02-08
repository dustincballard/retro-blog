import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogPostPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 mb-20">
      {/* Header */}
      <div className="bg-white border-2 border-black shadow-brutal p-8 mb-8">
        <div className="font-mono text-sm mb-4 inline-block bg-retro-pink px-3 py-1 border-2 border-black transform -rotate-1">
          JULY 2023
        </div>
        <h1 className="text-5xl font-bold mb-6 font-mono" style={{ textShadow: '2px 2px 0 #000' }}>
          The Art of Skeumorphism
        </h1>
        <div className="flex gap-3">
          <span className="bg-retro-green px-3 py-1 border-2 border-black text-sm font-bold">
            #retro
          </span>
          <span className="bg-retro-yellow px-3 py-1 border-2 border-black text-sm font-bold">
            #design
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white border-2 border-black shadow-brutal p-8 mb-8">
        <div className="prose font-mono space-y-6">
          <p className="leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          {/* Quote Card */}
          <blockquote className="my-8 bg-[#f0f0f0] p-6 border-2 border-black shadow-brutal transform -rotate-1">
            <p className="text-xl mb-4">
              "Design is not just what it looks like and feels like. Design is how it works."
            </p>
            <footer className="font-bold">— Steve Jobs</footer>
          </blockquote>

          <h2 className="text-3xl font-bold mt-12 mb-6" style={{ textShadow: '1px 1px 0 #000' }}>
            Understanding Skeumorphism
          </h2>

          <p className="leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          {/* Info Box */}
          <div className="bg-retro-yellow border-2 border-black p-6 my-8 transform rotate-1 shadow-brutal">
            <h3 className="font-bold mb-4">Key Takeaways:</h3>
            <ul className="list-disc pl-4 space-y-2">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              <li>Sed do eiusmod tempor incididunt ut labore</li>
              <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
            </ul>
          </div>

          <p className="leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>

          {/* Code Example */}
					<pre className="bg-[#1a1a1a] p-6 border-2 border-black font-mono text-retro-green text-sm my-8">
					  <code>
					    {'.skeumorphic-button {'}<br />
					    &nbsp;&nbsp;background: linear-gradient(to bottom, #ffffff, #e0e0e0);<br />
					    &nbsp;&nbsp;border: 1px solid rgba(0,0,0,0.2);<br />
					    &nbsp;&nbsp;box-shadow: 0 1px 2px rgba(0,0,0,0.2);<br />
					    {'}'}
					  </code>
					</pre>

          <h2 className="text-3xl font-bold mt-12 mb-6" style={{ textShadow: '1px 1px 0 #000' }}>
            Modern Applications
          </h2>

          <p className="leading-relaxed">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>
      </div>

      {/* Author Card */}
      <div className="bg-white border-2 border-black shadow-brutal p-6">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-retro-pink border-2 border-black rounded-full flex items-center justify-center font-bold">
            RW
          </div>
          <div>
            <h3 className="font-bold mb-1">Written by RetroWriter</h3>
            <p className="text-gray-600 text-sm">Design enthusiast & pixel perfectionist</p>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <Link to="/" className="inline-block mt-12 px-6 py-3 bg-retro-yellow border-2 border-black shadow-brutal 
                            hover:translate-x-1 hover:translate-y-1 hover:shadow-none 
                            transition-all font-bold transform -rotate-1">
        ← Back to Home
      </Link>
    </article>
  )
}
